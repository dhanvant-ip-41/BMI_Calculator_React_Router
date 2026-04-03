export default function Home({ setPage }) {
    return (
        <div className="center">
        <h1>Welcome</h1>
        <p>
            Use this tool to calculate your Body Mass Index and check your health category.
        </p>
        <button onClick={() => setPage("bmi")}>BMI Calculator</button>
        </div>
    );
}
