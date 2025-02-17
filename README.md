# CREATE AND DEPLOY YOUR FIRST VANILLA JS APPLICATION

Step # 01. Create a New Vanilla JS Application

1. Create a new folder for your project.
2. Open the folder in your preferred IDE (e.g., VS Code).
3. Open a new terminal inside the IDE.
4. Create basic project structure:
5. Create the following files manually:
  index.html: The main HTML file.
  style.css: Styles for your application.
  app.js: JavaScript file where your app's logic resides.
6. Your directory structure will look like this:
my-vanilla-js-app/
├── index.html
├── style.css
└── app.js
7. Write your application logic in app.js and style it using style.css.
8. Run the application:
  Open index.html in your browser.
  The app will be rendered directly from the HTML file.

Step # 02: Install Git (Not GitHub)

1. Goto: https://git-scm.com/downloads
2. Download the Windows/MAC/Linux version depending on youe operating system.
3. Run the exe.
4. Install
5. Open terminal to verify the installation.
6. Run the command: git -v (This will return the git version)
7. Open Environment variables from search.
8. Under system vaiables click on Path then Edit.
9. Verify that the path to where your git is installed is present there.
10. If not add the path.

Step # 03: Push your aplication to Github

1. Goto: https://github.com/
2. Login/SignUp
3. Create a new repository. (Recommended: Initialize with README.MD)
4. Open terminal and navigate to the directory in which your project is present using: cd "path_to_your_project_directory" or simply just open the folder from file explorer Right Click and open terminal.
   
   Step 1: Initialize Git repository  
  git init  
  
   Step 2: Add a remote repository (Replace <repository_url> with your actual GitHub repo URL)  
  git remote add origin <repository_url>  
  
   Step 3: Stage all files
   git add .  
  
   Step 4: Commit the changes with a message  
  git commit -m "Initial commit"  
  
   Step 5: Push changes to the GitHub repository (on the main branch)  
  git branch -M main  
  git push -u origin main  

Step # 05: Deploy to Vercel
1. Goto: https://vercel.com/
2. Login/Signup
3. Click Add new -> Project
4. Link Vercel with Github
5. Install Github
6. Import the repository that you want to deploy.
7. The click deploy.
8. A window will be opened click that window, your deployed application will be shown on the browser.
9. Copy the URL, which this your deployment link.

