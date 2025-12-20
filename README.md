# TaskManager - Full-Stack Boilerplate

A production-style full-stack boilerplate for interview preparation. This project is **intentionally incomplete** - core business logic is left as TODOs for manual implementation.

## 🎯 Purpose

This scaffold demonstrates:
- Clean, scalable architecture patterns
- Separation of concerns (layered architecture)
- Production-ready project structure
- Best practices for both frontend and backend

**Perfect for:**
- Interview preparation
- Learning full-stack architecture
- Understanding production patterns
- Building a portfolio project

## 📁 Project Structure

```
TaskManager/
├── frontend/          # React + Vite + TypeScript
│   ├── src/
│   │   ├── routes/   # Route definitions
│   │   ├── pages/    # Page components
│   │   ├── components/ # Reusable components
│   │   ├── hooks/    # Custom React hooks
│   │   ├── services/ # API services
│   │   └── context/  # React Context
│   └── README.md
├── backend/          # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── routes/   # API routes
│   │   ├── controllers/ # Request handlers
│   │   ├── services/ # Business logic
│   │   ├── repositories/ # Data access
│   │   ├── middleware/ # Express middleware
│   │   ├── utils/    # Utility functions
│   │   ├── config/   # Configuration
│   │   └── errors/   # Error handling
│   └── README.md
├── tickets.md        # Implementation tickets with learning questions
└── README.md         # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend runs on `http://localhost:3001`

## ✅ What's Implemented

### Backend
- ✅ Express server with TypeScript
- ✅ Environment variable support
- ✅ Centralized error handler
- ✅ Logging middleware
- ✅ Health check endpoint (`GET /api/health`)
- ✅ Folder structure (routes, controllers, services, repositories)

### Frontend
- ✅ React + Vite + TypeScript setup
- ✅ React Router configuration
- ✅ Basic routing structure
- ✅ Placeholder pages
- ✅ Project structure (pages, components, hooks, services, context)

## ❌ What's NOT Implemented (TODOs)

- ❌ Authentication (JWT)
- ❌ Authorization / roles
- ❌ Database integration
- ❌ Validation logic
- ❌ Business logic (CRUD operations)
- ❌ API integration
- ❌ Protected routes
- ❌ State management

## 📋 Implementation Guide

See **[tickets.md](./tickets.md)** for step-by-step implementation tickets.

Each ticket includes:
- Clear implementation steps
- Interview-style learning questions
- Architecture considerations
- Best practices

**Recommended order:**
1. Backend tickets (1-5)
2. Frontend tickets (6-10)
3. Integration tickets (11-12)
4. Advanced topics (13-14)

## 🏗️ Architecture

### Backend Architecture

**Layered Architecture:**
```
Routes → Controllers → Services → Repositories
```

- **Routes**: Define API endpoints
- **Controllers**: Handle HTTP requests/responses
- **Services**: Contain business logic
- **Repositories**: Handle data access

### Frontend Architecture

**Component-Based:**
```
Pages → Components → Hooks → Services
```

- **Pages**: Top-level route components
- **Components**: Reusable UI components
- **Hooks**: Custom React hooks for logic
- **Services**: API calls and business logic

## 📚 Learning Resources

Each ticket in `tickets.md` includes learning-check questions covering:
- Architecture decisions
- Security considerations
- Performance optimization
- Testing strategies
- Common pitfalls

## 🔒 Security Notes

- Never commit `.env` files
- Use strong JWT secrets in production
- Validate all user inputs
- Use HTTPS in production
- Implement rate limiting
- Sanitize user data

## 📝 Notes

- This is a **learning scaffold** - implement features yourself
- Follow the tickets in order for best learning experience
- Answer learning-check questions after implementation
- Research topics you're unsure about
- Document your decisions

## 🤝 Contributing

This is a learning project. Feel free to:
- Implement the TODOs
- Add your own features
- Improve the structure
- Share your solutions

## 📄 License

MIT License - feel free to use this for learning and interviews.
