## Task
When a user interacts with your React app, this will trigger events. You've learned how to handle user-generated events, so now you can reinforce what you've learned by practicing event handling. 
To make this more fun, in this exercise, you'll be building a simple number-guessing game.

## Steps
Step 1
This task’s starting point is the App component’s h1 element that reads: “Task: Add a button and handle a click event”.

bash```
function App() {
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
    </div>
  );
}

export default App;
```

Thus, as a first step in this task, you’ll need to add a button element, with an opening and a closing button tag. 

Step 2
In between the opening and closing button tags, add the following text: Guess the number between 1 and 3. 

Step 3
Inside the opening button tag, add the onClick event-handling attribute, and pass it the following JSX expression: {handleClick}. 

Step 4
Above the return statement of the App component - but still inside the App function - add the handleClick function as you see below: 

```bash
  function handleClick() { 
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
```
Step 5
At the top of the lab environment, locate the Terminal menu. Click on it to open a dropdown, then select New Terminal.  
Use the  npm start command to start the development server.  

If you encounter errors like File not found or Unexpected token, stop the server with Ctrl+C in the terminal and restart it using npm start.  

 You can now view the App in your browser by navigating to localhost:3000. 
![Screenshot 2025-03-12 233554](https://github.com/user-attachments/assets/4e76b770-cb77-4d04-b0ad-3c604060c05a)


