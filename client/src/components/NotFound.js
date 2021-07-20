import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
const NotFound = () => {
    return(
        <div style={{textAlign: 'center'}}>
            <h2>Oops! <span> Error 404 </span></h2>
            <h3>Page Not Found.</h3>
            <Button variant='contained' color='primary' component={Link} to='/'>Go Back</Button>
        </div>
    );
}

export default NotFound;