import './Navbar.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import withAuth from '../../HOC/withAuth';

function Navbar({
    auth,
}) {
    const { isAuthenticated } = auth;
    //const { isAuthenticated } = useAuthContext();

  return (
    <>
        <div className='nav'>
            <Link to="/" className="nav-link">
                <img src={logo} alt='logo' />
            </Link>
            <div className='nav-main'>
                <div className='nav-menu'>
                    <Link to="/catalog" className="nav-link">
                    Catalog
                    </Link>
                    {isAuthenticated
                        ? (
                            <div className='nav-menu'>
                                <Link to="/profile-details" className="nav-link">
                                Profile
                                </Link>
                                <Link to="/post-create" className="nav-link">
                                Create Post
                                </Link>
                                <Link to="/logout" className='nav-link'>
                                Logout
                                </Link>
                            </div>
                        )
                        : (
                            <div>
                                <Link to="/login-register" className='nav-link'>Login/Register</Link>
                            </div>
                        )
                    }       
                </div>              
            </div>
        </div>
    </>
  );
}

export default withAuth(Navbar);
