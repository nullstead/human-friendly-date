// src/formats.js
//Date Formatting

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
  
    return `${dayOfWeek}, ${month} ${day}, ${year}`;
  };
  
  module.exports = { formatDate };
  