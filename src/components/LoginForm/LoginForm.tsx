import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import { INPUT_EMAIL, INPUT_PASSWORD } from 'constants/inputNames';
import Button from '../UI/Button/Button';
import { useSessionStorage } from 'hooks/useSessionStorage';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const { setItemInSessionStorage } = useSessionStorage('user');
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState<{
        email: string;
        password: string;
    }>({
        email: '',
        password: '',
    });

    const onFormChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;

        setLoginForm({ ...loginForm, [name]: value });
    };

    const onSubmit = (e: React.FormEvent) => {
        // mock login request
        try {
            setTimeout(() => {
                setItemInSessionStorage(loginForm);
                navigate('/user');
            }, 2000);
            e.preventDefault();
        } catch {}
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.formTitle}>Login</div>
            <Input
                value={loginForm.email}
                name={INPUT_EMAIL}
                onChange={(e) => onFormChange(e)}
                placeholder="E-mail"
            />
            <Input
                value={loginForm.password}
                name={INPUT_PASSWORD}
                onChange={(e) => onFormChange(e)}
                placeholder="Password"
            />
            <Button text="Login" />
        </form>
    );
};

export default LoginForm;
