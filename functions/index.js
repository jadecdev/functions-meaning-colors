'use strict';

const {ApiAiApp} = require('actions-on-google');
const functions = require('firebase-functions');
const {sprintf} = require('sprintf-js');

const DEFAULT_LOCALE = 'en-US';
const localizedStrings = {
  'en-US': require('./strings_en-US.js'),
  'en-GB': require('./strings_en-GB.js'),
  'fr-FR': require('./strings_fr-FR.js')
};

process.env.DEBUG = 'actions-on-google:*';

/** API.AI Actions {@link https://api.ai/docs/actions-and-parameters#actions} */
const Actions = {
  FALLBACK: 'intent.unknown',
  TELL_COLOR: 'intent.choose_color'
};
/** API.AI Parameters {@link https://api.ai/docs/actions-and-parameters#parameters} */
const Parameters = {
  COLOR: 'color'
};
/** API.AI Contexts {@link https://api.ai/docs/contexts} */
const Contexts = {};
/** API.AI Context Lifespans {@link https://api.ai/docs/contexts#lifespan} */
const Lifespans = {
  DEFAULT: 5,
  END: 0
};

/** @param {Array<string>} messages The messages to concat */
const concat = messages => messages.map(message => message.trim()).join(' ');

// Polyfill Object.values to get the values of the keys of an object
if (!Object.values) {
  Object.values = o => Object.keys(o).map(k => o[k]);
}

/** @typedef {*} ApiAiApp */

/**
 * Greet the user and direct them to next turn
 * @param {ApiAiApp} app ApiAiApp instance
 * @return {void}
 */
const fallback = app => {
  const strings = localizedStrings[app.getUserLocale()] || localizedStrings[DEFAULT_LOCALE];

    /** @type {string} */
  const rawInput = app.getRawInput();
  const response = sprintf(strings.general.unhandled, rawInput);
    /** @type {boolean} */
  const screenOutput = app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT);
  if (!screenOutput) {
    return app.ask(response, strings.general.noInputs);
  }
  const suggestions = strings.categories.map(category => category.suggestion);
  const richResponse = app.buildRichResponse()
        .addSimpleResponse(response)
        .addSuggestions(suggestions);

  app.ask(richResponse, strings.general.noInputs);
};

/**
 * Say the color description
 * @param {ApiAiApp} app ApiAiApp instance
 * @return {void}
 */
const tellColor = app => {
  const strings = localizedStrings[app.getUserLocale()] || localizedStrings[DEFAULT_LOCALE];

  const parameter = Parameters.COLOR;
    /** @type {string} */
  const colorName = app.getArgument(parameter);
    /** @type {boolean} */
  const screenOutput = app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT);
  const colorInfo = strings.colors.find(c => c.name === colorName);
  if (!colorInfo) {
        /** @type {string} */
    const action = app.getIntent();
    return console.error(`${parameter} parameter is unrecognized or not provided by API.AI ${action} action`);
  }

  if (!screenOutput) {
    return app.ask(concat([strings.prefix, colorInfo.info, strings.suffix]));
  }

  const card = app.buildBasicCard(colorInfo.info)
        .setImage(colorInfo.img, colorInfo.name);

  const richResponse = app.buildRichResponse()
        .addSimpleResponse(strings.prefix)
        .addBasicCard(card)
        .addSimpleResponse(strings.suffix)
        .addSuggestions(strings.suggestions);

  app.ask(richResponse, strings.general.noInputs);
};

/** @type {Map<string, function(ApiAiApp): void>} */
const actionMap = new Map();
actionMap.set(Actions.FALLBACK, fallback);
actionMap.set(Actions.TELL_COLOR, tellColor);

/**
 * The entry point to handle a http request
 * @param {Request} request An Express like Request object of the HTTP request
 * @param {Response} response An Express like Response object to send back data
 */
const meaningOfColors = functions.https.onRequest((request, response) => {
  const app = new ApiAiApp({request, response});
  console.log(`Request headers: ${JSON.stringify(request.headers)}`);
  console.log(`Request body: ${JSON.stringify(request.body)}`);
  app.handleRequest(actionMap);
});

module.exports = {
  meaningOfColors
};
