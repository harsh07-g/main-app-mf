# 🎵 Micro Frontend Music App

A simple micro frontend-based React project with role-based login and a music library.

---

## 🧑‍💻 How to Run Locally

### 1. Clone Both Repositories

```bash
git clone https://github.com/harsh07-g/main-app-mf.git
git clone https://github.com/harsh07-g/music-library-mf.git
```

### 2. Install Dependencies

Go inside each project folder and install dependencies:

```bash
cd main-app-mf
npm install
```

```bash
cd ../music-library-mf
npm install
```

### 3. Run Both Apps Locally

In **music-library-mf**, run:

```bash
npm run dev
```

In **main-app-mf**, run (in a new terminal):

```bash
npm run dev
```

Now visit:

* Main App: `http://localhost:5173`
* Music Library will load inside the main app.

---

## 🚀 How to Deploy

### Deploy `music-library-mf`:

1. Push the project to GitHub.
2. Go to [Vercel](https://vercel.com/) and import this repo.
3. Deploy directly (no config changes needed).

### Deploy `main-app-mf`:

1. Push the project to GitHub.
2. Update this line in `vite.config.js`:

```js
remotes: {
  music: 'https://your-music-library.vercel.app/assets/remoteEntry.js'
}
```

3. Import `main-app-mf` on Vercel and deploy it.

---

## 🔐 Demo Credentials

| Role  | Email             | Password |
| ----- | ----------------- | -------- |
| Admin | `admin@gmail.com` | `admin`  |
| User  | `user@gmail.com`  | `user`   |

---

## 🧹 How It Works

### Micro Frontend

* The **Main App** loads the **Music Library** dynamically using **Module Federation** (via `vite-plugin-federation`).
* This keeps codebases separate and makes it easy to scale or work in teams.

### Role-Based Authentication

* Login is based on a mock system with localStorage.
* After login:

  * Admins can see all music data and use features like sorting/filtering.
  * Users have limited access.
* Navigation and UI changes based on the logged-in role.
