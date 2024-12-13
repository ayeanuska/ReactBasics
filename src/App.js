import logo from "./logo.svg";
import "./App.css";
import PropTest from "./PropTest";
import Profile from "./Profile";

const App = () => {
  const name = "Anuska Shrestha";
  return (
    <div>
      <h2>Hello world;</h2>
      <Profile />
      <PropTest />
    </div>
  );
};

export default App;
