# 🚀 Job Listings App (Full Stack)

A full-stack application that provides a paginated Job Listings API and a React (Vite) frontend to consume and display the data.

This project demonstrates:

* Backend API development using **Node.js + Express**
* Frontend development using **React (Vite)**
* Handling **pagination**
* Structuring a **real-world full-stack project**

---

# 📁 Project Structure

```
root/
 ├── job-api/          # Backend (Express API)
 └── job-frontend/     # Frontend (React + Vite)
```

---

# 🧩 Features

## Backend (API)

* Generates **500+ job listings**
* REST API with pagination
* JSON-based data storage
* CORS enabled

## Frontend (React)

* Fetches data from API
* Displays job cards
* Pagination (Next / Prev)
* Component-based structure

---

# ⚙️ Tech Stack

* **Backend:** Node.js, Express, CORS
* **Frontend:** React (Vite)
* **Data:** JSON file (generated dynamically)

---

# 🛠️ Setup Instructions (Run Locally)

## 🔹 Step 1: Clone Repository

```bash
git clone <your-repo-url>
cd <repo-name>
```

---

# 🚀 Backend Setup (job-api)

## 📌 Step 2: Navigate to Backend

```bash
cd job-api
```

---

## 📌 Step 3: Install Dependencies

```bash
npm install
```

---

## 📌 Step 4: Generate Job Data (500 Records)

```bash
node generateData.js
```

This will create:

```
data/jobs.json
```

---

## 📌 Step 5: Start Backend Server

```bash
node server.js
```

Server will run at:

```
http://localhost:5000
```

---

## 📌 API Endpoint

```
GET /api/jobs?page=1&limit=10
```

### Example:

```
http://localhost:5000/api/jobs?page=1&limit=10
```

### Response Format:

```json
{
  "total": 500,
  "page": 1,
  "totalPages": 50,
  "data": [ ...jobs ]
}
```

---

# ⚛️ Frontend Setup (job-frontend)

## 📌 Step 6: Navigate to Frontend

```bash
cd ../job-frontend
```

---

## 📌 Step 7: Install Dependencies

```bash
npm install
```

---

## 📌 Step 8: Start React App

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

# 🔄 How It Works

1. Backend serves paginated job data via API
2. Frontend calls API using `fetch()`
3. Jobs are rendered as cards
4. Pagination updates page state and refetches data

---

# 📦 Scripts

## Backend

```bash
node generateData.js   # Generate job data
node server.js         # Start API server
```

## Frontend

```bash
npm run dev            # Start React app
npm run build          # Build for production
```

---

# ⚠️ Important Notes

* Ensure backend runs on **port 5000**
* Ensure frontend runs on **port 5173**
* Backend must be running before frontend
* If API URL changes, update it in:

```
src/pages/Jobs.jsx
```

---

# 🧠 Future Improvements

* 🔍 Search & filtering
* 🎯 Sorting (salary, date)
* ⚡ React Query integration
* 🎨 Tailwind CSS UI
* 🌐 Deployment (Render + Vercel)
* 🔐 Authentication (JWT)

---

# 📸 Preview

* Job listings displayed in card format
* Pagination controls at bottom
* Clean and simple UI

---

# 🤝 Contributing

Feel free to fork this repo and enhance it with additional features.

---

# 📄 License

This project is open-source and available under the MIT License.

---

# 🙌 Author

Built by **Ankit Anand**

---
