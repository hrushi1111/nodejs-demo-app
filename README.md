

# 🚀 Node.js Demo App – CI/CD with GitHub Actions & Docker

This repository demonstrates how to automate the build and deployment of a **Node.js web application** using **GitHub Actions** and **Docker**.

---

## 📌 Objective

Automate the process of:

1. Running tests
2. Building a Docker image
3. Pushing the image to **DockerHub**

---

## 🛠 Tools Used

* **Node.js** → Sample web app
* **Docker** → Containerization
* **GitHub Actions** → CI/CD pipeline
* **DockerHub** → Image registry

---

## 📂 Project Structure

```
nodejs-demo-app/
├── Dockerfile
├── index.js
├── package.json
└── .github/
    └── workflows/
        └── main.yml
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/nodejs-demo-app.git
cd nodejs-demo-app
```

### 2. Run Locally

Install dependencies and start the app:

```bash
npm install
npm start
```

The app runs at 👉 `http://localhost:3000`

---

### 3. Docker Build (Manual)

```bash
docker build -t <your-dockerhub-username>/nodejs-demo-app .
docker run -p 3000:3000 <your-dockerhub-username>/nodejs-demo-app
```

---

## ⚙️ CI/CD Pipeline with GitHub Actions

The workflow file is located at:
📂 `.github/workflows/main.yml`

### 🔄 Workflow Overview

* Trigger: On push to `main` branch
* Jobs:

  1. **Checkout** – Pull latest code
  2. **Install & Test** – Run `npm install` and `npm test`
  3. **Docker Login** – Authenticate with DockerHub
  4. **Build & Push** – Build Docker image and push to DockerHub

### 📝 Workflow File (main.yml)

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Log in to DockerHub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v3
        with:
          push: true
          tags: ${{ secrets.DOCKER_USERNAME }}/nodejs-demo-app:latest
```

---

## 🔑 GitHub Secrets Setup

Go to repo → **Settings → Secrets and variables → Actions → New repository secret**

Add:

* `DOCKER_USERNAME` → your DockerHub username
* `DOCKER_PASSWORD` → your DockerHub password/token

---

## ✅ Deliverable

* Automatic pipeline runs on every push to **main**
* Docker image is pushed to:

  ```
  docker pull <your-dockerhub-username>/nodejs-demo-app:latest
  ```


