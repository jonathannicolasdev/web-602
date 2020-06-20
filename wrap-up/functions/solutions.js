// Function Definition
function calculateBill(billAmount, taxRate = 0.1, tipRate = 0.1) {
  // this is the function body
  console.log("Running Calculate Bill!!");
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call. Or **Run**
const myAmount = 500;
const myTaxRate = 0.3;
const myTotal = calculateBill(myAmount, myTaxRate);
console.log(myTotal);

const myBill = calculateBill(100);
console.log(`myBill is ${myBill}`);
