# Quiosco Next

Quiosco Next is a delivery food application with order management capabilities. This project allows users to browse through various food categories, add items to their cart, and manage their orders efficiently.

## Features

- Browse food items by categories
- Add items to the cart
- Increase or decrease item quantities in the cart
- View order summary with total price
- Remove items from the cart

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and generating static websites.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### Backend

- **Prisma**: An ORM (Object-Relational Mapping) tool for database management.
- **Zustand**: A small, fast, and scalable state-management solution for React.

### Other Tools

- **Heroicons**: A set of free, MIT-licensed high-quality SVG icons for you to use in your web projects.
- **Webpack**: A module bundler for JavaScript applications.

## Project Structure

- `components/`: Contains React components used throughout the application.
- `pages/`: Contains Next.js pages for routing.
- `prisma/`: Contains Prisma schema and database-related files.
- `src/`: Contains additional source files like store and utility functions.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/quiosco-next.git
   cd quiosco-next
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the database**:

   ```bash
   npx prisma migrate dev --name init
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
