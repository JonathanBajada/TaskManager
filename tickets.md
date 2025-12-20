# Implementation Tickets

This document contains step-by-step tickets for implementing core features. Each ticket includes learning-check questions designed for interview preparation.

---

## Backend Tickets

### Ticket 1: Implement JWT Authentication

**Goal:**
- Implement login and register endpoints
- Generate and verify JWT tokens
- Create authentication middleware

**Constraints:**
- Use controller → service → repository pattern
- Keep auth stateless (no server-side sessions)
- Use environment variables for secrets

**Steps:**
1. Install `jsonwebtoken` and `bcrypt` packages
2. Implement `hashPassword` and `comparePassword` in `utils/hashPassword.ts`
3. Implement `generateToken` and `verifyToken` in `utils/generateToken.ts`
4. Complete `userRepository` methods in `repositories/userRepository.ts`
5. Implement `authService` methods in `services/authService.ts`
6. Complete `authController` methods in `controllers/authController.ts`
7. Create authentication middleware in `middleware/authenticate.ts`
8. Add auth routes in `routes/auth.ts`

**Learning Check (Answer after completing):**
1. Why is JWT considered stateless? What are the trade-offs?
2. Where should token verification live (middleware vs service) and why?
3. What are common JWT security pitfalls? How do you prevent token theft?
4. Should passwords be hashed on the client or server? Why?
5. How do you handle token refresh? What's the difference between access and refresh tokens?

---

### Ticket 2: Implement Request Validation

**Goal:**
- Add input validation middleware
- Validate request bodies and query parameters
- Return clear error messages

**Constraints:**
- Use a validation library (e.g., `zod` or `joi`)
- Validate at the route/controller level
- Return consistent error format

**Steps:**
1. Install validation library
2. Create validation schemas for login/register
3. Create validation middleware in `middleware/validate.ts`
4. Apply validation to auth routes
5. Update error handler to format validation errors

**Learning Check:**
1. Why validate on the backend if you already validate on the frontend?
2. What's the difference between validation and sanitization?
3. How do you handle nested object validation?
4. Should validation errors expose internal structure? Why or why not?
5. How do you balance strict validation vs user experience?

---

### Ticket 3: Implement Database Integration

**Goal:**
- Set up database connection (PostgreSQL/MongoDB)
- Implement user repository with real queries
- Add connection pooling and error handling

**Constraints:**
- Use an ORM/ODM (e.g., Prisma, Mongoose, TypeORM)
- Keep repository pattern
- Handle connection errors gracefully

**Steps:**
1. Choose and install database client/ORM
2. Set up database schema/models
3. Create database connection utility
4. Implement `userRepository` with real queries
5. Add database error handling
6. Create migration scripts

**Learning Check:**
1. What's the difference between an ORM and a query builder?
2. How do you handle database connection failures?
3. What is connection pooling and why is it important?
4. How do you prevent SQL injection attacks?
5. What are database migrations and why use them?

---

### Ticket 4: Implement Authorization & Roles

**Goal:**
- Add role-based access control (RBAC)
- Create authorization middleware
- Protect routes based on user roles

**Constraints:**
- Keep it simple (admin, user roles)
- Use middleware for route protection
- Store roles in JWT token

**Steps:**
1. Add role field to user model
2. Include role in JWT token payload
3. Create `authorize` middleware in `middleware/authorize.ts`
4. Apply authorization to protected routes
5. Add role checks in controllers where needed

**Learning Check:**
1. What's the difference between authentication and authorization?
2. Should roles be in the token or fetched from DB? Trade-offs?
3. How do you handle permission changes for logged-in users?
4. What are common RBAC patterns beyond simple roles?
5. How do you test authorization logic?

---

### Ticket 5: Implement CRUD Operations for Tasks

**Goal:**
- Create task model/repository
- Implement task CRUD endpoints
- Add user ownership validation

**Constraints:**
- Follow controller → service → repository pattern
- Validate user owns task before operations
- Use proper HTTP status codes

**Steps:**
1. Create `taskRepository` in `repositories/taskRepository.ts`
2. Create `taskService` in `services/taskService.ts`
3. Create `taskController` in `controllers/taskController.ts`
4. Create task routes in `routes/tasks.ts`
5. Add ownership validation in service layer

**Learning Check:**
1. Why use a service layer instead of calling repository directly from controller?
2. How do you handle soft deletes vs hard deletes?
3. What HTTP status codes should you use for different scenarios?
4. How do you paginate large result sets?
5. How do you handle concurrent updates to the same resource?

---

## Frontend Tickets

### Ticket 6: Implement API Service Layer

**Goal:**
- Create centralized API client
- Handle authentication headers
- Implement error handling and retries

**Constraints:**
- Use fetch or axios
- Include auth token automatically
- Handle 401/403 errors globally

**Steps:**
1. Complete `api.ts` service with fetch/axios
2. Add request/response interceptors
3. Handle token injection in headers
4. Implement error handling
5. Add retry logic for failed requests

**Learning Check:**
1. Why use interceptors instead of adding headers manually?
2. How do you handle token expiration during a request?
3. What's the difference between 401 and 403 errors?
4. When should you retry a failed request?
5. How do you prevent duplicate requests?

---

### Ticket 7: Implement Authentication Flow

**Goal:**
- Connect login form to backend API
- Store and manage auth tokens
- Handle login/logout state

**Constraints:**
- Use React Context for auth state
- Store token securely (localStorage vs httpOnly cookie)
- Handle token expiration

**Steps:**
1. Complete `authService` in `services/authService.ts`
2. Complete `useAuth` hook in `hooks/useAuth.ts`
3. Update `AuthContext` to use real auth service
4. Connect login form to auth service
5. Implement token storage and retrieval
6. Add logout functionality

**Learning Check:**
1. What are the security implications of localStorage vs httpOnly cookies?
2. How do you handle token refresh without disrupting UX?
3. Should auth state be in Context or a state management library?
4. How do you prevent XSS attacks when storing tokens?
5. What happens if the user closes the browser and reopens it?

---

### Ticket 8: Implement Protected Routes

**Goal:**
- Create route guard component
- Redirect unauthenticated users
- Handle loading states

**Constraints:**
- Use React Router v6 patterns
- Show loading state during auth check
- Redirect to login with return URL

**Steps:**
1. Create `ProtectedRoute` component
2. Check authentication status
3. Handle loading state
4. Redirect to login if not authenticated
5. Apply to protected routes

**Learning Check:**
1. How do you prevent flash of protected content before redirect?
2. Should you check auth on every route change or cache it?
3. How do you handle deep links to protected routes?
4. What's the difference between route-level and component-level protection?
5. How do you test protected routes?

---

### Ticket 9: Implement Task Management UI

**Goal:**
- Create task list component
- Implement task creation form
- Add task filtering and sorting

**Constraints:**
- Use React Hook Form for forms
- Fetch tasks from API
- Handle loading and error states

**Steps:**
1. Create `TaskList` component
2. Create `TaskForm` component
3. Create `useTasks` hook
4. Implement task CRUD operations
5. Add filtering and sorting UI

**Learning Check:**
1. How do you optimize re-renders when displaying large lists?
2. Should you use controlled or uncontrolled components for forms?
3. How do you handle optimistic updates?
4. What's the best way to manage form state vs server state?
5. How do you handle race conditions in async operations?

---

### Ticket 10: Implement State Management

**Goal:**
- Choose state management solution (Context, Zustand, Redux)
- Implement global state for tasks
- Handle cache invalidation

**Constraints:**
- Keep it simple - don't over-engineer
- Consider server state vs client state
- Handle cache updates

**Steps:**
1. Evaluate state management needs
2. Implement chosen solution
3. Move task state to global store
4. Implement cache invalidation
5. Add optimistic updates

**Learning Check:**
1. When do you need global state vs local state?
2. What's the difference between server state and client state?
3. How do you handle cache invalidation?
4. What are the trade-offs of different state management solutions?
5. How do you debug state management issues?

---

## Integration Tickets

### Ticket 11: End-to-End Authentication Flow

**Goal:**
- Connect frontend login to backend
- Implement token refresh
- Handle session persistence

**Constraints:**
- Test full flow manually
- Handle edge cases
- Add error boundaries

**Steps:**
1. Test login flow end-to-end
2. Implement token refresh mechanism
3. Handle token expiration gracefully
4. Add error boundaries
5. Test error scenarios

**Learning Check:**
1. How do you test authentication flows?
2. What happens if the backend is down during login?
3. How do you handle network timeouts?
4. Should you show specific error messages to users?
5. How do you prevent session fixation attacks?

---

### Ticket 12: Error Handling & User Feedback

**Goal:**
- Implement consistent error handling
- Add user-friendly error messages
- Handle network errors gracefully

**Constraints:**
- Don't expose internal errors
- Provide actionable feedback
- Log errors for debugging

**Steps:**
1. Create error boundary component
2. Standardize error message format
3. Add toast/notification system
4. Handle network errors
5. Add loading states

**Learning Check:**
1. What information should error messages contain?
2. How do you balance user-friendly vs detailed errors?
3. Should you log errors on the client or server?
4. How do you handle partial failures?
5. What's the best UX for error states?

---

## Advanced Topics (Optional)

### Ticket 13: Testing Strategy

**Goal:**
- Write unit tests for services
- Add integration tests for API
- Test React components

**Learning Check:**
1. What should you test vs what shouldn't you test?
2. How do you test async operations?
3. What's the difference between unit and integration tests?
4. How do you mock API calls?
5. What's test coverage and how much is enough?

---

### Ticket 14: Performance Optimization

**Goal:**
- Optimize bundle size
- Implement code splitting
- Add caching strategies

**Learning Check:**
1. How do you identify performance bottlenecks?
2. What's the difference between code splitting and lazy loading?
3. How do you optimize API calls?
4. What caching strategies work best for different data types?
5. How do you measure performance improvements?

---

## Notes

- Complete tickets in order for best learning experience
- Answer learning check questions after implementation
- Research topics you're unsure about
- Consider trade-offs and alternatives
- Document your decisions

