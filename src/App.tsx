import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage/LoginPage';
import UserPage from './containers/UserPage/UserPage';
import { UserContext } from './context/UserContext';
import { useSessionStorage } from './hooks/useSessionStorage';

const App = () => {
    const { getItemFromSessionStorage } = useSessionStorage('user');
    const [userData] = useState(() => {
        return getItemFromSessionStorage();
    });

    //TODO: create a private/public routes to prevent using /login route when user is logged in

    return (
        <div className="App">
            <UserContext.Provider value={userData}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/user" element={<UserPage />} />
                </Routes>
            </UserContext.Provider>
        </div>
    );
};

export default App;
