const { HumanFriendlyDate } = require('../src');

const any_timestamp = new Date().getTime() + 3153000000;

const result = HumanFriendlyDate(any_timestamp, 'en');

console.log(result)
