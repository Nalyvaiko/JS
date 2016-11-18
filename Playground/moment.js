const moment = require('moment');

const timeFormat = moment().format();
const timeStamp = moment().unix();

console.log('Time format: ', timeFormat);
console.log('Timestamp: ', timeStamp);

const time = moment.unix(timeStamp).format('MMMM Do YYYY @ h:mm a');
console.log('Time: ', time);
