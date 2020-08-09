import { Request, Response, NextFunction } from 'express'
import CreateConnectionService, {ConnectionDTO} from '../services/default/CreateConnectionService'
import {getRepository} from 'typeorm'
import Connection from '../entities/Connection'
import AppError from '../utils/AppErrorUtils'



export default class ConnectionsController {

    async index(req: Request, res: Response, next: NextFunction) {

        try {
            const totalConnection = await getRepository(Connection).count()

            res.json({totalConnection})

        } catch (err) {
            next(new AppError(err, '400'))
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {

            const {body:data}: {body: ConnectionDTO} = req

            await new CreateConnectionService(data).execute()

            res.status(201).send()
        } catch (err) {
            next(new AppError(err, '400'))
        }

    }

}