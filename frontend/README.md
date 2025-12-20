# TaskManager Frontend

Frontend application for TaskManager - A production-style boilerplate for interview preparation.

## 🎯 Purpose

This is an **intentionally incomplete** project scaffold designed for learning and interview preparation. Core business logic is left as TODOs for manual implementation.

## 📁 Structure

```
frontend/
├── src/
│   ├── main.tsx          # Application entry point
│   ├── App.tsx           # Root component
│   ├── routes/           # Route definitions
│   ├── pages/            # Page components
│   ├── components/       # Reusable components
│   ├── hooks/             # Custom React hooks
│   ├── services/         # API and business logic services
│   └── context/          # React Context providers
└── README.md
```

## 🏗️ Architecture

- **Pages** → Top-level route components
- **Components** → Reusable UI components
- **Services** → API calls and business logic
- **Hooks** → Custom React hooks for state/logic
- **Context** → Global state management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Environment Setup

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3001/api
```

### Development

```bash
npm run dev
```

Application will start on `http://localhost:5173`

### Build

```bash
npm run build
npm run preview
```

## 📋 Routes

- `/login` - Login page
- `/dashboard` - Dashboard (TODO: Protected route)
- `/*` - 404 page

## ✅ Implemented

- ✅ React + Vite + TypeScript setup
- ✅ React Router configuration
- ✅ Basic routing structure
- ✅ Placeholder pages
- ✅ Project structure

## ❌ TODO (Not Implemented)

- ❌ Authentication flow
- ❌ Protected routes
- ❌ API integration
- ❌ State management logic
- ❌ Form validation

See `tickets.md` in the root directory for implementation tickets.

## 📚 Learning Resources

Each ticket in `tickets.md` includes:
- Step-by-step implementation guide
- Interview-style learning questions
- Architecture decisions to consider

