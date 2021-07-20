import { useEffect, useState } from "react";
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {  /*material-ui formula to apply style on each child of this parent*/ 
            fontSize: 20,
            background: 'black',
            color: 'white'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const AllUsers = () => {
    const [users, setUser] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllusers();
    },[])

    const getAllusers = async() => {
        const response = await getUsers();
        console.log(response.data);
        setUser(response.data);
    }
    
const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllusers();
}

    return(
    (users===[]) ? 
        (<div style={{marginTop: 10, textAlign: 'center'}}>
            <h1>There is no user in database</h1>
            <Button color='primary' variant='contained' component={Link} to='/adduser'>Add User</Button>
        </div>) : 
        (<Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user._id}</TableCell> 
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} startIcon={<EditIcon />} component={Link} to={`/edituser/${user._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" startIcon={<DeleteIcon />} onClick={() => deleteUserData(user._id)}>Delete</Button> 
                        </TableCell>
                    </TableRow>)
                )}
            </TableBody>
        </Table>)
    );
}

export default AllUsers;