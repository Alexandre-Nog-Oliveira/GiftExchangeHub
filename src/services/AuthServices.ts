import { getToday } from "../utils/getTody"

export const validatePassword = (passwrod: string) : boolean =>{
    const currentPassword = getToday().split('/').join('');
    return passwrod === currentPassword
}

export const createToken = () => {
    const currentPassword = getToday().split('/').join('');
    return `${process.env.DEFAULT_TOKEN}${currentPassword}`
}

export const valideToken = (token: String) => {
    const currentToken = createToken();
    return token === currentToken;
}