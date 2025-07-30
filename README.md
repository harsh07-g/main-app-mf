# 🎵 Micro Frontend Music Library App

This project demonstrates a simple **Micro Frontend architecture** using **React + Vite** and **Module Federation**.

It has two apps:

1. **Main App** – Handles login, role-based routing (admin/user), and loads the Micro Frontend.
2. **Music Library (Micro Frontend)** – Shows a list of Indian songs with features like filtering, sorting, and grouping.

---

## 🔧 How to Run Locally

### 1. Clone both repositories

```bash
git clone https://github.com/harsh07-g/main-app-mf.git
git clone https://github.com/harsh07-g/music-library-mf.git
2. Install dependencies
For both apps, run:

bash
Copy
Edit
npm install
3. Start the apps
In the music-library folder:

bash
Copy
Edit
npm run dev
In the main-app folder (in a new terminal):

bash
Copy
Edit
npm run dev
Make sure:

music-library runs on http://localhost:5174

main-app runs on http://localhost:5173

🚀 How to Deploy
Deploy both apps on Vercel:
Push both projects to GitHub

Go to vercel.com and import each repo

In main-app's vite.config.js → use the HTTPS URL of the deployed music-library:

js
Copy
Edit
remotes: {
  music: 'https://music-library-mauve.vercel.app/assets/remoteEntry.js'
}
Redeploy main-app on Vercel

🔐 Demo Credentials
Role	Email	Password
Admin	admin@example.com	admin123
User	user@example.com	user123

🧩 Micro Frontend Explained (Simple Terms)
We split the app into independent frontends.

main-app loads music-library remotely using Module Federation.

This allows us to deploy and update both apps separately.

🔑 Role-Based Auth Explained
A fake login is implemented with hardcoded credentials.

Based on the role (admin/user), the user sees different views.

Admin may get more access (like edit/delete), while user has read-only access.

📁 Tech Stack
React + Vite

Tailwind CSS

Module Federation (via vite-plugin-federation)

Role-based routing (React Router)

Made with by Harsh Gaur
