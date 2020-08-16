import { ValidationChain, body } from 'express-validator';

export const ValidateCreate = (): ValidationChain[] => {
    return [body('subject').notEmpty()];
};
