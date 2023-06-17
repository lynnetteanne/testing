
// Unit Tests:
// 1. A function called "multiplication" that returns the 
// product of the two input numbers.

//expect multiplication(2, 4) to be a number
//expect multiplication(2, 4) to be equal to 8
//expect multiplication("a", 4) to be an error
//expect multiplication(no input) to be an error
//expect multiplication(3.14, 2) to be a decimal
//expect multiplication(29854343243, 2098854387) to be bigint
//expect multiplication(-2, 2) to be negative number
//expect multiplication(-2, -2) to be positive number
//expect multiplication(0, 2) to be 0
//expect multiplication(2.9, 0) to be 0



// 2. A function called "concatOdds" takes two arrays of 
// integers as arguments. It should return a single 
// array that only contains the odd numbers, in ascending 
// order, from both of the arrays.
// Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
// ...should result in [-1, 1, 3, 9, 15]
// Think about the following; you may need to make 
// assumptions or decisions about the prompt and how 
// the code should behave:
// What should happen with unexpected inputs?
// What kinds of unexpected inputs should we worry about?
// What should happen when there are multiples of the 
// same odd number in the arrays? (Hint: We gave you the 
//     answer to this one in the example above.)

//expect concatOdds ([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15]
//expect concatOdds ([4, 2, 2], [6, 2, 2, 10, 4, 52, -4]) to be []
//expect concatOdds ([3, 2, 1], [9, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15]
//expect concatOdds ([3.5, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3.5, 9, 15]
//expect concatOdds ([3, 51117, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15, 51117]



// Functional Tests:
// A shopping cart checkout feature that allows a user to 
// check out as a guest (without an account), or as a logged-in 
// user. They should be allowed to do either, but should be 
// asked if they want to create an account or log in if they 
// check out as a guest.
// Think about the following; you may need to make assumptions 
// or decisions about the prompt and how the feature should behave:
// What should happen if the cart is empty?
// What needs to be shown to the user at each step of check 
// out?
// What behaviors of this feature does the prompt miss or gloss 
// over?
// Hint: Observe the shopping cart and checkout features of some 
// popular websites to get some ideas!

//check if user is logged in
// if no, ask user if they want to login- checkout with account information
// or check out as guest- without account information
// Prompt user to enter their address and billing information if they are checking out as guest
// Use user's account information if checking out as logged in
// Find sum of items in their cart- add tax, shipping costs
// if cart is empty, notify user
// confirm address, shipping preference
// confirm payment
// display overview of order with items, address, shipping, payment and other important info before order is completed
// user clicks complete order button
// order is logged and sent to fulfillment facility
// display reciept of order to user- send a copy to user's email




