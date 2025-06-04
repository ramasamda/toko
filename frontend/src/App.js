import Profile from './components/Profile'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Menu from './components/Menu';


function App() {
  return (
    <BrowserRouter>
    <Menu />
  </BrowserRouter>
  );
}

export default App;
