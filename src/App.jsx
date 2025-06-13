import Lanyard from "./components/reactbit/Lanyard/Lanyard.jsx";
function App() {
  return (
    <>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </>
  );
}

export default App;
