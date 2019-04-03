const uniqueRandomArray = require('unique-random-array');
const lomNames = require('./lom-names.json');

module.exports = {
  all: lomNames,
  random: uniqueRandomArray(lomNames)
};
