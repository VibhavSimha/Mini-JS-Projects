# Weather App

A simple web-based Weather App built with HTML, CSS, and JavaScript. This application allows users to search for a city and displays the current weather conditions using data from the OpenWeather API.

## Overview

The Weather App provides an interactive interface where users can enter the name of a city to retrieve its current weather details. Upon entering a valid city, the app fetches weather data from the OpenWeather API and displays:
- City name
- Temperature (in °C)
- Weather description

If an invalid city is entered, an error message is shown.

## Features

- **Search Functionality:** Enter a city name to fetch the weather information.
- **API Integration:** Uses the OpenWeather API to retrieve up-to-date weather data.
- **Dynamic UI Updates:** Displays weather information dynamically without reloading the page.
- **Error Handling:** Notifies users when a city is not found or if an error occurs during the data fetch.
- **Responsive Design:** The app is designed to work well on both desktop and mobile devices.


## How It Works

**JavaScript Functionality (script.js):**  
   - **Event Listener:**  
     The app listens for the `DOMContentLoaded` event to ensure the DOM is fully loaded before attaching event listeners.
   - **Search Button Click:**  
     When the "Get Weather" button is clicked, the app reads the input value, validates it, and calls the `fetchWeatherData()` function if the input is not empty.
   - **Fetching Data:**  
     The `fetchWeatherData()` function constructs the API URL with the entered city and your API key. It then fetches the data and returns it in JSON format.
   - **Displaying Data:**  
     The `displayWeatherData()` function updates the UI with the fetched weather information. If an error occurs (e.g., city not found), the `showError()` function displays an appropriate error message.
   - **Local Styling:**  
     CSS classes are toggled to show or hide the weather output container and error messages as needed.


## Customization

- API Key:
Replace the placeholder API key in script.js with your own OpenWeather API key:
    
    <pre>javascript const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your API key</pre>

- Styling:
Modify style.css to adjust the appearance of the app to suit your preferences.
- Features:
Extend the functionality by adding more weather parameters (e.g., humidity, wind speed) or integrating additional APIs.



