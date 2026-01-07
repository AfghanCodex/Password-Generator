import { useState } from "react";

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function App() {
  const [password, setPassword] = useState([]);

  function handleform(e) {
    e.preventDefault();

    const Concatenation = [...lowercase, ...uppercase, ...numbers, ...symbols];

    const GetUpdatePassword = [];

    for (let i = 0; i <= 12; i++) {
      let RandomNumber = Math.random() * Concatenation.length;
      let pass = Concatenation[Math.floor(RandomNumber)];

      GetUpdatePassword.push(pass);
    }

    setPassword(GetUpdatePassword);
  }

  function handleCopy(e) {
    e.preventDefault();

    alert("The Text Hasbeen Succesfully Copied");
  }

  return (
    <div className="App">
      <header>
        <h1>Password Generator</h1>
        <p>This is a simple password generator application.</p>
      </header>

      <main className="main">
        <section>
          <h2>Generate a Password</h2>

          <form>
            <button onClick={handleform}>Generate Password</button>
            <input
              type="text"
              value={password.join("")}
              disabled
              placeholder="Generate Password"
            />
            <button onClick={handleCopy}>✉️</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
