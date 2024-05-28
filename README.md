# FitSync - Project Documentation

## University Details
- **University**: San Jose State University
- **Course**: CMPE 281 - Cloud Technologies
- **Professor**: Sanjay Garje

## Team OOPS404 - FitSync App
- **Students**:
  - Lekhna Gadde
  - Sahiti
  - Ruchik Pravasi
  - Hemang Huria

## Project Introduction
FitSync addresses a common challenge faced by individuals: tracking health and financial well-being simultaneously. There is a noticeable gap in the market for a comprehensive tool that integrates dietary choices and financial expenditures seamlessly. Existing applications focus solely on fitness or budget management, not both. FitSync aims to bridge this gap, helping users maintain a balanced and cost-effective lifestyle.

## Prerequisites
- npm
- React
- Node.js
- MongoDB

## Pre-requisites:

1. Install npm
2. Install React and Nodejs
3. Configure and install MongoDB

## Getting started

#### Step 1: Clone the repository

#### Step 2: Create Your MongoDB Account and Database/Cluster

- Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

- Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to change `<password>` with your own password

- add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes)

#### Step 3: Edit the Environment File

- Check a file named .env in the /backend directory.

  This file will store environment variables for the project to run.

#### Step 4: Update MongoDB URI

In the .env file, find the line that reads:

`DATABASE="your-mongodb-uri"`

Replace "your-mongodb-uri" with the actual URI of your MongoDB database.

#### Step 5: Install Backend Dependencies

In your terminal, navigate to the /backend directory of the project and run the following command to install the backend dependencies:

```bash
npm install
```

This command will install all the required packages specified in the package.json file.

#### Step 6: Run Setup Script

While still in the /backend directory of the project, execute the following command to run the setup script:

```bash
npm run setup
```

This setup script may perform necessary database migrations or any other initialization tasks required for the project.

#### Step 7: Run the Backend Server

In the same terminal, run the following command to start the backend server:

```bash
npm run dev
```

This command will start the backend server, and it will listen for incoming requests.

#### Step 8: Install Frontend Dependencies

Open a new terminal window , and run the following command to install the frontend dependencies:

```bash
cd frontend
```

```bash
npm install
```

#### Step 9: Run the Frontend Server

After installing the frontend dependencies, run the following command in the same terminal to start the frontend server:

```bash
npm run dev
```

This command will start the frontend server, and you'll be able to access the website on localhost:3000 in your web browser.

## Website Login Credentials

Once the website is up and running, you can log in using the following credentials:

`username : admin@demo.com - password : admin123`

Now you should be all set to run the project locally on your machine.
Explore its features.

Will open browser to http://localhost:3000
