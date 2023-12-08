# Quiz-Game

## Description

In this odd-numbered week, I did not receive a startup code, meaning that I began creating everything from scratch! Initially, I implemented the skeletal structure of the website, then proceeded to add style. After completing the styling, I focused on handling the logic of the website. For example, when the user clicks "start quiz," the algorithm manipulates the DOM elements and creates buttons as answers.

The quiz questions were placed into an array of objects, enabling the algorithm to retrieve the necessary question in relation to the available choices and their answers. The algorithm I developed appends the question(s) into the created h2 element and then appends the choices to the buttons by modifying the innerHTML/textContent. As the user clicks, the correct/wrong validation is appended, allowing the user to know whether they have selected the right answer or not. The question numbers themselves proceed forward as instructed by the algorithm.

This was by far my most challenging task because the algorithm was fairly complex, especially considering my relative newness to JavaScript concepts. However, my teachers and tutor have helped me thoroughly! I have learned many things, including setting/getting items from local storage, understanding arrays of objects, and manipulating the DOM of the web, among many others.

Lastly, I would say that although I gave 100% effort to this project, finishing it is not the sole objective. I strive to learn from my mistakes and actions, so not being able to finish this project on time tells me to try something different next time.

## Web URL

https://sajjadalgburi.github.io/Code-Quiz/

## Screenshot UI

![Screenshot of Web](assets/screenshots/Screenshot%202023-12-07%20183339.png)

## Installation

Steps:

Step 1: Create a GitHub Repository

    - Log in to your GitHub account.
    - Click on the "+" sign in the top right corner and choose "New repository."
    - Fill in the repository name, description, add README.md file.
    - Click on "Create repository."

Step 2: Open Terminal or Command Prompt

Step 3: Navigate to the Project Directory - Use the cd command to navigate to the directory where you want to store your project.

        - cd path/to/your/project

Step 4: Initialize Git in the Local Directory

    - git init

Step 5: Connect Local Repository to GitHub Repository - Use the following command to add a remote connection to your GitHub repository. Replace your-username with your GitHub username and your-repo with the name of your GitHub repository:

        - git remote add origin https://github.com/your-username/your-repo.git

Step 6: Verify the Remote Connection - Confirm that the remote connection has been added successfully by running:

        - git remote -v

Step 7: Add and Commit Changes - Add your files to the local repository and make an initial commit:

        - git add .
        - git commit -m "Initial commit"

Step 8: Push to GitHub - Push your local repository to GitHub:

    - git pull --rebase origin main
    - git push -u origin main

Step 9: Verify on GitHub - Visit your GitHub repository in a web browser to confirm that your local files are now on GitHub.

/
/

If you're running into any issues follow the Youtube video below instead!!
Link to the video: https://www.youtube.com/watch?v=qMck70tLDuo

/
/
