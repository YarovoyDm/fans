export const useSessionStorage = (key: string) => {
    const setItemInSessionStorage = (value: unknown): void => {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    };

    const getItemFromSessionStorage = () => {
        const item = window.sessionStorage.getItem(key);

        return item ? JSON.parse(item) : undefined;
    };

    const removeItemFromSessionStorage = (): void => {
        window.sessionStorage.removeItem(key);
    };

    return {
        setItemInSessionStorage,
        getItemFromSessionStorage,
        removeItemFromSessionStorage,
    };
};
