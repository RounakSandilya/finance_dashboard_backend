# 💰 Finance Dashboard Backend

---

## ✨ Overview

This project is a **backend system for a Finance Dashboard** designed to demonstrate **real-world backend architecture and design principles**.

It is built using:

* **MVC Architecture**
* **Service-Repository Pattern**
* **Role-Based Access Control (RBAC)**
* **Aggregation-based Dashboard APIs**
* **SOLID Principles**

---

# 🎯 Key Highlights

✔ MVC-based structure
✔ Service-Repository Pattern
✔ SOLID principles implementation
✔ Dashboard analytics using MongoDB aggregation
✔ Secure authentication (JWT for authentication + bcrypt for password hashing)
✔ Role-based authorization
✔ Pagination & filtering

---

# 🧠 Architecture

## 📌 MVC + Service-Repository Pattern

```bash
Controller (C) → Service → Repository → Model (M) → Database
```

### 🔍 Explanation:

* **Controller (MVC)** → Handles HTTP requests/responses
* **Service Layer** → Contains business logic
* **Repository Layer** → Handles database interaction
* **Model (MVC)** → Defines schema

👉 This hybrid approach combines:

* MVC (structure & routing)
* Service-Repository (clean logic separation)

---

# 🧩 SOLID Principles

## 1️⃣ Single Responsibility Principle (SRP)

Each layer has a clear responsibility:

* Controller → HTTP handling
* Service → Business logic
* Repository → Data access

---

## 2️⃣ Open/Closed Principle (OCP)

System is easily extendable:

* Add new analytics without modifying existing logic
* Add new authentication methods

---

## 3️⃣ Interface Segregation Principle (ISP)

* Controllers depend only on required services
* No unnecessary dependencies

---

## 4️⃣ Dependency Inversion Principle (DIP)

Services depend on repositories instead directly on models:

```js
const UserRepo = require("../repositories/user.repository");
```

---

## 5️⃣ Liskov Substitution Principle (LSP)

* No misuse of inheritance
* Clean, consistent structure

---

# 👤 User & Role Management

Supports:

* User creation and management
* Role assignment (`Viewer`, `Analyst`, `Admin`)
* Active / inactive status
* Role-based restrictions

---

# 📊 Financial Records Management

Each record contains:

* Amount
* Type (income / expense)
* Category
* Date
* Notes

### Operations:

* Create
* Read
* Update
* Delete
* Filter by:

  * Type
  * Category
  * Date range
  * Page

---

# 📈 Dashboard Summary APIs (Core Highlight 🔥)

Provides aggregated insights:

* Total income
* Total expenses
* Net balance
* Category-wise totals
* Monthly trends
* Recent activity (with pagination)

---

# 🌐 API Overview

## 🔐 Auth

* **POST /api/auth/register** → Register user
* **POST /api/auth/login** → Login (returns JWT)
* **POST /api/auth/logout** → Logout (token blacklist)

---

## 👤 Users (Admin Only)

* **GET /api/users** → Get all users
* **PATCH /api/users/:id/status** → Activate/Deactivate user

---

## 📊 Records

* **POST /api/records** → Create record *(Admin, Analyst)*
* **GET /api/records** → Get records *(filter by type, category, date)*
* **PUT /api/records/:id** → Update record *(Admin)*
* **DELETE /api/records/:id** → Delete record *(Admin)*

---

## 📈 Dashboard

* **GET /api/dashboard/summary** → Income, Expense, Balance
* **GET /api/dashboard/category** → Category-wise totals
* **GET /api/dashboard/trends** → Monthly trends
* **GET /api/dashboard/recent?page=1&limit=5** → Recent activity

---

## 🔐 Roles

* **Viewer** → Read only
* **Analyst** → Read + create
* **Admin** → Full access

---

## ⚠️ Notes

* All protected routes require JWT (`Authorization: Bearer TOKEN`)
* Logout implemented using token blacklisting
* Supports filtering & pagination

---

# 🔐 Access Control (RBAC)

| Role    | Permissions   |
| ------- | ------------- |
| Viewer  | Read-only     |
| Analyst | Read + create |
| Admin   | Full access   |

Implemented via middleware:

```js
authorizeRoles("Admin", "Analyst")
```

---

# 📁 Project Structure

```bash
controllers/
services/
repositories/
models/
middleware/
routes/
config/
app.js
server.js
```

---

# 🔐 Authentication Flow

1. Register → Password hashed using bcrypt
2. Login → JWT token generated
3. Protected routes → Token verified

---

# ⚠️ Validation & Error Handling

✔ Structured error responses
✔ Proper HTTP status codes

🔧 Future Improvements:

* Joi/Zod validation
* Global error handling middleware

---

# ⚖️ Design Decisions

* MVC for structured routing and separation
* Service-Repository pattern for clean logic separation
* MongoDB aggregation for efficient analytics
* JWT for stateless authentication

---

# ⚠️ Trade-offs

* Role-based access instead of fine-grained permissions
* Basic validation (extendable)
* No caching implemented

---

## 🔐 Logout Implementation

Implemented using JWT token blacklisting.

When a user logs out:
- Token is stored in database
- Middleware prevents reuse of that token

Ensures secure logout even in stateless systems.

---
# 🚀 Setup Instructions

Follow these steps to run the project locally:

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/RounakSandilya/finance_dashboard_backend.git
cd finance-dashboard-backend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

Or manually install core packages:

```bash
npm install express dotenv mongoose jsonwebtoken bcryptjs
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=your_secret_key
```

---

## 4️⃣ Start the Server

```bash
node server.js
```

---

## ✅ Server Running

If everything is correct, you should see:

```
DB connected
Server running on port 5000
```
---

🔗 Base URL
http://localhost:5000/api

---

# 🔑 Environment Variables

Create `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=your_secret_key
```

---


# 🏁 Conclusion

This project demonstrates:

* 🧠 Strong backend design skills
* 🧩 SOLID principles in practice
* 🧱 MVC + Service-Repository pattern
* 📊 Real-world dashboard analytics
* 🔐 Secure and scalable backend

💡 Designed to reflect **industry-level backend engineering practices**

---

# 👨‍💻 Author

**Rounak Tripathi**

---

⭐ Feel free to explore, fork, and extend!
