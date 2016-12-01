// Example cash-in-drawer array:
// var cid = [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.10],
//     ["QUARTER", 4.25],
//     ["ONE", 90.00],
//     ["FIVE", 55.00],
//     ["TEN", 20.00],
//     ["TWENTY", 60.00],
//     ["ONE HUNDRED", 100.00]
// ];

function checkCashRegister(price, cash, cid) {
    var changeDue = cash - price;
    var cidSum = Math.round((cid.reduce(function(acc, amount) {
        return acc + amount[1];
    }, 0)) * 100) / 100;

    if (changeDue > cidSum) return 'Insufficient Funds';
    else if (changeDue === cidSum) return 'Closed';

    var newCid = cid.map(function(elt) {
        var cur;
        switch (elt[0]) {
            case 'PENNY':
                cur = 0.01; break;
            case 'NICKEL':
                cur = 0.05; break;
            case 'DIME':
                cur = 0.10; break;
            case 'QUARTER':
                cur = 0.25; break;
            case 'ONE':
                cur = 1.00; break;
            case 'FIVE':
                cur = 5.00; break;
            case 'TEN':
                cur = 10.00; break;
            case 'TWENTY':
                cur = 20.00; break;
            case 'ONE HUNDRED':
                cur = 100.00; break;
        }

        return {
            name: elt[0],
            quantity: Math.round(elt[1]/cur*100)/100,
            currency: cur,
            amount: elt[1]
        };
    });

    var resArr = [];
    for (var i = newCid.length - 1; i >= 0; i--) {
        if (changeDue >= newCid[i].currency) {
            var needQuant = Math.floor(changeDue/newCid[i].currency);

            if (newCid[i].quantity >= needQuant) {
                var amountToChange = Math.round(needQuant * newCid[i].currency * 100) / 100;
                changeDue = Math.round((changeDue - amountToChange) * 100) / 100;
                resArr.push([newCid[i].name, amountToChange]);
            } else if (newCid[i].quantity !== 0) {
                changeDue = Math.round((changeDue - newCid[i].amount)*100)/100;
                resArr.push([newCid[i].name, newCid[i].amount]);
            }
        }
    }

    return changeDue === 0 ? resArr : 'Insufficient Funds';
}

var cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]];

console.log(checkCashRegister(3.26, 100.00, cid));

// Variant 2----------------------------------------------------
// Create an object which hold the denominations and their values
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister2(price, cash, cid) {
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  // Handle exact change
  if (register.total === change) {
    return 'Closed';
  }

  // Handle obvious insufficent funds
  if (register.total < change) {
    return 'Insufficient Funds';
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc; // Return the current Change Array
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  // Here is your change, ma'am.
  return change_arr;
}

checkCashRegister2(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
