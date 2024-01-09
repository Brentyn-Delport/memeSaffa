# Meme SAFFA App

## Description

Meme SAFFA is a web application designed to showcase and sell South African themed memes and merchandise. This platform allows users to browse a selection of meme-related products, add them to a cart, and proceed through a checkout process.

## Features

- Browse meme merchandise
- Add items to the shopping cart
- Checkout items from the shopping cart
- User authentication: Sign In and Register
- Responsive design for various devices
- Contact page with office location and contact details

## Technologies

- React
- Redux for state management
- React Bootstrap for styling
- React Router for navigation

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Brentyn-Delport/meme-sa.git
   ```
   Navigate to the Project Folder:
   ```sh
   cd path/to/meme-saffa-app
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Start the Application:**
   ```sh
   npm start
   ```
   This will launch the app in your default browser at http://localhost:3000.

## Usage

- View top memes and our top sellers on the Home page.
- Navigate to the Merchandise page to see all available products.
- Click on any product to add it to the cart.
- Sign in or register to proceed with adding items to the cart.
- Visit the cart page to review items before checkout.
- Proceed to the Checkout page for payment and shipping details.
- Contact us through the Contact page for any inquiries or support.

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

## Building for Production

Run `npm run build` to build the app for production to the build folder.

## Deployment

Refer to the deployment section for more information on deploying the application.

## Acknowledgments

- South African meme community
- React and Redux documentation
- Memes sourced from supermeme.ai

## Learn More

For more information on React and Create React App:

- [Create React App documentation](https://create-react-app.dev/docs/getting-started/).
- [React documentation](https://reactjs.org/).

## Note to Users

This application is developed with Node.js and npm. Ensure these are installed on your machine to run the project successfully. The application is in a developmental stage and may undergo frequent updates.
