# gogym-api
Application for registration and check-in at gyms
# 🏋️ GoGym - Gym Check-in Management System

GoGym is a modern and efficient gym check-in management application built with **Node.js** and **Fastify**. It allows gym owners to manage their facilities and users to easily check in with a seamless experience.

## 🚀 Features

- **User Register**: Members can be registered on application.
- **User Check-in**: Members can check in to gyms quickly and securely.
- **Gym Management**: Owners can manage gym locations, memberships, and check-ins.

## 🔧 Technologies Used

- **Node.js** (Backend Runtime)
- **Fastify** (Web Framework)
- **Zod** (Schema Validation)
- **dotenv** (Environment Variables)
- **Prisma** (Serverless architecture ORM)
- **BCryptjs** (Hashing lib for passwords)
- **Vitest** (Unit tests enviroment)

## 📂 Project Structure
```bash
go-gym-api/
├── prisma/
│ ├── migrations # stored migration history
│ └── schema.prisma # Database tables schemas
├── src/
│ ├── @types/ # Store globals interfaces on project
│ ├── env/
│ │ └── index.ts # Enviroment vars validation
│ ├── http/
│ │ ├── controllers/ # Handler of request response
│ │ └── middlewares # Functions to interact between controllers and endpoints
│ ├── lib/
│ │ └── prisma.ts # Prisma client config
│ ├── repositories/ # Layer for database manipulation tools
│ │ ├── in-memory/
│ │ ├── prisma/
│ │ ├── check-ins-repository.ts # Check-ins Interface
│ │ ├── gyms-repository.ts # Check-ins Interface
│ │ └── users-repository.ts # Users Interface
│ ├── use-cases/ # Use cases layer for entities
│ │ ├── errors/ # Use case error messages
│ │ └── factories/ # Use case factories for instances
│ ├── utils/ # Application utility functions
│ │ └── test/ # Utility functions for tests
│ ├── app.ts # Fastify app setup
│ └── server.ts # Server setup config
├── env.example # Enviroment variables example
├── .eslintrc.json # ESLint Config
├── .gitignore
├── .npmrc # NPM config libs control
├── docker-compose.yml
├── LICENSE
├── package.json
├── tsconfig.json
├── vite.config.ts # Unit test config file
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
    DATABASE_URL=
   ```
   
4. **Run the application**:
    ```bash
    docker compose up -d # Start the services
    npx prisma migrate dev # Execute migrations
    npm run start:dev # Run application on development mode
    ```
   
5. **Run tests**:
    ```bash
    docker compose up -d # Start the services
    npm run test # Run the unit tests suits
    npm run test:e2e # Run the tests e2e suits
    npm run test:watch # Run the tests on watch mode
    npm run test:coverage # Verify the tests coverage (open index.html from dir coverage/)
    npm run test:ui # Execute the test client of vitest
    ```

## 📌 Endpoints (Example)
### Users
- POST /users → Register new user.
- POST /sessions → Authenticate (login).
- GET /me → Get logged user info.

### Gyms
- POST /gyms → Create a new gym.
- GET /gyms/search → Search gym by title.
- GET /gyms/nearby → Search nearby user localization gyms.

### Check-ins
- POST /gyms/:gymId/check-ins → Check-in.
- PATCH /check-ins/:checkInId/validate → Gym validations check-in.
- GET /check-ins/history → Get check-ins history.
- GET /check-ins/metrics → Get check-ins count of logged user.

## 📄 License
This project is licensed under MIT [License](./LICENSE).

Made with 💪 by Anderson Coelho
🚀 Powered by Fastify & Node.js