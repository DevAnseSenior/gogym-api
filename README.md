# gogym-api
Application for registration and check-in at gyms
# 🏋️ GoGym - Gym Check-in Management System

GoGym is a modern and efficient gym check-in management application built with **Node.js** and **Fastify**. It allows gym owners to manage their facilities and users to easily check in with a seamless experience.

## 🚀 Features

- **User Check-in**: Members can check in to gyms quickly and securely.
- **Gym Management**: Owners can manage gym locations, memberships, and check-ins.

## 🔧 Technologies Used

- **Node.js** (Backend Runtime)
- **Fastify** (Web Framework)
- **Zod** (Schema Validation)
- **dotenv** (Environment Variables)

## 📂 Project Structure
```bash
go-gym/
├── src/
│ ├── app.ts # Fastify app setup
│ ├── server.ts # Server setup confi
│ └── env/
│    └──index.ts # Enviroment validation
├── env.example # Enviroment variables example
├── .eslintrc.json
├── .npmrc
├── LICENSE
├── package.json
└── README.md
```

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DevAnseSenior/gogym-api.git
   cd go-gym-api
   ```

2. **Install dependencies**:
    ```bash
   npm install
   ```
   
3. **Set up environment variables (create *.env* file)**:
    ```bash
    NODE_ENV="your_env" ("dev", "test", "production")
    PORT=3333
   ```
   
4. **Run the application**:
    ```bash
    docker compose up -d # Start the services
    npx prisma migrate dev # Execute migrations
    ```

## 📌 Endpoints (Example)
### Example
- POST /test-endpoint → Test test test.

## 📄 License
This project is licensed under MIT [License](./LICENSE).

Made with 💪 by Anderson Coelho
🚀 Powered by Fastify & Node.js