// tests/index.test.js

const { HumanFriendlyDate } = require('../src');

describe('Human-friendly date formatting', () => {
    it('should format relative time correctly in English', () => {
      const date = new Date();
      const timestamp = date.getTime() - 5000; // 5 seconds ago
  
      const result = HumanFriendlyDate(timestamp, 'en');
      expect(result.timeAgo).toBe('5 seconds ago');  // Correct singular/plural here
      expect(result.timeFromNow).toBe('in 5 seconds');
    });
  
    it('should format a future date correctly in English', () => {
      const date = new Date();
      const timestamp = date.getTime() + 3600000; // 1 hour from now
  
      const result = HumanFriendlyDate(timestamp, 'en');
      expect(result.timeAgo).toBe('1 hour ago'); // Singular 'hour' instead of 'hours'
      expect(result.timeFromNow).toBe('in 1 hour'); // Singular 'hour' instead of 'hours'
    });
  
    it('should handle invalid timestamps', () => {
      expect(() => HumanFriendlyDate('invalid', 'en')).toThrowError('Invalid timestamp');
    });
  });
  