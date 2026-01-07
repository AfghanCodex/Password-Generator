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

    let GeneratePassword = Math.random() * Concatenation.length;

    setPassword(Concatenation[Math.floor(GeneratePassword)]);
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

          <form onSubmit={handleform}>
            <button>Generate Password</button>
            <input
              type="text"
              value={password}
              disabled
              placeholder="Generate Password"
            />
            <button>✉️</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
