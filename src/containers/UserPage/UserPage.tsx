import User from 'components/User/User';

import styles from './UserPage.module.scss';

const UserPage = () => {
    return (
        <div className={styles.user}>
            <User />
        </div>
    );
};

export default UserPage;
