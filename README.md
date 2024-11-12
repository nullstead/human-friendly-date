# Human Friendly Date 🤗

A simple JavaScript library to format dates in a human-friendly way, returning relative time expressions such as "5 minutes ago" or "in 2 hours". It also provides the formatted date in a specified locale. The library will support multiple languages in future releases.

## Installation

```bash
npm install human-friendly-date
```


## Usage
The HumanFriendlyDate function provides a convenient way to format timestamps into human-readable strings, including both relative time (e.g., "5 seconds ago", "in 1 hour") and absolute dates (e.g., "Tuesday, November 12, 2024"). It also handles errors gracefully and can be extended for future use cases.



### Example 1: Relative Time (Past)

```javascript
const { HumanFriendlyDate } = require('human-friendly-date');

// Get the current timestamp
const date = new Date();
const timestamp = date.getTime() - 5000; // 5 seconds ago

// Format the timestamp into a human-friendly format
const result = HumanFriendlyDate(timestamp);

console.log(result.timeAgo);     // Output: "5 seconds ago"
console.log(result.timeFromNow); // Output: "in 5 seconds"
```


### Example 2: Relative Time (Future)

```javascript
const { HumanFriendlyDate } = require('human-friendly-date');

// Get the current timestamp and add 1 hour
const date = new Date();
const timestamp = date.getTime() + 3600000; // 1 hour from now

// Format the future timestamp
const result = HumanFriendlyDate(timestamp);

console.log(result.timeAgo);     // Output: "1 hour ago"
console.log(result.timeFromNow); // Output: "in 1 hour"
```


### Formatting Absolute Dates
Use the formatDate function to format a timestamp into a human-readable date in the format: Day of the week, Month Day, Year.

```javascript
const { HumanFriendlyDate } = require('human-friendly-date');

// Get the current timestamp
const date = new Date();
const timestamp = date.getTime();

// Format the timestamp into a full date string
const result = HumanFriendlyDate(timestamp);

console.log(result.formattedDate); // Output: "Tuesday, November 12, 2024"
```


### Handling Invalid Timestamps
If you pass an invalid timestamp, the function will throw an error:

```javascript
try {
  HumanFriendlyDate('invalid', 'en');
} catch (error) {
  console.error(error.message); // Output: "Invalid timestamp"
}
```



### Methods
- HumanFriendlyDate(timestamp)
  Returns an object with relative time and formatted date.

- HumanFriendlyDate(timestamp, languageCode)
  (Optional) Specify a language code (e.g., 'en' for English) for localization.

- timestamp: A valid timestamp (in milliseconds).
  languageCode: The language code for formatting (e.g., 'en' for English).




### Returns
The function returns an object with the following properties:
- timeAgo: A string representing the relative time (e.g., "5 seconds ago").
- timeFromNow: A string representing the time from now (e.g., "in 5 seconds").
- formattedDate: A string representing the fully formatted date (e.g., "Tuesday, November 12, 2024").




### License
MIT