import { Request, Response, NextFunction } from 'express'
import CreateUserClassesSchedule, { UserClasseScheduleDTO } from '../services/custom-default/CreateUserClassesSchedule'
import ListClassesSchedule, {QueryDTO} from '../services/custom-default/ListClassesSchedule'
import AppError from '../utils/AppErrorUtils'
import { getRepository } from 'typeorm'
import Classe from '../entities/Classe'



export default class ClassesController {

    async index(req: Request, res: Response, next: NextFunction) {
        
        try{
            const filtro:QueryDTO = req.query as any

            const classes = await new ListClassesSchedule(filtro).execute()

            res.json(classes)

        }catch(err){
            next(new AppError(err, '400'))
        }
    }

    async showAll(req: Request, res: Response, next: NextFunction) {
        
        try{
            const classes = await getRepository(Classe).find({select: ['id', 'subject']})

            res.json(classes)

        }catch(err){
            next(new AppError(err, '400'))
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {

            const { body: data }: { body: UserClasseScheduleDTO } = req

            const response = await new CreateUserClassesSchedule(data).execute()

            res.status(201).send()
        } catch (err) {
            next(new AppError(err, '400'))
        }

    }

}