import "./App.css";
import PropTest from "./PropTest";
import Profile from "./Profile";

const App = () => {
  const name = "Anuska Shrestha";
  return (
    <div>
      <h2>Hello world;</h2>
      <Profile nameProps={name} />
      <PropTest />
    </div>
  );
};

export default App;
