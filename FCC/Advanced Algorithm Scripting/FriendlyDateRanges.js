function makeFriendlyDates(arr) {
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function addNumSuffix(num) {
        num = +num;
        nums = [11, 12, 13];

        if (nums.indexOf(num) == -1) {
            switch (num % 10) {
                case 1: return num + 'st';
                case 2: return num + 'nd';
                case 3: return num + 'rd';
                default: return num + 'th';
            }
        } else {
            return num + 'th';
        }
    }

    // Create UTC date object
    function convertDate(str) {
        var dateArr = str.split('-');
        return new Date(Date.UTC(dateArr[0], dateArr[1] - 1, dateArr[2]));
    }

    // Get month name
    function getMonthStr(date) {
        return month[date.getUTCMonth()];
    }

    // Get month difference in dates
    function getMonthDiff(date1, date2) {
        var months1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
        var months2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
        return months2 - months1;
    }

    // Get day difference
    function getDateDiff(date1, date2) {
        return date2.getUTCDate() - date1.getUTCDate();
    }

    // Algorithm to display date range

    var date1 = convertDate(arr[0]);
    var date2 = convertDate(arr[1]);

    // If the same day
    if (date1.getTime() === date2.getTime()) {
        return [getMonthStr(date1) + ' ' + addNumSuffix(date1.getUTCDate()) + ', ' + date1.getUTCFullYear()];
    } else
    // If the same month and year
    if (date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCFullYear() === date2.getUTCFullYear()) {
        return [getMonthStr(date1) + ' ' + addNumSuffix(date1.getUTCDate()), addNumSuffix(date2.getUTCDate())];
    } else
        // If diff year but range less than a year
    if (getMonthDiff(date1, date2) < 12 && date1.getUTCFullYear() !== date2.getUTCFullYear()) {
        return [getMonthStr(date1) + ' ' + addNumSuffix(date1.getUTCDate()), getMonthStr(date2) + ' ' + addNumSuffix(date2.getUTCDate())];
    } else
    // Same year and range less than a year
    if (getMonthDiff(date1, date2) < 12 && date1.getUTCFullYear() === date2.getUTCFullYear()) {
        return [getMonthStr(date1) + ' ' + addNumSuffix(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), getMonthStr(date2) + ' ' + addNumSuffix(date2.getUTCDate())];
    } else
    // If diff 12 months
    if (getMonthDiff(date1, date2) === 12 && getDateDiff(date1, date2) < 0) {
        return [getMonthStr(date1) + ' ' + addNumSuffix(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), getMonthStr(date2) + ' ' + addNumSuffix(date2.getUTCDate())];
    }
    // If range more than a year
    else {
        return [getMonthStr(date1) + ' ' + addNumSuffix(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), getMonthStr(date2) + ' ' + addNumSuffix(date2.getUTCDate()) + ', ' + date2.getUTCFullYear()];
    }
}

var res = makeFriendlyDates(["2022-09-05", "2023-09-05"]);
console.log(res);
