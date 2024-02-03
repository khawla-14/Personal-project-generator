const project = [
    "Personal Portfolio: Create a personal website to showcase your skills, projects, and resume",
    "ToDo List App: Build a simple ToDo list application with the ability to add, delete, and mark tasks as completed",
    "Weather App: Use a weather API to display current weather conditions based on user input",
    "Recipe Book: Design a website where users can browse and search for recipes",
    "Trivia Quiz Game: Develop a quiz game with multiple-choice questions and track the user's score",
    "Currency Converter: Build a currency converter that allows users to convert between different currencies",
    "Personal Blog: Create a blog platform where users can publish and comment on posts",
    "Countdown Timer: Design a countdown timer that users can set for various purposes",
    "Calculator: Develop a basic calculator with standard arithmetic operations",
    "Movie Database: Use a movie API to create a website where users can search for movies, view details, and ratings",
    "Responsive Landing Page: Design a landing page with a responsive layout for a product or service",
    "Chat Application: Build a simple chat application that allows users to communicate in real-time",
    "Fitness Tracker: Create a fitness tracker where users can log their workouts and track progress",
    "Memory Game: Develop a classic memory card game with a timer and scoring system",
    "Music Player: Design a basic music player with play, pause, and skip functionality",
    "Expense Tracker: Build an expense tracker to help users manage their finances",
    "Painting App: Create a simple painting app with basic drawing tools",
    "Job Board: Design a job board where users can post and apply for job listings",
    "Interactive Map: Use a mapping API to create an interactive map with markers and pop-up information",
    "Car Rental System: Build a small system for renting cars with user registration and booking features",
    "Flashcards App: Develop a flashcards app for studying various topics",
    "Recipe Meal Planner: Create a meal planner that suggests recipes based on user preferences",
    "Random Quote Generator: Build a website that displays random quotes each time it's loaded",
    "E-commerce Product Showcase: Design a product showcase for an e-commerce website with product details",
    "GitHub Profile Viewer: Use the GitHub API to display a user's repositories and contributions",
    "Social Media Dashboard: Create a dashboard that aggregates social media feeds in one place",
    "Space Facts: Build a website that displays interesting facts about space and celestial bodies",
    "Language Learning App: Develop an app that helps users learn new languages through quizzes and lessons",
    "Virtual Tour: Create a virtual tour of a place using images and interactive elements",
    "BMI Calculator: Build a Body Mass Index (BMI) calculator with user input for height and weight",
    "Pet Adoption Platform: Design a platform for pet adoption, allowing users to browse and adopt pets",
    "Real-time Stock Ticker: Use a stock market API to display real-time stock prices and changes",
    "Resume Builder: Create a simple resume builder that allows users to fill in their information and generate a downloadable resume",
    "Flashlight App: Build a virtual flashlight that can be turned on and off with a button",
    "Guestbook: Develop a guestbook where visitors can leave comments and messages",
    "Language Translator: Build a language translator that translates text from one language to another",
    "Periodic Table Explorer: Create an interactive periodic table with details about each element",
    "RPG Character Generator: Build a tool that generates random RPG characters with traits and abilities",
    "News Aggregator: Design a website that aggregates news from various sources in one place",
    "Sudoku Game: Develop a Sudoku game with different difficulty levels and a timer",
];

const deadline = [
  '5 Days',
  '6 Days',
  '12 Days',
  '7 Days',
  '9 Days',
  '8 Days',
  '4 Days',
  '10 Days',
];

function generateProject() {
    const randomNumber = Math.floor(Math.random() * project.length);
    const randomNum = Math.floor(Math.random() * deadline.length);

    const randomProject = project[randomNumber];
    const randomdeadline = deadline[randomNum];

    document.getElementById("project").textContent = randomProject;
    document.getElementById("deadline").textContent = randomdeadline;


    document.getElementById('wrapped').style.display= 'none';
    document.getElementById('resultsContainer').style.display= 'flex';
    
}














// function modeSwitch(mode) {
//     const body = document.body;
//     var sun_btn = document.getElementById('sun_btn');
//     var moon_btn = document.getElementById('moon_btn');


//     if (mode === 'dark') {
//       body.classList.add('dark-mode');
//     } else {
//       body.classList.remove('dark-mode');
//     }

//     if(mode === 'dark'){
//       moon_btn.style.display = "none";
//       sun_btn.style.display = "inline-block";

//       document.getElementById('container').style.backgroundColor ='#011310';

//   }else{
//       sun_btn.style.display = "none";
//       moon_btn.style.display = "inline-block";

//       document.getElementById('container').style.backgroundColor ='#ffffff';
//   }
// }