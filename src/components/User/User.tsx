import { useUserContext } from 'context/UserContext';

import styles from './User.module.scss';

const User = () => {
    const user = useUserContext();

    return (
        <div className={styles.userInfo}>
            <div className={styles.email}>{user.email}</div>
            <div>{user.password}</div>
        </div>
    );
};

export default User;
