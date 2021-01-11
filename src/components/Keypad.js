// Code Keypad Component Here

import { render } from "react-dom";

function Keypad(){
    function handleChange(event) {
        event.preventDefault();
        console.log("Entering password...");
      }
    return(
        <form onChange={handleChange}>
            <input type="password" name="password" placeholder="Enter password..." />
            <button>Login</button>
        </form>
    )
}

export default Keypad