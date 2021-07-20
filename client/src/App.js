import Navbar from './components/Navbar';
import CRUD from './components/CRUD';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NotFound from './components/NotFound'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={CRUD}/>
          <Route path='/allusers' component={AllUsers}/>
          <Route path='/adduser' component={AddUser}/>
          <Route path='/edituser/:id' component={EditUser}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
