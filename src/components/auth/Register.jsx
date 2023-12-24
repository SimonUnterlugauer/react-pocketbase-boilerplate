import { register} from '../../services/PocketBaseService';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
    const [generalErrorMessage, setGeneralErrorMessage] = useState('');

    // Funktion, die überprüft, ob die Passwörter übereinstimmen und mindestens 8 Zeichen lang sind
    const validatePasswords = () => {
        if (password !== passwordConfirm) {
            setErrorMessage('Die Passwörter stimmen nicht überein.');
            return false;
        }
        if (password.length < 8) {
            setErrorMessage('Das Passwort muss mindestens 8 Zeichen lang sein.');
            return false;
        }
        return true;
    };

    const handleRegistration = async (event) => {
        event.preventDefault();

        // Rufen Sie die validatePasswords Funktion auf, bevor Sie fortfahren
        if (!validatePasswords()) return;

        try {
            // Verwenden Sie die `authenticate`-Funktion, um sich einzuloggen
            await register(email, username ,password);
            navigate('/login');
            // Nach erfolgreicher Authentifizierung können Sie zum Beispiel den Nutzer auf die Hauptseite umleiten oder den Authentifizierungsstatus global über einen State-Management-Service zur Verfügung stellen.
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log("Fehler");
                setGeneralErrorMessage("Ein Benutzer mit der gleichen Email-Adresse existiert bereits.");
            } else {
                setGeneralErrorMessage("Ein Benutzer mit der gleichen Email-Adresse existiert bereits.");
            }
            // Implementieren Sie die Fehlerbehandlung nach Ihren Anforderungen, z.B. eine Fehlermeldung anzeigen.
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100 items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6" onSubmit={handleRegistration}>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Registrieren
            </h2>
            <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                E-Mail
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
                </label>
                <input
                type="username"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Passwort
                </label>
                <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                {/* Fehlermeldung für Passwort */}
                {password && password.length < 8 && (
                    <p className="text-red-500 text-xs italic">
                        Das Passwort muss mindestens 8 Zeichen lang sein.
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="password-confirm" className="text-sm font-medium text-gray-700">
                    Passwort bestätigen
                </label>
                <input
                    type="password"
                    id="password-confirm"
                    name="password-confirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                {passwordConfirm && password !== passwordConfirm && (
                    <p className="text-red-500 text-xs italic">
                        Die Passwörter stimmen nicht überein.
                    </p>
                )}
            </div>
            {errorMessage && (
                <p className="text-center text-red-500 text-xs italic">
                    {errorMessage}
                </p>
            )}
            {generalErrorMessage && (
                <div className="text-center text-red-500 text-xs italic">
                    {generalErrorMessage}
                </div>
            )}
            <div>
                <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white
                bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                Jetzt registrieren
                </button>
            </div>
            </form>
        </div>
        </div>
    );
    };

export default Register;