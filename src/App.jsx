import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="bg-icarus-1 flex-auto text-2xl text-icarus-4">
      <Navbar />
      <h1>Hello World!{7 + 9}</h1>
    </div>
  );
};
export default App;
