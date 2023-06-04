Welcome to our social media application for interesting leisure!

This project implements a Twitter card UI with interactive functionality using React. The user can follow/unfollow a user, and the follower count updates accordingly.

Features
Displays user cards with follow/unfollow buttons.
Clicking the follow button changes the button text to "Following" and updates the follower count.
Clicking the button again reverts the text and color to the initial state, and the follower count decreases by 1.
The final user actions are persisted even after refreshing the page using LocalStorage.
The user data is fetched from the mockapi.io backend with pagination support.
The app is implemented on two pages using React-router-dom 6.
Getting Started
To get started with the project, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/dj-egregor/test-tweets.git
Navigate to the project directory:
bash
Copy code
cd project-tweets
Install the dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Open your browser and visit http://localhost:5173 to see the app in action.
Technologies Used
React
React-router-dom
LocalStorage
Axios
Contributing
We welcome contributions to improve the project! To contribute, follow these steps:

Fork the repository.
Create a new branch for your feature/bug fix.
Make your changes and commit them.
Push the changes to your fork.
Submit a pull request describing your changes.
Please ensure that your code adheres to the existing code style and conventions. Also, make sure to test your changes thoroughly.
