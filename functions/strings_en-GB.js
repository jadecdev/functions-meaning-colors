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
    "name": "red",
    "info": `Red is the colour of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love.
        Red is a very emotionally intense colour. It enhances human metabolism, increases respiration rate, and raises blood pressure. It has very high visibility, which is why stop signs, stoplights, and fire equipment are usually painted red. In heraldry, red is used to indicate courage. It is a colour found in many national flags.
        Red brings text and images to the foreground. Use it as an accent colour to stimulate people to make quick decisions; it is a perfect colour for 'Buy Now' or 'Click Here' buttons on Internet banners and websites. In advertising, red is often used to evoke erotic feelings (red lips, red nails, red-light districts, 'Lady in Red', etc). Red is widely used to indicate danger (high voltage signs, traffic lights). This colour is also commonly associated with energy, so you can use it when promoting energy drinks, games, cars, items related to sports and high physical activity.
        Light red represents joy, sexuality, passion, sensitivity, and love.
        Pink signifies romance, love, and friendship. It denotes feminine qualities and passiveness.
        Dark red is associated with vigor, willpower, rage, anger, leadership, courage, longing, malice, and wrath.
        Brown suggests stability and denotes masculine qualities.
        Reddish-brown is associated with harvest and fall.`,
    "img": "https://image.noelshack.com/fichiers/2017/38/3/1505907026-red.jpg"
  },
  {
    "name": "green",
    "info": `Green is the colour of nature. It symbolizes growth, harmony, freshness, and fertility. Green has strong emotional correspondence with safety. Dark green is also commonly associated with money.

    Green has great healing power. It is the most restful colour for the human eye; it can improve vision. Green suggests stability and endurance. Sometimes green denotes lack of experience; for example, a 'greenhorn' is a novice. In heraldry, green indicates growth and hope. Green, as opposed to red, means safety; it is the colour of free passage in road traffic.

    Use green to indicate safety when advertising drugs and medical products. Green is directly related to nature, so you can use it to promote 'green' products. Dull, darker green is commonly associated with money, the financial world, banking, and Wall Street.

    Dark green is associated with ambition, greed, and jealousy.
    Yellow-green can indicate sickness, cowardice, discord, and jealousy.
    Aqua is associated with emotional healing and protection.
    Olive green is the traditional colour of peace.`,
    "img": "https://image.noelshack.com/fichiers/2017/38/3/1505907026-green.jpeg"
  },
  {
    "name": "blue",
    "info": `Blue is the colour of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven.
        Blue is considered beneficial to the mind and body. It slows human metabolism and produces a calming effect. Blue is strongly associated with tranquility and calmness. In heraldry, blue is used to symbolize piety and sincerity.
        You can use blue to promote products and services related to cleanliness (water purification filters, cleaning liquids, vodka), air and sky (airlines, airports, air conditioners), water and sea (sea voyages, mineral water). As opposed to emotionally warm colours like red, orange, and yellow; blue is linked to consciousness and intellect. Use blue to suggest precision when promoting high-tech products.
    Blue is a masculine colour; according to studies, it is highly accepted among males. Dark blue is associated with depth, expertise, and stability; it is a preferred colour for corporate America.
    Avoid using blue when promoting food and cooking, because blue suppresses appetite. When used together with warm colours like yellow or red, blue can create high-impact, vibrant designs; for example, blue-yellow-red is a perfect colour scheme for a superhero.
    Light blue is associated with health, healing, tranquility, understanding, and softness.
    Dark blue represents knowledge, power, integrity, and seriousness.`,
    "img": "https://image.noelshack.com/fichiers/2017/38/3/1505907026-blue.jpeg"
  }
];

const prefix = "Sure, here is the info about the colour %s";
const notFound = "Sorry I do not have info about this colour";
const suffix = "What colour do you want info about next?";
const suggestions = ["red", "blue", "green"];

// Use deepFreeze to make the constant objects immutable so they are not unintentionally modified
module.exports = deepFreeze({
  colors,
  prefix,
    notFound,
    suffix,
    suggestions
});
