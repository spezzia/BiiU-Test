# BiiU - Test front end

## Steps to run the project

1. Download node.js
   Go to https://nodejs.org/en, install node.js in your computer.
2. Clone the project in your computer.
3. Open a terminal and move to the cloned project.
4. Install all dependencies.
   ```javascript
   	npm run install
   ```
5. Run the project in dev mode.
   ```javascript
   	npm run dev
   ```
6. Open your browser and go to localhost:3001

_The project is actually running on Vercel. [Live Demo](https://bii-u-test.vercel.app/ 'Live Demo')_

_user: test-biiu@gmail.com password:TestBiiu123._

## About the project

This project is develop with [Nextjs v14](https://nextjs.org/ 'Nextjs') with [Tailwind](https://tailwindcss.com/ 'Tailwind'). In this project, react context was used to manage all products in the cart, total price to pay and the user's authentication state. In the context, `useReducer` helps to manage the different actions that the cart can perform and `useState` keeps track of the total amount of the products in the cart.

The products in the project are from [FakeStoreApi](https://fakestoreapi.com/ 'FakeStoreApi'). [Axios](https://axios-http.com/ 'Axios') was added to handle all API requests and promises.

The authentication is handled by [Firebase](https://firebase.google.com/docs/auth?hl=es-419http:// 'Firebase') because it is an easy solution.[ React hook form](https://react-hook-form.com/http:// ' React hook form') helps with validations and state of the form.

#### Pages

- **Home page.** Shows you all products in the shop. You can load more products, add items to your favorites, and go to view product details.
- **Product page.** Shows you details about a product. You can add it to your cart and delete it if needed.
- **Cart page.** Shows you all products that you have added. You can delete a product, change the number of items, and proceed to checkout.
- **Login Page.** Provides an interface to access the platform using an email and password.
