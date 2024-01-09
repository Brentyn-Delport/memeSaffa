# Meme SAFFA App

## Description

Meme SAFFA is a web application designed to showcase and sell South African themed memes and merchandise. This platform allows users to browse a selection of meme-related products, add them to a cart, and proceed through a checkout process.

## Features

- Browse meme merchandise
- Add items to the shopping cart
- Chekout items from the shopping cart
- User authentication: Sign In and Register
- Responsive design for various devices
- Contact page with office location and contact details

## Installation

To run Meme SAFFA on your local machine, follow these steps after unzipping the project folder:

1. **Navigate to the Project Folder:**

   Open your command line interface (CLI), and change directories (cd) into your project folder.

2. **Install Dependencies:**

   Run `npm install` to install all required dependencies.

3. **Start the Application:**

   Execute `npm start` in your CLI.

This will launch the app in your default browser at `http://localhost:3000`.

## Usage

- View top memes and our top sellers on the Home page.
- Navigate to the Merchandise page to see all available products.
- Click on any product to add it to the cart.
- Sign in or register to proceed with adding items to the cart.
- Visit the cart page to review items before checkout.
- Proceed to the Checkout page for payment and shipping details.
- Contact us through the Contact page for any inquiries or support.

## Technologies

- React
- Redux for state management
- React Bootstrap for styling
- React Router for navigation

## Testing

This project includes unit tests for its Redux actions and reducers to ensure the shopping cart feature works as expected.

### Running Tests

To run the test suite, execute the following command in your CLI:

`npm test`

This command will initiate the test runner and execute all tests found in the `__tests__` directory.

### What to Expect

The tests are designed to validate the following functionalities:

- **Cart Actions:**
  - Adding an item to the cart (`addItem` action).
  - Removing an item from the cart (`removeItem` action).

- **Cart Reducer:**
  - Returning the initial state when no action is given.
  - Handling adding an item to the cart.
  - Handling removing an item from the cart.
  - Calculating the total price correctly.

Each test will output whether it passed or failed, allowing you to ensure the cart's functionality is intact and behaves as expected.

## Acknowledgments

- South African meme community
- React and Redux documentation
- Memes sourced from supermeme.ai

## Note to Users

This application is currently hosted locally and shared via a zip folder. Ensure you have Node.js and npm installed on your machine to run the project successfully. 
# memeSaffa
