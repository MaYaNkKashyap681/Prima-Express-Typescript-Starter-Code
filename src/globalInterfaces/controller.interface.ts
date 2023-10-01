import {Router} from 'express'

interface Controller {
    path: String
    route: Router
}

export default Controller