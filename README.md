A platform where your cherished photos are reborn as timeless folk art—Madhubani, Warli, Gond, and more—crafted by real artisans, not algorithms. It’s more than a marketplace; it’s a cultural renaissance where memories transform into living heritage. By challenging artists with modern subjects, the platform nurtures creativity, ensuring folk traditions not only survive but evolve with time. Customers gain soulful, personalized masterpieces, while artists earn recognition, fair livelihood, and a future for their art.
#  KALAVERI D 🎨

Kalaveri D is a full-stack web application that showcases and connects traditional Indian folk artforms like **Warli, Madhubani, and Pithora** with digital audiences. It allows users to explore, learn, and preserve cultural heritage in a modern, interactive platform.

---

## 🚀 Tech Stack

### Frontend

* React + Vite
* Tailwind CSS for styling

### Backend

* Node.js + Express.js
* MongoDB Atlas (cloud database)

### Hosting

* **Backend**: Render
* **Frontend**: Render (Vite build)

---

## ⚡ Features

* Browse traditional artforms with descriptions and history.
* REST API backend connected to MongoDB Atlas.
* Responsive and mobile-friendly UI.
* Easy to extend with new artforms and categories.

---

## 📂 Project Structure

```
rangoli-craft-connect/
│
├── backend/          # Express server
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── server.js     # Main entry
│   └── package.json  
│
├── frontend/         # React + Vite frontend
│   ├── src/          
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🔧 Installation & Setup

### Clone the repo

```bash
git clone https://github.com/your-username/rangoli-craft-connect.git
cd rangoli-craft-connect
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:

```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

Run backend:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
```

Run frontend:

```bash
npm run dev
```

---
