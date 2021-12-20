import './App.css';
import Form from './component.js/Form';
import { useGlobalContext } from './context'
import Login from './component.js/Login';
import Success from './component.js/Success';
import logo from './img/real logo.png'
import Signed from './component.js/Signed';
function App() {
  const{register,logged,signed} = useGlobalContext()
  return (
    <div className="App">
      <header>
        <img src={logo} alt='logo'></img>
      </header>
    <Login/>
    
    {register?
     <Form/>: null
    }
    {signed?
    <Signed/>:null}
     {logged?
     <Success/>:null
    }
    </div>
  );
}

export default App;
