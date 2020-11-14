export const range = (start, end) => {
    return [...Array(end).keys()].map(k => k + 1);
}