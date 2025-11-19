
# Take-home coding test - Property Agent Management


This repository contains all the requested services for a full stack application. This uses Typescript.

# Documentation

[Entity Relationshp Diagram](docs/erd.md)

[Stretch Goals](docs/stretch-goals.md)


---

## Repository Structure

```
take-home/
├── api/  # Express + TypeScript backend (CRUD API)
│   └── src/
│       ├── data  # Data access layer + CRUD to in-memory
│       ├── routes
│       ├── types  # Type definitions
│       └── server.ts  # ExpressJS server file
├── web/  # Vue application
│   └── src/
│       ├── components  # Form component and Listing component
│       ├── App.vue  # Root vue file
│       └── main.ts  # Root app file
├── docs/
│   └── erd.md # Entity Relationship Diagram
└── README.md
```

---

## Run the API

### 1. Install dependencies:

```bash
cd api
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Then the API will be available on port 3000

```bash
http://localhost:3000/api/agents

---

## Run the Web Application

### 1. Install dependencies:

```bash
cd eb
npm install
```

### 2. Start the application

```bash
npm run dev
```

### 3. Then the API will be available on port 3000

```bash
http://localhost:5173

```
