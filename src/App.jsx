import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
  return (
    <div className="bg-icarus-1 flex-auto ">
      <Navbar />
      <Layout />
      <h1 className="text-2xl text-icarus-4">Hello World!{7 + 9}</h1>
    </div>
  );
};
export default App;
