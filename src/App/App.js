
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contacto from './pages/contacto';
import Inicio from './pages/inicio';
import Login from './pages/login';
import Nosotros from './pages/nosotros';
import Productos from './pages/productos';


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Inicio}/>
        <Route path='/nosotros' exact component={Nosotros}/>
        <Route path='/productos' exact component={Productos}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/contacto' exact component={Contacto}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
