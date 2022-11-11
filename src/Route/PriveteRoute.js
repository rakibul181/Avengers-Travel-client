import { useContext } from 'react';
import { FaSpider} from 'react-icons/fa';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PriveteRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return (<button type="button" disabled>
         <FaSpider></FaSpider>
        Loading...
      </button>)
    }

    if (!user) {
        return <Navigate to={'/signin'} state={{ from: location }} replace ></Navigate>
    }
    return children
};

export default PriveteRoute;