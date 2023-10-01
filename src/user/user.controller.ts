import { Router, Request, Response, NextFunction } from "express";
import Controller from "globalInterfaces/controller.interface";
import { UserService } from "./user.service";
import { UserDTO } from "./user.interface";

class UserController implements Controller {
    public path: String = '/user'
    public route: Router = Router();
    private userservice = new UserService();
    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.route.get(`${this.path}/getAll`, this.getUser)
        this.route.post(`${this.path}/addUser`, this.addUser)
    }
    private getUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.userservice.getUser();
            res.send(response);
        }
        catch (err) {
            res.send("Error is There")
        }
    }

    private addUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email, jobRole } = req.body;
            const userObj = new UserDTO(name, email, jobRole);
            const response = await this.userservice.addUser(userObj);

            res.status(200).send(response);
        }
        catch (err) {
            res.send(err);
        }
    }
}

export default UserController;
