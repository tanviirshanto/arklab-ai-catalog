# ArkLab AI Agents Catalog

A feature-rich AI Agent catalog built with **Next.js 14 App Router**, **Redux**, **ShadCN UI**, and **Framer Motion**, enabling users to explore and filter powerful AI agents. This project includes full SSR support and integrated Google Sign-In using **Google Identity Services (GIS)**.

🔗 **Live Demo:** [arklab-ai-catalog.vercel.app](https://arklab-ai-catalog.vercel.app/)

---

## 🚀 Features

- ✅ AI Agent listing with live filtering
- ✅ Responsive UI using ShadCN + Tailwind CSS
- ✅ Global state management via Redux Toolkit
- ✅ Dark/Light mode toggle
- ✅ Smooth animations with Framer Motion
- ✅ Google Sign-In integration using **GIS**
- ✅ Session management in client-side Redux

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tanviirshanto/arklab-ai-catalog.git
cd arklab-ai-catalog
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Environment setup

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
NEXTAUTH_SECRET=<generate-a-random-secret>
```

Generate a secure secret:

```bash
openssl rand -base64 32
```

> You can get a Google OAuth Client ID via the [Google Cloud Console](https://console.cloud.google.com/) → OAuth 2.0 → Client ID (Web).  
> No billing is required as GIS allows basic login.

---

## 🧠 Design Decisions & Challenges

- **App Router** for modular pages and layouts
- Redux for predictable global state (agents, filters, user session)
- ShadCN UI and Tailwind CSS for elegant, responsive components
- Framer Motion for dynamic card and filter transitions
- **Challenge:** Redirected from NextAuth due to Google billing constraints — switched to **Google Identity Services (GIS)** for lightweight client-side only login.

---

## 🔐 Google Sign-In (GIS) Integration

1. 📥 GIS script loads on client-side (`GoogleLoginButton.tsx`)
2. 🎯 On successful login, JWT is decoded via `jwt-decode`
3. 🔐 User info (name, email, picture) stored in Redux via `setUser`
4. 🔓 `GoogleLogoutButton.tsx` clears session and disables auto sign-in

---

## ✅ To Do (Future Enhancements)

- Persist Redux user session using `redux-persist`
- Add admin interface for adding/editing agents
- Write automated tests with Jest or Vitest
- Display interactive screenshots or UI demos in README

---

## 📝 License

This project is for educational and technical assessment purposes only.

---

## 🙋‍♂️ Author

**Tanviir Hossen** – [@tanviirshanto](https://github.com/tanviirshanto)

🚀 Live Demo: [arklab-ai-catalog.vercel.app](https://arklab-ai-catalog.vercel.app/)