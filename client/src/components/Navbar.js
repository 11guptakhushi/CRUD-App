import {AppBar, Toolbar, makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
const useStyle = makeStyles({
    header: {
        background: 'black'
    },
    tabs: {
        color: 'white',
        textDecoration: 'none',
        marginRight: 20
    }
});

const Navbar = () => {
    const classes = useStyle();
    return(
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <NavLink className={classes.tabs} to='/' exact> CRUD App </NavLink>
                <NavLink className={classes.tabs} to='/allusers'> All Users </NavLink>
                <NavLink className={classes.tabs} to='/adduser'> Add User </NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;