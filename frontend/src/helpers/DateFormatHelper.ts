export const getLocaleDateTime = (date: string | Date) => {
    return (
        new Date(date).toLocaleDateString() +
        ', ' +
        new Date(date).toLocaleTimeString()
    );
};