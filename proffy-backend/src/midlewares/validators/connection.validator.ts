import { ValidationChain, query, body, check } from 'express-validator';

export const ValidateCreateConnection = (): ValidationChain[] => {

    return [
        body('user_id').notEmpty().customSanitizer((value, {req}) => {
            req.body.userId = value
        })
    ];
};



