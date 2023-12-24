// src/components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PropTypes from 'prop-types';

function ProtectedRoute({ children }) {
    const { user } = useAuth();
    
    if (!user) {
        // Wenn kein Nutzer angemeldet ist, leite zur Login-Seite um
        return <Navigate to="/login" replace />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default ProtectedRoute;