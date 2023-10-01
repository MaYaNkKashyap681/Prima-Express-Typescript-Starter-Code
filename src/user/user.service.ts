import db from '../db/index'
import { UserDTO } from "./user.interface";

export class UserService {
    constructor() {

    }
    public getUser = async () => {
        try {
            const usersList = await db.user.findMany();
            return {
                data: usersList,
                error: false,
                msg: 'Successful Request'
            }
        }
        catch (err) {
            throw err;
        }
    }

    public addUser = async (userdata: UserDTO) => {
        try {
            const user = await db.user.create({
                data: userdata
            })

            return {
                data: user,
                error: false,
                msg: 'successful request'
            }
        }
        catch (err) {
            throw (err)
        }
    }

}

