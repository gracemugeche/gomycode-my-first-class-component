# React Class Profile Component

## 📘 Overview

This project is a **React class-based component** named `App`, designed to demonstrate key concepts of React including **state management**, **JSX**, **event handling**, **React props**, and **lifecycle methods**. It also utilizes **Tailwind CSS** for modern, responsive styling.

The app displays a user profile that includes the person’s full name, bio, profession, and image. The profile visibility can be toggled using a button, and a timer shows how long the component has been mounted.

This project was bootstrapped using **Vite**, making it fast and efficient to develop.

---

## 🎯 Features

- ✅ **Class-Based Component**: Built with React's `Component` class to highlight OOP-style structure in React.
- ✅ **State Management**:
  - Stores a `person` object with `fullName`, `bio`, `imgSrc`, and `profession`.
  - Maintains a `show` boolean to toggle visibility.
  - Tracks `timeElapsed` since the component was mounted.
- ✅ **Lifecycle Methods**:
  - `componentDidMount()` starts a timer when the component is rendered.
  - `componentWillUnmount()` clears the timer when the component unmounts.
- ✅ **Event Handling**:
  - A button toggles the visibility of the profile card.
- ✅ **Conditional Rendering**:
  - Profile is only shown when the `show` state is `true`.
- ✅ **Tailwind CSS Styling**:
  - Clean, responsive, and modern styling without custom CSS.
- ✅ **Vite-Powered**:
  - Uses Vite for fast development experience and optimized builds.

---

## 🛠️ How It Works

### 1. Component Initialization
The `App` class component initializes state with a person’s data and sets `show` to `false` and `timeElapsed` to `0`.

### 2. Mount Timer
Once mounted, the component starts a 1-second interval using `setInterval` to update `timeElapsed` every second. This visually shows how long the component has been mounted.

### 3. Show/Hide Profile
Clicking the toggle button switches the `show` boolean in state. If `show` is `true`, the person’s profile appears with their image, name, profession, and bio.

### 4. Tailwind Styling
All elements are styled using Tailwind utility classes for consistent, modern UI without needing any CSS files.

---

---

## 📸 Preview

Here’s what you’ll see when the profile is toggled on:

- A circular image
- Full name and profession
- A short biography
- A live timer counting seconds since mount

---

## 👤 Author

**Grace Wambui Mugece**

---

## 🧾 Conclusion

This project demonstrates a solid understanding of fundamental React concepts using class-based components and shows how to manage component state and lifecycle effectively. It also leverages Vite and Tailwind CSS to create a modern, responsive interface.

It’s a perfect learning piece or starter template for any developer learning React the classical way and combining it with utility-first CSS frameworks like Tailwind.

---

✅ Feel free to clone, experiment, and expand this project to deepen your React knowledge!


