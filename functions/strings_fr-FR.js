/**
 * This file contains the constant strings to be used in the code logic to allow for easy editing
 * Below are eslint comments to enforce JSON like syntax since strings are usually stored in JSON
 * They are written in JavaScript for easier organization of the data and in case functions are used
 */

/* eslint quote-props: ["error", "always"] */
/* eslint quotes: ["error", "double"] */

// eslint-disable-next-line quotes
const deepFreeze = require('deep-freeze');

const colors = [
  {
    "name": "rouge",
    "info": `Info rouge en français`,
    "img": "https://image.noelshack.com/fichiers/2017/38/3/1505907026-red.jpg"
  },
  {
    "name": "vert",
    "info": `Info vert en français`,
    "img": "https://image.noelshack.com/fichiers/2017/38/3/1505907026-green.jpeg"
  },
  {
    "name": "bleu",
    "info": `Info bleu en français`,
    "img": "https://image.noelshack.com/fichiers/2017/38/3/1505907026-blue.jpeg"
  }
];

const prefix = "Voici les informations concernant la couleur %s";
const notFound = "Désolé, je n'ai pas d'information à propos de la couleur %s";
const suffix = "A propos de quelle couleur voulez-vous en savoir plus ?";
const suggestions = ["rouge", "bleu", "vert"];

// Use deepFreeze to make the constant objects immutable so they are not unintentionally modified
module.exports = deepFreeze({
  colors,
  prefix,
    notFound,
    suffix,
    suggestions
});
