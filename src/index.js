// src/index.js
//Main Entry Point

const { timeAgo, timeFromNow } = require('./relative');
const { formatDate } = require('./formats');
const locales = require('./locales');
const { isValidDate } = require('./utils');

const HumanFriendlyDate = (timestamp, locale = 'en') => {
  if (!isValidDate(timestamp)) {
    throw new Error('Invalid timestamp');
  }

  const timeAgoStr = timeAgo(timestamp);
  const timeFromNowStr = timeFromNow(timestamp);
  const formattedDate = formatDate(timestamp);
  
  const localeStrings = locales[locale];

  return {
    timeAgo: localeStrings ? localeStrings.timeAgo(timeAgoStr) : timeAgoStr,
    timeFromNow: localeStrings ? localeStrings.timeFromNow(timeFromNowStr) : timeFromNowStr,
    formattedDate,
  };
};

module.exports = { HumanFriendlyDate };
