import { createContext, useContext } from 'react';

export const UserContext = createContext<
    { email: string; password: string } | undefined
>(undefined);

export const useUserContext = () => {
    const user = useContext(UserContext);

    if (user === undefined) {
        throw new Error('useUserContext must be used with a UserContext');
    }

    return user;
};
