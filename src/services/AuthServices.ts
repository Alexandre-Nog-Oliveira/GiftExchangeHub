import { date } from "zod"

export const validatePassword = (passord: string) : boolean =>{
    const currentPassword = Intl.DateTimeFormat('pt-br').format(new Date())

    return true
}

export const createToken = () => {

}