import { Request, Response, NextFunction } from 'express';
import SubjectCreateService from '@services/default/CreateSubjectService';
import Subject from '@entities/Subject';
import { getRepository } from 'typeorm';
import AppError from '../utils/AppErrorUtils';

export default class SubjectsController {
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const subjects = await getRepository(Subject).find();
            res.json(subjects);
        } catch (err) {
            next(new AppError(err, '400'));
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { subject }: { subject: string } = req.body;

            await new SubjectCreateService({ subject }).execute();
            res.status(201).send();
        } catch (err) {
            next(new AppError(err, '400'));
        }
    }
}
