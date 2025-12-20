# TaskManager Backend

Backend API for TaskManager - A production-style boilerplate for interview preparation.

## 🎯 Purpose

This is an **intentionally incomplete** project scaffold designed for learning and interview preparation. Core business logic is left as TODOs for manual implementation.

## 📁 Structure

```
backend/
├── src/
│   ├── app.ts              # Express app configuration
│   ├── server.ts           # Server entry point
│   ├── routes/             # API route definitions
│   ├── controllers/        # Request handlers (controller layer)
│   ├── services/           # Business logic (service layer)
│   ├── repositories/       # Data access (repository layer)
│   ├── middleware/         # Express middleware
│   ├── utils/              # Utility functions
│   ├── config/             # Configuration files
│   └── errors/             # Error handling
└── README.md
```

## 🏗️ Architecture

This project follows a **layered architecture**:

1. **Routes** → Define API endpoints
2. **Controllers** → Handle HTTP requests/responses
3. **Services** → Contain business logic
4. **Repositories** → Handle data access

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd backend
npm install
```

### Environment Setup

```bash
cp .env.example .env
# Edit .env with your configuration
```

### Development

```bash
npm run dev
```

Server will start on `http://localhost:3001`

### Build

```bash
npm run build
npm start
```

## 📋 Endpoints

### Health Check

```
GET /api/health
```

Returns server status and uptime.

## ✅ Implemented

- ✅ Express server with TypeScript
- ✅ Environment variable support
- ✅ Centralized error handler
- ✅ Logging middleware
- ✅ Health check endpoint
- ✅ Folder structure

## ❌ TODO (Not Implemented)

- ❌ Authentication (JWT)
- ❌ Authorization / roles
- ❌ Database integration
- ❌ Validation logic
- ❌ Business logic

See `tickets.md` in the root directory for implementation tickets.

## 📚 Learning Resources

Each ticket in `tickets.md` includes:
- Step-by-step implementation guide
- Interview-style learning questions
- Architecture decisions to consider

## 🔒 Security Notes

- Never commit `.env` files
- Use strong JWT secrets in production
- Implement rate limiting for production
- Validate all user inputs
- Use HTTPS in production

