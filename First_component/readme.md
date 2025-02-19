# React First Component Lab

This is a simple React project demonstrating how to create and use a React component.

## 📌 Project Overview

In this lab, we create a `Heading` component and render it inside the `App` component. The `Heading` component displays an `<h1>` element with the text:  

> "This is an h1 heading."

## 🛠️ Steps to Run the Project

2️⃣ Install Dependencies
Ensure you have Node.js installed, then run:

```bash
npm install
```

3️⃣ Start the Development Server
```bash
npm start
This will start the React development server and open the app in your default browser.
```
4️⃣ View in Browser
If the browser doesn’t open automatically, visit:
```bash
http://localhost:3000
```
## Code
```bash
function App() {
  return (
    <div className="App">
      This is the starting code for "Your first component" ungraded lab.
      <Heading />
    </div>
  );
}

export default App;
```


## Running your code:

At the top of the lab environment, locate the Terminal menu. 
Click on it to open a dropdown, then select New Terminal. 
Use the npm start command to start the development server.
You can now view the App in your lab browser. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.
```bash 
npm start
```
![Screenshot 2025-02-18 182927](https://github.com/user-attachments/assets/55b7abc5-9731-40f0-93c3-2cdca2fd5f7f)


🚀 Troubleshooting
If you encounter errors like File not found or Unexpected token, stop the server (Ctrl + C) and restart it with:
