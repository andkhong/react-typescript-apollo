export function isEmailValid(email: string): boolean {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
};

export function isPasswordValid(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/;
    return regex.test(password);
};

export function isFirstNameValid(name: string): boolean {
    const regex = /^[a-zA-Z]*[-\s]*[a-zA-Z]*$/;
    return regex.test(name);
};

export function isLastNameValid(name: string): boolean {
    const regex = /^[a-zA-Z]*[-\s]*[a-zA-Z]*$/;
    return regex.test(name);
};
