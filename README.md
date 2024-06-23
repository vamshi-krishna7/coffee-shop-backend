# Coffee Shop Product API

This is a Node.js application for managing coffee shops, built using Express and MongoDB.

# Prerequisites

Make sure you have the following installed on your system:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)
- MongoDB (>= 4.x)

# Install the dependencies:
yarn install

# Configuration
PORT=3000
MONGODB_URI=mongodb://localhost:27017/coffee-shop

# Running the Application
node server.js

# Running the Application On dev Mode
yarn dev

# Project Structure
src/
|-- controllers/     # Controller functions for handling API requests
|-- models/          # Mongoose models
|-- routes/          # API routes
|-- seeder/          # Seeders
|-- server.js        # Entry point
