export interface IUser {
    email: string;
    password: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
