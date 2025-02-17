Here's the rewritten version:

---

# CREATE AND DEPLOY YOUR FIRST VANILLA JS APPLICATION

### Step #01: Create a New Vanilla JS Application

1. Create a new folder for your project.
2. Open the folder in your preferred IDE (e.g., VS Code).
3. Open a new terminal inside the IDE.
4. Set up the basic project structure.
5. Manually create the following files:
   - `index.html`: The main HTML file for your app.
   - `style.css`: The CSS file to style your app.
   - `app.js`: The JavaScript file where your app's logic will reside.
6. Your project directory structure will look like this:
   ```
   my-vanilla-js-app/
   ├── index.html
   ├── style.css
   └── app.js
   ```
7. Write your JavaScript logic in `app.js` and style the app using `style.css`.
8. To run the app:
   - Open `index.html` in your browser.
   - The app will be rendered directly from the HTML file.

### Step #02: Install Git (Not GitHub)

1. Visit: https://git-scm.com/downloads
2. Download the version of Git appropriate for your operating system (Windows, macOS, or Linux).
3. Run the installer and follow the installation prompts.
4. Once installed, open the terminal to verify the installation:
   - Run the command: `git -v` (This should return the Git version).
5. Open Environment Variables (search for it in the Start menu).
6. In the System Variables section, click on `Path`, then `Edit`.
7. Verify that the path where Git is installed is present.
8. If not, add the path manually.

### Step #03: Push Your Application to GitHub

1. Visit: https://github.com/
2. Log in or sign up for GitHub.
3. Create a new repository (it’s recommended to initialize with a README.md).
4. Open a terminal and navigate to the directory where your project is located using:
   - `cd "path_to_your_project_directory"`
   - Alternatively, right-click the folder in File Explorer and select "Open in Terminal."
   
5. Initialize the Git repository:
   ```
   git init
   ```

6. Add the remote repository (replace `<repository_url>` with the actual GitHub URL):
   ```
   git remote add origin <repository_url>
   ```

7. Stage all files for the commit:
   ```
   git add .
   ```

8. Commit the changes with a message:
   ```
   git commit -m "Initial commit"
   ```

9. Push the changes to GitHub on the `main` branch:
   ```
   git branch -M main
   git push -u origin main
   ```

### Step #04: Deploy to Vercel

1. Visit: https://vercel.com/
2. Log in or sign up for Vercel.
3. Click "Add New" -> "Project".
4. Link your GitHub account to Vercel.
5. Import the repository you want to deploy from GitHub.
6. Click "Deploy".
7. After deployment, a window will open showing your deployed application in the browser.
8. Copy the URL provided, which is your deployment link.
