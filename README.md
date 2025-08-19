# ⏱️ React Multi-Timer with Type-Safe State

This project demonstrates an **advanced type-safe global state management system** in React using **TypeScript**, **Context API**, and **useReducer**.  

The application is a **multi-timer app** where users can:  
- Add multiple timers with custom names and durations.  
- Start and stop all timers globally.  
- View real-time countdowns for each timer.  

This project serves as both a **learning resource** for building type-safe state management in React and a **portfolio project** showcasing scalable architecture.

---

## 🚀 Features

- **Type-Safe Context API**: Ensures all state updates and actions are strictly typed.  
- **Reducer-Based State Management**: Centralized logic using `useReducer`.  
- **Reusable Components**: Modular UI components (`AddTimer`, `Header`, `Timers`, `Timer`, `UI` elements).  
- **Real-Time Updates**: Timers update in real time with precise intervals.  
- **Scalable Architecture**: Clear separation of state (`store/`) and UI (`components/`).  

---

## 📂 Project Structure

src/
├── components/
│ ├── UI/ # Reusable UI elements (Button, Input, Form, Container, etc.)
│ ├── AddTimer.tsx # Form to add new timers
│ ├── Header.tsx # Header with global start/stop button
│ ├── Timer.tsx # Individual timer component
│ ├── Timers.tsx # List of active timers
│
├── store/
│ └── timers-context.tsx # Context API + useReducer logic for type-safe global state
│
├── App.tsx # Root component
├── main.tsx # React entry point
├── index.css # Global styles
├── vite-env.d.ts # Vite TypeScript environment definitions

---

## 🛠️ Tech Stack

- **React 18**  
- **TypeScript**  
- **Vite** (fast development server and bundler)  
- **Context API + useReducer** for global state  
- **CSS** for styling  

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/abdisati/Advanced-Type-Safe-State-with-Context-API---useReduce--
cd Advanced-Type-Safe-State-with-Context-API---useReduce--
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser to view the app.

🧩 How It Works
1. Type-Safe Global State
State is managed in store/timers-context.tsx using a combination of:

Context API: Provides state and actions across the app.

useReducer: Handles all state changes in a centralized, predictable way.

TypeScript types: Ensures all actions and state updates are type-checked.

2. Components
AddTimer.tsx
Form for adding new timers:

tsx
Copy
Edit
const { addTimer } = useTimersContext();
addTimer({ name: "Workout", duration: 60 });
Header.tsx
Start/Stop button for all timers:

tsx
Copy
Edit
const { isRunning, startTimer, stopTimer } = useTimersContext();
Timer.tsx
Displays countdown for a single timer:

tsx
Copy
Edit
<progress max={duration} value={remainingTime / 1000} />
Timers.tsx
Lists all active timers:

tsx
Copy
Edit
timers.map(timer => <Timer key={timer.name} {...timer} />)
🎯 Learning Outcomes
By exploring this project, you will learn how to:

Implement type-safe Context + useReducer in React.

Create modular and reusable components.

Handle real-time state updates with intervals.

Architect scalable React apps with clear separation of logic and UI.

📖 Potential Extensions
Pause/Reset individual timers.

Persist timers to localStorage.

Add unit and integration tests with React Testing Library.

Improve UI with TailwindCSS, Chakra UI, or Styled Components.

Add animations or sound alerts when timers finish.
