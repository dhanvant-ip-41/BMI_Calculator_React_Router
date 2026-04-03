import { useState } from "react"
import Navbar from "./navbar"
import Home from "./Home"
import BmiCalculator from "./BmiCalculator"

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "bmi" && <BmiCalculator />}
    </div>
  );
}

export default App
