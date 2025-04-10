# React Quiz App

This is an **interactive quiz application** built with **React** that challenges users with a series of questions and tracks their performance.

---
![reactQuiz](https://github.com/user-attachments/assets/23ae7a1d-dab9-4fe8-9f60-589dc787059a)

## Key Features

### **Dynamic Question Flow**
- Questions are loaded from a data file, providing a dynamic and scalable way to manage quiz content.
- The quiz has a timer-based progression through questions, automatically advancing when time runs out.

### **Timer Functionality**
- A **visual progress bar** shows the remaining time for each question.
- The timer speeds up after answering a question, creating a sense of urgency.
- If the timer runs out, the app auto-selects the correct answer.

### **Answer Tracking**
- The app records user answers for each question, including whether the answer was correct or incorrect.
- It tracks the number of correct and incorrect responses during the quiz.
- The app calculates the final score at the end of the quiz.

### **Score Summary**
- Displays the final score at the end of the quiz.
- Shows which answers were correct and incorrect.
- Provides a complete overview of performance and areas of improvement.

---
![scire](https://github.com/user-attachments/assets/1d434a55-ef60-4ec8-ac78-b7448808a175)

## Technical Implementation

- **Built with React** and **styled-components** for styling the components.
- **React hooks** (useState, useEffect) are used for state management.
- Implements a custom **LoadingBar** component to display the timer.
- The app is **responsive**, providing a clean and user-friendly interface on mobile, tablet, and desktop devices.

---

## Installation and Setup

To run the app locally, follow these steps:

1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/react-quiz-app.git
