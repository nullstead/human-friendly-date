// src/relative.js
const timeAgo = (timestamp) => {
    const now = new Date().getTime();
    const diff = now - timestamp;
    const seconds = Math.abs(diff) / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30;
    const years = days / 365;
  
    if (seconds < 60) return `${Math.floor(seconds)} seconds`;
    if (minutes < 60) return `${Math.floor(minutes)} minutes`;
    if (hours < 24) return `${Math.floor(hours)} hours`;
    if (days < 30) return `${Math.floor(days)} days`;
    if (months < 12) return `${Math.floor(months)} months`;
    return `${Math.floor(years)} years`;
  };
  
  const timeFromNow = (timestamp) => {
    const now = new Date().getTime();
    const diff = timestamp - now;
    const seconds = Math.abs(diff) / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30;
    const years = days / 365;
  
    if (seconds < 60) return `${Math.floor(seconds)} seconds`;
    if (minutes < 60) return `${Math.floor(minutes)} minutes`;
    if (hours < 24) return `${Math.floor(hours)} hours`;
    if (days < 30) return `${Math.floor(days)} days`;
    if (months < 12) return `${Math.floor(months)} months`;
    return `${Math.floor(years)} years`;
  };
  
  module.exports = { timeAgo, timeFromNow };
  