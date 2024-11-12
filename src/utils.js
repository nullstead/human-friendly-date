// src/utils.js
// Helper Utilities

const isValidDate = (timestamp) => !isNaN(new Date(timestamp).getTime());

module.exports = { isValidDate };
