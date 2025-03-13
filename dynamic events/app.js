function App(){
  function handleClick(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  return(
<div>
  <h1>Task: add a button to handle a event</h1>
  <button onClick={handleClick}> Guess the number between 1 and 3</button>
</div>
)}
export default App;
