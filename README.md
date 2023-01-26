# KKST-App 
### By: Cody Jennings 

## Introduction

This is the back-end API for my KKST-App/Urban Dictionary Clone. It uses backend technologies: Node, Express, Mongoose, MongoDB. The API is responsible for handling user-generated content, such as phrases, translation, examples, authors, and creadted dates. This is where all of the data is stored while react on the frontend takes care of styling. I only used one model for this api

[Back-End/MongoDB-Mongoose,Express,Node Repository](https://github.com/Cody-Jennings/Project3-KKST-App-backend.git)

[Back-End/MongoDB-Mongoose,Express,Node Live API](https://kkst-backend.onrender.com/KKST-App)

[Front-End/React Repository](https://github.com/Cody-Jennings/Project3-KKST-App-frontend.git)

[Front-End/React Live Site](https://kkst-frontend.onrender.com/)

## Deployment & Build Status

This project is a hosted and deployed via Render. Render monitors this repository and will redploy on new commits.

## Technologies, Languages, Libraries & Platforms Used

- MongoDB 
- Mongoose 
- Node.js 
- ExpressJS 
- Render 

## Features

1. The API has full CRUD functionality.
2. It uses the Mongoose library to interact with MongoDB.
3. It includes routes for getting, creating, updating, and deleting phrases.
4. The API uses CORS to allow the front-end to access the API.

### Files & Directories 

- server.js - the main file for the express app, where the express app is created and the middleware and routes are set up.  
- package.json - lists the packages (including express) that the project depends on, as well as scripts for running the app and testing.  
- package-lock.json - records the exact versions of package dependencies that were installed.  
- README.md - a file containing information about the project, including instructions for how to set it up and use it. This file is often displayed on the project's homepage on GitHub.  
- controllers/ - contains the route handlers for the app, which define the behavior for each URL endpoint.  
- models/ - This directory contain files for setting up the database schema and defining models for interacting with the data in MongoDB via Mongoose.  
- docs/ - contains documentation files for the project, iscreenshots, requirements and other files used by the developer such as an API reference or user guide.  
- utilities/ - contains utility files for the project, files to seed the database, or other files used by the developer.  

## Endpoints 

### Model  
    Phrase: String,
    Translation: String,
    Example: String,
    Author: String,
    Date: String  

##### Sample Message Document

```js
{
 
"Phrase": "No-Cap",
"Translation": "People say “no cap” to convey that they are being totally and completely honest.",
"Example": "That was good, no cap.",
"Author": "Hadia",
"Date": "2022-12-14",
"__v": 0
}

```js
 

## Installation Instructions

**Step 1: Clone the repository**  

Run the following code in your terminal to download the code:  

`git clone https://github.com/Cody-Jennings/Project3-KKST-App-backend.git`

**Step 2: Install Dependencies**

**Step 3: Configure the application**

Create a .env file in the root directory and add a MONGODB_URI variable with the link to your MongoDB database. Add the PORT as well.


**Step 4: Start the application**

Run the following code in your terminal to start the application:

`npm start`

The app will now be running at <http://localhost:3001> by default.

**Step 5: Seed the Database**

You can seed the database with some initial data by sending a GET request to http://localhost:3001/seed

## API Functionality

1. API can perform basic CRUD operations.
2. All changes persist whether local or on the deployed site.
3. API is deployed on Render.
4. API will only accept whitelisted domains.

## Resources

- [w3Schools]

- [Youtube]

- [Github]

- [Stack Overflow]

- [MDN]

- [Technology component Documentation]

- [Urban Dictionary]

## Acknowledgements

- Tishana Trainor 
- Kasper Kain
- Arianna Bunn
- Hadia Shafique
- Sharon Ogbonna
- Long Hoang
- Gary Newton and his excellent back-end README example
- All other classmates who took time to help with my project code and gave confidence boosters and feedback/criticism.


## Disclaimer

I am not affiliated with nor own any rights regarding this translator apps phrases, translations, examples or author names. No profits were generated from this project. All materials utilized were for educational and demonstration purposes only. 