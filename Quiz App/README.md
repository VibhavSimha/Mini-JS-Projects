# Quiz App

A lightweight, interactive quiz application built using HTML, CSS, and JavaScript. This project demonstrates how to present quiz questions dynamically, capture user answers, calculate scores, and store/retrieve quiz data using localStorage.

## Overview

The Quiz App provides a simple interface where users can take a quiz with multiple-choice questions. As users select answers, the application displays a "Next Question" button to proceed. At the end of the quiz, the final score is displayed, and users have the option to retry the quiz. The questions are stored in localStorage, making it easy to update or expand the quiz by modifying the question objects.

## Features

- **Dynamic Question Loading:** Questions are loaded one at a time, and the app moves to the next question upon answer selection.
- **Interactive User Interface:** Users can select answers and see a "Next Question" button appear dynamically.
- **Score Calculation:** At the end of the quiz, the user's score is calculated and displayed.
- **Local Storage Integration:** Quiz data is saved to localStorage to enable easy modifications and persistence across sessions.
- **Retry Option:** After completing the quiz, users can restart the quiz to try again.

## Customization

## Updating Quiz Questions:
To modify or add new questions, edit the questions array in script.js. Each question object should include:
- question: The quiz question text.
- op1 to op4: Options for answers.
- selected: Initially set to null (will hold the user's selected option).
- ans: The correct answer for scoring.

Example:

    let questions = JSON.parse(localStorage.getItem('questions')) || [
        {
            question: "What is the capital of France?",
            op1: "Paris",
            op2: "London",
            op3: "Berlin",
            op4: "Madrid",
            selected: null,
            ans: "Paris"
        },
        // Add additional questions as needed...
    ];

