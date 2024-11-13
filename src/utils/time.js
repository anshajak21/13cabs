// utils/time.js
export function getSydneyTime() {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const sydneyTime = new Date(utcTime + (3600000 * 10)); // Sydney is UTC +10
    return sydneyTime;
  }
  
  export function isAfterSixPm() {
    const sydneyTime = getSydneyTime();
    return sydneyTime.getHours() >= 18;
    // return true;
  }
  