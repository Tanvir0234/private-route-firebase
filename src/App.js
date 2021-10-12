
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipping from './Components/Shipping/Shipping';
import Payment  from './Components/Payment/Payment';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';


function App() {
   
  return (
    <div>
       <AuthProvider>
      <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route exact path="/home">
           <Home></Home>
        </Route>
        <PrivateRoute exact path="/shipping">
           <Shipping></Shipping>
        </PrivateRoute>
        <Route exact path="/payment">
           <Payment></Payment>
        </Route>
       
       
        <Route exact path="/logout">
        <Logout></Logout>
     </Route>
        
        <Route exact path="/login">
           <Login></Login>
        </Route>
        
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>

  );
}

export default App;
