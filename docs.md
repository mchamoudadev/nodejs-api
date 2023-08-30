### 1. Introduction: Why Learn Node.js?

**The Concept of Full Stack**:

- Definition: Involves both frontend (user interface) and backend (server, database) development.
- Importance: Mastering both areas allows a developer to build complete applications, a skill highly valued in the industry.

**JavaScript Everywhere**:

- Benefits of using JavaScript on both frontend and backend:
  1. **Consistency**: Fewer context switches increase productivity.
  2. **Shared Code**: Logic or utilities can be reused between frontend and backend.
  3. **Unified Knowledge**: No need to switch mental models or learn a different language's syntax.

**Performance of Node.js**:

- Node.js features an event-driven architecture, efficiently handling many connections simultaneously.
- Its non-blocking I/O avoids waiting on tasks, making operations swift.

**The Ecosystem - npm (Node Package Manager)**:

- npm is the world's largest software registry.
- Provides access to thousands of libraries and tools, accelerating development.

---

### 2. The History of Node.js

**Origins of Node.js**:

- Developed by **Ryan Dahl** in 2009.
- Motivated by dissatisfaction with existing server technologies and their handling of I/O operations.

**Google's V8 JavaScript Engine**:

- V8 is a high-performance JavaScript engine developed by Google for Chrome.
- Node.js leverages V8, enabling rapid server-side JavaScript execution.

**Growth and Popularity**:

- Adopted by major tech companies, including Netflix, LinkedIn, and Walmart.
- The Node.js Foundation was established in 2015, fostering its growth.
- Continuous community contributions have led to its rapid evolution and the extensive npm ecosystem.

**Event-Driven, Non-Blocking Architecture**:

- This architecture addressed common web server issues, especially when managing many simultaneous connections.

---

### 3. Setting Up Node.js

**Installation**:

- Visit the official [Node.js website](https://nodejs.org/) and download the appropriate version for your operating system.
- There are two primary versions available:
  - **LTS (Long Term Support)**: Stable and recommended for most users.
  - **Current**: Contains the latest features but might not be as stable as LTS.
- After installation, verify it by opening your terminal or command prompt and running:

  ```bash
  node -v
  npm -v
  ```

  This will display the installed versions of Node.js and npm, respectively.

**Node.js Runtime**:

- Node.js allows you to execute JavaScript outside of a browser.
- Example: Create a file named `hello.js` and write the following code:

  ```javascript
  console.log("Hello from Node.js!");
  ```

  Execute the script using:

  ```bash


  node hello.js
  ```

**Node REPL (Read-Eval-Print Loop)**:

- Node REPL is an interactive shell for executing JavaScript.
- Access it by typing `node` in your terminal. Within the REPL, you can type any valid JavaScript expression.
- To exit the REPL, press `Ctrl + C` twice or type `.exit`.

**npm (Node Package Manager)**:

- npm is the default package manager for JavaScript and Node.js.
- Every Node.js project has a `package.json` file, which tracks project dependencies and other configurations.
- Create a new Node.js project by navigating to your desired directory and running:

  ```bash
  npm init
  ```

  Follow the prompts to set up your project.

- Install external packages/libraries using:

  ```bash
  npm install <package-name>
  ```

---

Great! Moving on to the introduction of Express.js.

---

### 4. Introduction to Express.js

**Why Express.js?**:

- Express simplifies the process of building web applications on top of Node.js.
- It provides a lightweight framework to set up servers, define routes, and handle requests and responses.

**Setting Up a Basic Express Server**:

1. Install Express using npm:

   ```bash
   npm install express
   ```

2. Create a new file, `server.js`, and write the following code:

   ```javascript
   const express = require("express");
   const app = express();

   app.get("/", (req, res) => {
   	res.send("Hello from Express!");
   });

   const PORT = 3000;
   app.listen(PORT, () => {
   	console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

3. Run the server with:

   ```bash
   node server.js
   ```

**Handling Routes, Middlewares, and Responses**:

- Routes define the endpoints of your application. For example, `/`, `/about`, `/users`.
- Middlewares are functions that can access the request and response objects. They can perform tasks like logging, authentication, or modifying the request data.
- Responses can be in various formats like text, JSON, or HTML. With Express, you can easily send different types of responses using methods like `res.send()`, `res.json()`, or `res.render()`.

---

### Building a Node.js API: From Problem to Solution

**1. Starting Point: Basic Express Server**

Set up a basic Express server:

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample data
let users = [
	{ id: 1, name: "John Doe" },
	{ id: 2, name: "Jane Smith" },
];

// GET endpoint to fetch all users
app.get("/users", (req, res) => {
	res.json(users);
});

// POST endpoint to add a new user
app.post("/users", (req, res) => {
	const newUser = {
		id: users.length + 1,
		name: req.body.name,
	};
	users.push(newUser);
	res.status(201).json(newUser);
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
```

You're right. Some fundamental libraries like `nodemon` and others help streamline the development process and enhance the developer experience. Let's cover these:

---

### Essential Libraries & Tools for Node.js Development

1. **Nodemon**:

   - **Purpose**: It's a utility that monitors for any changes in your source code and automatically restarts your server, making the development process smoother.
   - **Usage**:
     ```bash
     npm install nodemon --save-dev
     ```
     In your `package.json` scripts, replace the start script:
     ```json
     "scripts": {
       "start": "nodemon server.js"
     }
     ```

2. **Dotenv**:

   - **Purpose**: Allows you to load environment variables from a `.env` file into `process.env`. This is essential for managing sensitive information like database connection strings, API keys, and more.
   - **Usage**:
     ```bash
     npm install dotenv
     ```
     At the top of your main server file (e.g., `server.js`):
     ```javascript
     require("dotenv").config();
     ```

Certainly! `Morgan` is a middleware for logging HTTP requests in your Node.js applications. It's handy for monitoring incoming requests, especially in a development environment.

Here's how to set up and use `Morgan`:

---

### Morgan: HTTP Request Logger for Node.js

**Installation**:

To begin with, you need to install the `morgan` package:

```bash
npm install morgan
```

**Basic Usage**:

1. First, you need to require `morgan` and integrate it into your Express application:

```javascript
const express = require("express");
const morgan = require("morgan");

const app = express();

// Use Morgan middleware with the 'dev' format
app.use(morgan("dev"));
```

2. Start your server, and for every HTTP request, you'll see a log entry in your terminal. The `'dev'` format is just one of many predefined formats that `morgan` provides.

**Predefined Formats**:

Morgan comes with several predefined formats that control the output style:

- `'combined'`: Standard Apache combined log output.
- `'common'`: Standard Apache common log output.
- `'dev'`: Concise output colored by response status for development use.
- `'short'`: Shorter than default, also colored by response status.
- `'tiny'`: The minimal output.

**Example**:

If you want to use the `'combined'` format, just replace `'dev'` with `'combined'`:

```javascript
app.use(morgan("combined"));
```

**Custom Formats**:

You can also define your custom format. For example, to print just the method and URL:

```javascript
app.use(morgan(":method :url"));
```

---

With `Morgan`, you can easily keep an eye on your application's incoming requests, helping in debugging and understanding the usage patterns. In a production environment, you might want to integrate `Morgan` with a more advanced logging system to store logs or stream them to external services.

---

### Databases: Introduction and Types

**What is a Database?**:

- A database is an organized collection of data, typically stored electronically. It's designed to efficiently store, manage, and retrieve data.
- Databases play a crucial role in modern software development, enabling applications to store and manage vast amounts of information.

**Types of Databases**:

1. **Relational Databases**:

   - **Description**: Store data in structured tables with rows and columns.
   - **Example**: MySQL, PostgreSQL, SQLite, Oracle.
   - **Pros**:
     - Well-established, proven technology.
     - Support for ACID (Atomicity, Consistency, Isolation, Durability) transactions.
   - **Cons**:
     - Not always suitable for highly dynamic or unstructured data.
     - Schema changes can be challenging.

2. **NoSQL Databases**:
   - **Description**: Databases that store data in formats other than traditional rows and columns.
   - **Example**: MongoDB, Cassandra, Redis.
   - **Pros**:
     - Suitable for handling dynamic, unstructured, or semi-structured data.
     - Flexible schema allows easy adaptation to changing data requirements.
   - **Cons**:
     - May not support ACID transactions as well as relational databases.
     - Learning curve for those accustomed to relational databases.

---

### MongoDB: A NoSQL Database

**Introduction to MongoDB**:

- **Description**: MongoDB is a popular open-source NoSQL database.
- **Key Feature**: It uses a flexible, document-based model to store data, where each record is a document containing fields and values.
- **Use Cases**: Web applications, mobile apps, content management systems, IoT, and more.

**Advantages of MongoDB**:

1. **Flexibility**:

   - Schema-less design allows you to store heterogeneous data in the same collection.
   - Changes to data structure can be made without affecting existing records.

2. **Scalability**:

   - Horizontal scaling is easily achieved through sharding, distributing data across multiple servers.
   - Suitable for applications that require handling large volumes of data.

3. **Query Language**:

   - MongoDB's query language is powerful and expressive.
   - Supports a wide range of queries, including aggregation and text search.

4. **Speed**:
   - No complex joins, as data is often stored in a denormalized format.
   - Well-suited for read-heavy workloads.

**When to Choose MongoDB**:

- Choose MongoDB when you need to handle dynamic, unstructured data, require quick iteration, and prefer flexibility over rigid schema requirements.
- Consider it for projects where speed and scalability are important.

**MongoDB vs. Other NoSQL Databases**:

- MongoDB is just one of several NoSQL databases. Each has its strengths and weaknesses, so it's essential to choose the one that best fits your project's requirements.

---

### MongoDB: Fundamental Operations and Terminologies

**1. Terminology**:

- **Database**: A MongoDB instance can host multiple databases. Each database is a set of collections, similar to how traditional databases host tables.

- **Collection**: Equivalent to a table in relational databases. It holds a set of documents.

- **Document**: A single data entity with fields and values, similar to a row in relational databases. Documents are stored in JSON-like format called BSON.

- **Field**: A name-value pair inside a document. Similar to a column in relational databases.

---

**2. Basic Database Operations**:

- **Create a New Database**:

  ```javascript
  use myNewDatabase;
  ```

  **Description**: This command switches to the specified database. If the database doesn't exist, MongoDB will create it once you add data.

- **List All Databases**:

  ```javascript
  show dbs;
  ```

  **Description**: Displays a list of all databases on the MongoDB server.

- **Switch Between Databases**:

  ```javascript
  use anotherDatabase;
  ```

  **Description**: Switches to the specified database.

- **Drop a Database**:
  ```javascript
  db.dropDatabase();
  ```
  **Description**: Deletes the current database.

---

**3. Collections Management**:

- **Create a Collection**:
  MongoDB creates collections automatically when you insert data. However, you can also create them explicitly:

  ```javascript
  db.createCollection("myCollection");
  ```

  **Description**: Creates a new collection named "myCollection" in the current database.

- **List All Collections**:

  ```javascript
  show collections;
  ```

  **Description**: Displays a list of all collections in the current database.

- **Drop a Collection**:
  ```javascript
  db.myCollection.drop();
  ```
  **Description**: Deletes the specified collection and its data.

---

**4. Documents Management**:

- **Insert a Document**:

  ```javascript
  db.myCollection.insertOne({ name: "Alice", age: 25 });
  ```

  **Description**: Inserts a single document into the specified collection.

- **Find Documents**:

  ```javascript
  db.myCollection.find();
  ```

  **Description**: Retrieves all documents from the specified collection.

- **Update a Document**:

  ```javascript
  db.myCollection.updateOne({ name: "Alice" }, { $set: { age: 26 } });
  ```

  **Description**: Updates the first document that matches the query.

- **Delete a Document**:
  ```javascript
  db.myCollection.deleteOne({ name: "Alice" });
  ```
  **Description**: Deletes the first document that matches the query.

---

**5. Indexing**:

- **Create an Index**:

  ```javascript
  db.myCollection.createIndex({ name: 1 });
  ```

  **Description**: Creates an ascending index on the "name" field of the specified collection. Indexing speeds up query performance.

- **List All Indexes**:
  ```javascript
  db.myCollection.getIndexes();
  ```
  **Description**: Displays a list of all indexes on the specified collection.

---

Alright, let's move on to the practical aspects of MongoDB.

### MongoDB: Practical Introduction

**1. Installing MongoDB**:

To install MongoDB, you'd typically follow the instructions provided in the official MongoDB documentation based on your operating system. Here's a general outline:

- **Windows**: Download the MongoDB installer and follow the installation instructions.
- **Mac**: Use a package manager like Homebrew: `brew install mongodb`.
- **Linux**: Use the package manager specific to your distribution (like `apt` for Ubuntu) to install MongoDB.

**2. Starting MongoDB**:

- Once installed, you can start MongoDB using the `mongod` command.
- To interact with MongoDB, you can use the `mongo` shell.

**3. Basic CRUD Operations in MongoDB**:

- **Create**: Use the `insertOne()` or `insertMany()` method.

  ```javascript
  db.collectionName.insertOne({ name: "John", age: 30 });
  ```

- **Read**: Use the `find()` method.

  ```javascript
  db.collectionName.find({ name: "John" });
  ```

- **Update**: Use the `updateOne()` or `updateMany()` method.

  ```javascript
  db.collectionName.updateOne({ name: "John" }, { $set: { age: 31 } });
  ```

- **Delete**: Use the `deleteOne()` or `deleteMany()` method.
  ```javascript
  db.collectionName.deleteOne({ name: "John" });
  ```

**4. MongoDB Atlas**:

- For those who prefer a cloud solution, MongoDB Atlas provides a fully managed database service. You can create a cluster, connect your application, and start using MongoDB without managing the underlying infrastructure.

---

### MongoDB: Descriptive Queries and Operations

**1. Inserting Data**:

- **Insert a Single Document**:

  ```javascript
  db.collectionName.insertOne({
  	name: "Alice",
  	age: 25,
  	profession: "Engineer",
  });
  ```

  **Description**: Inserts a single document into the collection with the specified fields: name, age, and profession.

- **Insert Multiple Documents**:
  ```javascript
  db.collectionName.insertMany([
  	{ name: "Bob", age: 30, profession: "Doctor" },
  	{ name: "Charlie", age: 28, profession: "Artist" },
  	{ name: "David", age: 35, profession: "Lawyer" },
  ]);
  ```
  **Description**: Inserts multiple documents into the collection in one operation.

**2. Querying Data**:

- **Find All Documents in a Collection**:

  ```javascript
  db.collectionName.find();
  ```

  **Description**: Retrieves all documents from the specified collection.

- **Find Specific Documents**:

  ```javascript
  db.collectionName.find({ name: "Bob" });
  ```

  **Description**: Searches for and retrieves documents where the name is "Bob".

- **Query with Conditions**:

  ```javascript
  db.collectionName.find({ age: { $gt: 30 } });
  ```

  **Description**: Retrieves documents where the age is greater than 30.

- **Projection**:
  ```javascript
  db.collectionName.find({}, { name: 1, _id: 0 });
  ```
  **Description**: Retrieves only the `name` field for all documents in the collection, excluding the `_id` field.

**3. Updating Data**:

- **Update a Single Document**:

  ```javascript
  db.collectionName.updateOne({ name: "Alice" }, { $set: { age: 26 } });
  ```

  **Description**: Updates the age of the first document where the name is "Alice" to 26.

- **Update Multiple Documents**:

  ```javascript
  db.collectionName.updateMany({}, { $inc: { age: 1 } });
  ```

  **Description**: Increases the age of all documents in the collection by 1.

- **Upsert**:
  ```javascript
  db.collectionName.updateOne(
  	{ name: "Eve" },
  	{ $set: { age: 40, profession: "Teacher" } },
  	{ upsert: true }
  );
  ```
  **Description**: Updates the document with the name "Eve" if it exists. If it doesn't, a new document with the specified fields is inserted.

**4. Deleting Data**:

- **Delete a Single Document**:

  ```javascript
  db.collectionName.deleteOne({ name: "David" });
  ```

  **Description**: Deletes the first document where the name is "David".

- **Delete Multiple Documents**:
  ```javascript
  db.collectionName.deleteMany({ age: { $lt: 30 } });
  ```
  **Description**: Deletes all documents where the age is less than 30.

**5. Advanced Queries**:

- **Logical Operators**:

  ```javascript
  db.collectionName.find({ $or: [{ name: "Alice" }, { name: "Bob" }] });
  ```

  **Description**: Retrieves documents where the name is either "Alice" or "Bob".

- **Regular Expressions**:

  ```javascript
  db.collectionName.find({ name: /^A/ });
  ```

  **Description**: Searches for documents where the name starts with the letter "A".

- **Count Documents**:

  ```javascript
  db.collectionName.countDocuments({ age: { $gt: 30 } });
  ```

  **Description**: Counts the number of documents where the age is greater than 30.

- **Sorting**:

  ```javascript
  db.collectionName.find().sort({ age: -1 });
  ```

  **Description**: Retrieves all documents, sorted by age in descending order.

- **Limit and Skip**:
  ```javascript
  db.collectionName.find().limit(10).skip(20);
  ```
  **Description**: Retrieves documents with pagination, showing 10 documents starting from the 21st document.

---

### Our folder structure

/blog-api
|-- /node_modules
|-- /src
| |-- /config
| | |-- db.js
| | |-- config.js
| |-- /models
| | |-- User.js
| | |-- Post.js
| |-- /routes
| | |-- users.js
| | |-- posts.js
| |-- /middlewares
| | |-- auth.js
| | |-- error.js
| | |-- notFound.js
| |-- /controllers
| | |-- userController.js
| | |-- postController.js
| |-- /utils
| | |-- jwt.js
| |-- app.js
|-- package.json
|-- .env
|-- .gitignore
