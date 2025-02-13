import { useState } from "react";
export default function Joke() {
  let myFunc = () => {
    let jk=fetch('https://api.chucknorris.io/jokes/random').
          then(response => response.json()).
          then(data => setJk(data.value));
  }
  let [jk, setJk] = useState('Click me to get a Quote');
  return (
    <div>
      <p>{jk}</p>
      <button onClick={myFunc}>Quote Generator</button>
    </div>
  );
}
 
