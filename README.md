# ✨ React Todo App with Local Storage

A modern, responsive Todo application built with React and Tailwind CSS, featuring persistent storage.

## 🚀 Features

- **Local Storage Persistence**: Tasks remain saved even after browser refresh
- **Beautiful UI/UX**: Modern design with smooth animations and transitions
- **Task Management**:
  - ✅ Add new tasks
  - 🔄 Edit existing tasks
  - ❌ Delete tasks
  - ✔️ Mark tasks as complete/incomplete
- **Task Organization**:
  - Separate sections for active and completed tasks
  - Task counter
  - Empty state handling
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- Local Storage API
- Vite (Build Tool)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Navigate to the project directory:
```bash
cd react1
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🎯 Usage

1. **Adding a Task**:
   - Type your task in the input field
   - Click "Add Task" or press Enter

2. **Managing Tasks**:
   - Click the task text to mark it as complete/incomplete
   - Use the "Edit" button to modify task text
   - Use the "Delete" button to remove tasks

3. **Data Persistence**:
   - All changes are automatically saved to local storage
   - Tasks persist across page refreshes and browser sessions

## 🎨 UI Features

- Gradient background
- Shadow effects
- Hover animations
- Smooth transitions
- Responsive layout
- Modern iconography

## 🤝 Contributing

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
