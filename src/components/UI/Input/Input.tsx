import styles from './Input.module.scss';

interface IInput {
    placeholder?: string;
    name?: string;
    value: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, name, value, onChange }: IInput) => {
    return (
        <input
            className={styles.input}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
