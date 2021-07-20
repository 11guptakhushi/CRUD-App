import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
const CRUD = () => {
    return(
        <div style={{textAlign: 'center'}}>
            <h3> Welcome to My Web Application</h3>
            <h1>This Application is created to perfom <u>CRUD</u> (Create, Read, Update, Delete) operation using <u>MERN</u>  stack</h1>
            <Button variant='contained' color='primary' component={Link} to='/allusers'>Get Started</Button>
        </div>
    );
}

export default CRUD;