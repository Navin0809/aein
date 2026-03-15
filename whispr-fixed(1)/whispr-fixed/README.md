# 💬 Whispr — Modern Messaging App

A clean, minimal real-time messaging app built with Node.js, MongoDB, Socket.IO, and Docker.

---

## ✨ Features

- **Username + Password auth** — No phone number, no Google, no noise
- **Real-time messaging** — Socket.IO powered, instant delivery
- **Friend system** — Send/accept/decline friend requests
- **Online status** — See who's active right now
- **Typing indicators** — Live "is typing..." feedback
- **Read receipts** — ✓ / ✓✓ delivery and read ticks
- **Message history** — Paginated chat history with date dividers
- **Mongo Express** — Built-in DB admin panel at port 8081

---

## 🚀 Quick Start

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### 1. Clone / download this project

```bash
cd whispr
```

### 2. Start everything with one command

```bash
docker compose up --build
```

Wait ~30 seconds for all services to start.

### 3. Open the app

| Service       | URL                          |
|---------------|------------------------------|
| **Whispr App**    | http://localhost             |
| **Mongo Express** | http://localhost:8081        |

Mongo Express credentials: `admin` / `admin123`

---

## 🗂 Project Structure

```
whispr/
├── docker-compose.yml
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       ├── server.js          # Express + Socket.IO server
│       ├── models/
│       │   ├── User.js
│       │   ├── FriendRequest.js
│       │   └── Message.js
│       ├── routes/
│       │   ├── auth.js        # Register, Login
│       │   ├── users.js       # Search, Profile
│       │   ├── friends.js     # Friend requests & list
│       │   └── messages.js    # Chat history
│       └── middleware/
│           └── auth.js        # JWT middleware
└── frontend/
    ├── nginx.conf
    └── public/
        ├── index.html         # Auth page
        ├── app.html           # Main app
        ├── css/
        │   ├── auth.css
        │   └── app.css
        └── js/
            ├── auth.js
            └── app.js
```

---

## 🔧 Architecture

```
Browser ──► Nginx (port 80)
              ├── /api/* ──────► Node.js Backend (port 3000)
              ├── /socket.io/* ► Node.js Backend (Socket.IO)
              └── static files ► Frontend HTML/CSS/JS

Node.js ──► MongoDB (port 27017)

Mongo Express ──► MongoDB (admin UI, port 8081)
```

---

## 🔑 API Endpoints

### Auth
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Sign in |

### Users
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/users/search?q=` | Search users |
| GET | `/api/users/me` | Get own profile |
| PATCH | `/api/users/me` | Update bio |

### Friends
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/friends/request` | Send friend request |
| GET | `/api/friends/requests` | Get pending requests |
| PATCH | `/api/friends/request/:id` | Accept/reject |
| GET | `/api/friends` | Get friends list |
| DELETE | `/api/friends/:id` | Remove friend |

### Messages
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/messages/:userId` | Get conversation |
| GET | `/api/messages/preview/all` | Get last messages |

### Socket Events
| Event (emit) | Payload | Description |
|---|---|---|
| `send_message` | `{ receiverId, content }` | Send a message |
| `typing` | `{ receiverId, isTyping }` | Typing indicator |
| `mark_read` | `{ senderId }` | Mark messages read |

---

## 🛑 Stop the app

```bash
docker compose down
```

To also delete all data:
```bash
docker compose down -v
```

---

## 🔐 Default Credentials (Mongo Express)
- **Username:** `admin`
- **Password:** `admin123`

> Change these in `docker-compose.yml` before deploying to production.
