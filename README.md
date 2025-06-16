# 🏋️‍♂️ Gym Management Software – atharvaarbat-gym-5

A full-featured, modern Gym Management Platform built with **Next.js**, **TypeScript**, **Prisma**, and **Tailwind CSS**. This project is a comprehensive tool for gym owners and trainers to manage members, attendance, sales, enquiries, diet plans, workout tracking, and much more – all from a responsive and intuitive dashboard.

---

![.](screenshots/1 (1).png)
![.](screenshots/1 (2).png)
![.](screenshots/1 (3).png)
![.](screenshots/1 (4).png)
![.](screenshots/1 (5).png)
![.](screenshots/1 (16.png)

## 🔧 Tech Stack

| Category       | Technology                          |
|----------------|--------------------------------------|
| Frontend       | React, Next.js (App Router), Tailwind CSS |
| Styling        | TailwindCSS, ShadCN UI               |
| Backend        | Next.js API Actions (Server Actions) |
| Database       | PostgreSQL (via Prisma ORM)          |
| Auth & Session | JWT-based authentication             |
| UI Components  | ShadCN UI, Lucide Icons              |
| State/Utils    | React hooks, utility modules         |
| Deployment     | Vercel (ideal), Docker-ready         |

---

## 📦 Features

### 👥 Member Management
- Register new members
- View, edit, or delete member details
- Track attendance history
- Birthday tracking
- View individual workout records

### 📅 Attendance
- Mark and view daily attendance
- Attendance summary per member
- Attendance history tab for reports

### 🏋️‍♀️ Exercise & Workout Management
- Create, edit and list exercises
- Assign workout plans per user
- Exercise data input system with categorized JSON structure

### 🥗 Diet Management
- Manage food items
- Create personalized diet plans
- Diet planner with dynamic input system

### 💰 Sales & Invoicing
- Manage gym service sales
- Generate and view invoices per sale
- Handle follow-ups and pending payments

### 📞 Enquiry Management
- Record and follow up on potential client enquiries
- Manage enquiry status and track conversions

### 💼 Services
- Add new services offered by the gym (e.g., personal training, Zumba, etc.)

### 📊 Dashboard & Analytics
- Summary charts
- Performance insights
- Custom tools: BMI, BMR, WHR calculators

### ✅ To-Do & Task Management
- Inbuilt to-do tracker for staff or admins

### 🛠 Tools Section
- Health metric calculators (BMI, BMR, WHR)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL (locally or remote)
- Optional: Docker (for containerization)

### Setup

```bash
# Clone the repository
git clone https://github.com/atharvaarbat/gym-5.git
cd atharvaarbat-gym-5

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Add your DB credentials and JWT secret etc.

# Push database schema
npx prisma db push

# Run the development server
npm run dev
````

---

## 🧠 Why this project?

This project was built to demonstrate:

* Full-stack application architecture using modern tools
* Real-world state and data management
* Clean component-based structure
* Reusable hooks and custom logic
* Scalable code patterns ideal for production
* Business logic via server actions (Next.js App Router)

---


**Crafted with 💪 by Atharva Arbat**