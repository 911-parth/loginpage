function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  async function login() {
    setMessage("Loading...");

    const res = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    setMessage(data.message);
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Loginhello</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={login}>Login</button>

      <p>{message}</p>
      <p>Demo: admin / 123</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
