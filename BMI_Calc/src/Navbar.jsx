export default function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h2>BMI App</h2>
      <div className="nav-links">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("bmi")}>BMI Calculator</button>
      </div>
    </nav>
  );
}
