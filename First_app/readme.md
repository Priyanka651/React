# React App Setup Using npm

## What is npm?

**npm (Node Package Manager)** is a package manager for the Node.js ecosystem. When you install Node.js on your computer, npm comes bundled with it. It’s a tool that allows you to:

- Install and manage packages (also called modules) that you can use in your JavaScript projects.
- Publish your own packages that other developers can use.
- Share code with others via the npm registry.

npm helps developers easily reuse code written by others, install dependencies, and keep everything up to date in a project.

For example, the `create-react-app` package is a popular npm module that helps you quickly set up a React project. By using this package, you can avoid manually configuring Webpack, Babel, and other tools, and focus directly on writing React code.

---

## How to Create a New React App with npm

You don’t need to manually install `create-react-app`. Instead, you can use it directly by running an `npm init` command to create a new React app.

Here’s a step-by-step guide to create a new React app called **firstapp**:

### Steps to Create a New React App with npm

#### Step 1: Open the VS Code Terminal

1. **Open Visual Studio Code.**
2. Click on **View** in the top menu.
3. Then click on **Terminal** to open the integrated terminal.

#### Step 2: Run the Command to Create a New React App

In the terminal, run the following command to create a new React app. The `npm init react-app` command will automatically download and set up the necessary packages for you.

```bash
npm init react-app firstapp

```
## Explanation:

npm init react-app: This initializes a new React app using the create-react-app template.
firstapp: This is the name of the directory where your new React app will be created. You can replace firstapp with any name you like.
Step 3: Wait for the Installation to Complete
The installation will take some time because npm needs to download and install several packages (like react, react-dom, and react-scripts). During installation, you'll see messages like:


## Creating a new React app in /path/to/firstapp.
```bash
Installing packages. This might take a few minutes.
Installing react, react-dom, and react-scripts with cra-template...
```
Once the installation finishes, it will look something like:

```bash
added 1383 packages in 56s
190 packages are looking for funding
```
This means the dependencies have been installed successfully.

## Step 4: Navigate to the firstapp Folder
Once the installation completes, navigate to the newly created app folder:
```bash
cd firstapp
```
## Step 5: Start the React Development Server
Now, run the following command to start the local development server:

```bash
npm start
```
This command will start the app and open a new browser window with your React app running at http://localhost:3000.

You will see the following in the terminal:
```bash
Compiled successfully!

You can now view firstapp in the browser.

Local:            http://localhost:3000
On Your Network:  http://192.168.x.x:3000
```
he message Compiled successfully! means your React app is running without errors.

## Step 6: Open the App in the Browser
You can now open your web browser and visit http://localhost:3002 to see your new React app! You should see a page that looks like this:

This confirms that your React development environment is set up and running successfully.

### My Output
## PS C:\react-app> npm init react-app firstapp
>> 
Need to install the following packages:
## create-react-app@5.1.0
Ok to proceed? (y) y

npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated fstream-ignore@1.0.5: This package is no longer supported.
npm warn deprecated uid-number@0.0.6: This package is no longer supported.
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated fstream@1.0.12: This package is no longer supported.
npm warn deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
```bash 
> react-app@1.0.0 npx
> create-react-app firstapp
```
create-react-app is deprecated.

You can find a list of up-to-date React frameworks on react.dev
For more info see:https://react.dev/link/cra

This error message will only be shown once per install.

## Creating a new React app in C:\react-app\firstapp.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1325 packages in 1m

268 packages are looking for funding
  run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...

added 18 packages, and changed 1 package in 7s

268 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1343 packages in 3s

268 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

## Created git commit.

Success! Created firstapp at C:\react-app\firstapp
Inside that directory, you can run several commands:

##  npm start
    Starts the development server.

 ## npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

##  npm run eject
Compiled successfully!

You can now view firstapp in the browser.

```bash
  Local:            http://localhost:3002
  On Your Network:  http://172.20.10.3:3002
```
Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully


![image](https://github.com/user-attachments/assets/930f476f-ec1f-4512-ae93-7d2d1ff9b5b5)

