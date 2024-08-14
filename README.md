
## Getting Started

Hi! I'm Adam, in this project I'm building an application called "Notes App" built with Next.js, Chakra-UI for the frontend, and a REST API backend powered by Node.js, Express, and PostgreSQL (using Prisma ORM). This project is built to fulfill the requirements of the IT Staff study case provided by Dibimbing.id.

 ### Features

- Display a list of notes with title, created date, and content.
- View details of a specific note.
- Add, edit, and delete notes.
- User-friendly interface with Chakra-UI.
- RESTful API for note management.

### Tech Stack

- **Frontend:** Next.js, Chakra-UI, JavaScript
- **Backend:** Node.js, Express, PostgreSQL, Prisma ORM
- **Database:** PostgreSQL
- **API:** RESTful API

## Running the Project

### 1. Clone the Repository

Clone the repository to your local machine.

### 2. Install Dependencies

```
npm install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory of the project and add the following environment variables:
```
DATABASE_URL="postgresql://<user-db>:<db-password>@localhost:5432/<db-name>?schema=public"
```

### 4. Set Up Prisma and Seed the Database

Turn on your PostgreSQL. Do a migration to your Database and Seed them:

```
npx prisma migrate dev  # Apply migrations to the database
```

### 5. Start the Development Server

Run the development server with the following command:

```
npm run dev
```
The development server will be available at http://localhost:3000. Open this URL in your browser to view your application.

