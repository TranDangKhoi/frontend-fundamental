import "./App.scss";
import useRouters from "./routers/useRouters";

function App() {
  const routers = useRouters();
  return <>{routers}</>;
}

export default App;
