export function isStorageValid(token: string): boolean {
    return !!window.localStorage.getItem(token);
}