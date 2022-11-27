
import  { ReactNode} from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute  = ({children}: {children: ReactNode}) => {
    const navigate = useNavigate()
    const {isAuthenticated} = useAuth();
    if(typeof isAuthenticated !== "boolean"){
      return null;
    }
    if(!isAuthenticated){
        navigate('/auth/login/');
        return null;
    }
  return <>{children}</>
}

export default ProtectedRoute