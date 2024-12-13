import "./App.css";
import PropTest from "./PropTest";
import Profile from "./Profile";

const App = () => {
  const name = "Anuska Shrestha";
  const bio = " I love coding and creatig digital art";
  return (
    <div>
      <h2>Hello world;</h2>
      <Profile nameProps={name} bio={bio} />
      <PropTest />
    </div>
  );
};

export default App;
