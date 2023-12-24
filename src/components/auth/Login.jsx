import  { useState } from 'react';
import { authenticate} from '../../services/PocketBaseService';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // Verwenden Sie die `authenticate`-Funktion, um sich einzuloggen
            const authData = await authenticate(email, password);
            navigate('/dashboard');
            console.log(authData);
            // Nach erfolgreicher Authentifizierung können Sie zum Beispiel den Nutzer auf die Hauptseite umleiten oder den Authentifizierungsstatus global über einen State-Management-Service zur Verfügung stellen.
        } catch (error) {
            console.error("Login failed: ", error);
            // Implementieren Sie die Fehlerbehandlung nach Ihren Anforderungen, z.B. eine Fehlermeldung anzeigen.
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 rounded-lg">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <form onSubmit={handleLogin}>
                    <div className="mt-4">
                        <label className="block" htmlFor="email">Email</label>
                        <input
                            type="text"
                            placeholder="Benutzername"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-baseline justify-between">
                        <button
                            type="submit"
                            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                        >
                            Login
                        </button>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;