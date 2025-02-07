// Task 1: Customer Profile
const customer = { name: "John Doe", age: 35, email:"john.doe@email.com" };// add customer properties

console.log(`Name: ${customer.name}, Age: ${customer.age}, Email: ${customer.email}`); // print customer properties 


// Task 2: Order Details

const order = {orderId: "12345", totalAmount: "150", status: "Processing"}// add order properties
const displayOrder = (order) => {
    console.log(`Order ID: ${order.orderId}, Total Amount: ${order.totalAmount}, Status: ${order.status}`);
} // display order details using this function
displayOrder(order); // call the function


// Task 3: Product Details

let cartItems = ["Avacado", "Peach", "Srawberry"];// add cart items
cartItems.push("Mango");// add a new item to the cart
cartItems.pop();// remove the last item from the cart
cartItems.unshift("Banana");// add a new item to the beginning of the cart
cartItems.shift();// remove the first item from the cart
console.log(cartItems);// print the cart items


// Task 4: Price Adjustments

const prices = [100, 200, 300];// add product prices
const discountedPrices = prices.map(price => price * 0.9);// apply a 10% discount to each price

console.log("Discounted Prices", discountedPrices);// print the discounted prices


// Task 5: Product Availability

const inventory = [
    { name: "Avocado", quantity: 2 },
    { name: "Peach", quantity: 0 },
    { name: "Strawberry", quantity: 5 },
    { name: "Mango", quantity: 10 },
    { name: "Cherry", quantity: 0 }
];// add product quantities for five product inventory items

const availableInventory = inventory.filter(item => item.quantity > 0);// filter out the items that are not available

console.log("Available Inventory", availableInventory);// print the available inventory items


// Task 6: Revenue Calculation

const sales = [500, 300, 200, 400];// add sales data
const totalRevenue = sales.reduce((total, sale) => total + sale, 0);// calculate the total revenue

console.log("Total Revenue", totalRevenue);// print the total revenue


// Task 7: Customer Search

const customers = ["Alice", "Bob", "Charlie", "David"];// add customer names
const findCustomer = (name) => customers.find(customer => customer === "Charlie");// find a customer by name

console.log("Found Customer", findCustomer("Charlie"));// print the found customer


// Task 8: Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}// implement a function to calculate tax amount

const taxAmount = calculateTax(100, 0.1);// calculate the tax amount for an order of $100 with a tax rate of 10%
console.log("Tax Amount", taxAmount);// print the tax amount


// Task 9: Discount Application

function applyDiscount(Price, discount) {
    return Price - (Price * discount);
}// implement a function to apply a discount to a price

const discountedPrice = applyDiscount(100, 0.2);// apply a 20% discount to a product that costs $100

console.log("Discounted Price", discountedPrice);// print the discounted price


// Task 10: Arrow Function

const calculatePoints = (purchaseAmount) => {
    return purchaseAmount / 10;
}// implement an arrow function to calculate points based on the purchase amount

const points = calculatePoints(200);// calculate points for a purchase of $200

console.log("Points", points);// print the points

// Done

