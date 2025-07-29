# 📝 Task Manager

A full stack containerized Task Manager application built with **Spring Boot**, **React**, and **Docker**, featuring task CRUD operations, status updates, and a clean UI.

## 🚀 Features

### Backend
- Create, read, update, and delete tasks
- Change task status (`TODO`, `IN_PROGRESS`, `DONE`)
- Input validation
- RESTful API with proper HTTP status codes

### Frontend
- Modern, responsive UI with Material UI
- Real-time task management
- Task status updates
- Form validation

## 🛠 Tech Stack
- **Backend**: Java 17, Spring Boot, H2 Database
- **Frontend**: React, TypeScript, Vite, Material UI
- **Testing**: JUnit, Mockito
- **Containerization**: Docker, Docker Compose

## 🚀 Getting Started

### Using Docker (Recommended)
```bash
docker-compose up --build
```
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080/api/tasks

### Local Development
Backend:
```bash
cd backend
./mvnw spring-boot:run
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /api/tasks | Create task |
| GET    | /api/tasks | List all tasks |
| GET    | /api/tasks/{id} | Get task by ID |
| PUT    | /api/tasks/{id} | Update task |
| PATCH  | /api/tasks/{id}/status | Update status |
| DELETE | /api/tasks/{id} | Delete task |

## 🧪 Testing

```bash
cd backend
./mvnw test
```

## 📦 Database

Uses H2 in-memory database for development and testing:
- Console: http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:mem:taskdb`
- Username: `sa`
- Password: (leave blank)