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