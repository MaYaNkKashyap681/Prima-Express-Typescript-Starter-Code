import express = require('express');
import { Request, Response } from 'express';
import Controller from 'globalInterfaces/controller.interface';

class App {
    //express App
    public app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.app.listen(3000, () => {
            console.log("Server is Strted on PORT 3000");
        });
    }

    private initializeMiddleware() {
        this.app.use(express.json());
        this.app.get('/', (req: Request, res: Response) => {
            res.send("Hello Server is Active");
        })
    }

    public getServer() {
        return this.app;
    }

    public initializeControllers(controllersList: Controller[]) {
        controllersList.map((item, index) => {
            this.app.use('/', item.route);
        })
    }
}

export default App;