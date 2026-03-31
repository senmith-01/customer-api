# 📋 Customer API

A lightweight **RESTful API** for managing customer records, built with **Node.js** and **Express.js** following the **MVC architecture pattern**.

> ⚡ No database required — uses fast in-memory storage. Perfect for learning REST API design and MVC structure.

---

## 🚀 Features

- ✅ Full **CRUD** operations (Create, Read, Update, Delete)
- ✅ Clean **MVC** folder structure
- ✅ Environment variable support via **dotenv**
- ✅ Lightweight — no database setup needed
- ✅ JSON request & response format
- ✅ Proper HTTP status codes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework & routing |
| dotenv | Environment variable management |
| nodemon | Auto-restart during development |

---

## 📁 Project Structure

```
customer-api/
├── controller/
│   └── customerController.js   # Request handlers (business logic)
├── model/
│   └── Customer.js             # Customer class & in-memory data store
├── routes/
│   └── customerRoutes.js       # API route definitions
├── .env                        # Environment variables
├── .gitignore
├── index.js                    # App entry point
├── package.json
└── package-lock.json
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v14 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/customer-api.git

# 2. Navigate into the project
cd customer-api

# 3. Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
SERVER_PORT=3000
```

### Running the Server

```bash
# Development mode (auto-restarts on file change)
nodemon index.js

# OR standard mode
node index.js
```

The server will start on **http://localhost:3000**

---

## 📡 API Endpoints

**Base URL:** `http://localhost:3000/api/v1/customers`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/customers` | Get all customers |
| `GET` | `/api/v1/customers/:id` | Get a single customer by ID |
| `POST` | `/api/v1/customers` | Create a new customer |
| `PUT` | `/api/v1/customers/:id` | Update an existing customer |
| `DELETE` | `/api/v1/customers/:id` | Delete a customer |

---

## 📦 Request & Response Examples

### ➕ Create a Customer — `POST /api/v1/customers`

**Request Body:**
```json
{
  "name": "John Perera",
  "address": "42 Galle Road, Colombo",
  "salary": 75000
}
```

**Response** `201 Created`:
```json
{
  "id": 1,
  "name": "John Perera",
  "address": "42 Galle Road, Colombo",
  "salary": 75000
}
```

---

### 📋 Get All Customers — `GET /api/v1/customers`

**Response** `200 OK`:
```json
[
  {
    "id": 1,
    "name": "John Perera",
    "address": "42 Galle Road, Colombo",
    "salary": 75000
  }
]
```

---

### 🔍 Get Customer by ID — `GET /api/v1/customers/1`

**Response** `200 OK`:
```json
{
  "id": 1,
  "name": "John Perera",
  "address": "42 Galle Road, Colombo",
  "salary": 75000
}
```

**Response** `404 Not Found`:
```json
{
  "message": "customer not found"
}
```

---

### ✏️ Update a Customer — `PUT /api/v1/customers/1`

**Request Body** (only include fields to update):
```json
{
  "salary": 90000
}
```

**Response** `201 OK`:
```json
{
  "id": 1,
  "name": "John Perera",
  "address": "42 Galle Road, Colombo",
  "salary": 90000
}
```

---

### 🗑️ Delete a Customer — `DELETE /api/v1/customers/1`

**Response** `204 No Content`:
```json
{
  "message": "Customer deleted"
}
```

---

## 🔁 HTTP Status Codes Used

| Code | Meaning |
|------|---------|
| `200` | OK — Successful GET |
| `201` | Created — Successful POST / PUT |
| `204` | No Content — Successful DELETE |
| `404` | Not Found — Customer doesn't exist |

---

## 🏗️ MVC Architecture

```
Request → Routes → Controller → Model → Response
```

- **Routes** — Define URL endpoints and map them to controller functions
- **Controller** — Handle incoming requests, call model methods, send responses
- **Model** — Manage data (in-memory array) and expose CRUD operations

---

## 📌 Notes

- Data is stored **in-memory**, meaning all records are lost when the server restarts.
- To persist data, this project can be extended with **MongoDB** (Mongoose) or **MySQL**.

---

## 👨‍💻 Author

**Ranida Samaranayake**  



