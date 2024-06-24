import { useRoutes } from 'react-router-dom';
import './App.css';
import { routes } from './Routes';
function AllRoutes({path}){
  let element = useRoutes(path);
  return element;
}
function App() {
  return (
<AllRoutes path={routes()}/>
  );
}

export default App;
