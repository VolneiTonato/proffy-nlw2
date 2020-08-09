import { ValidationChain, query, body, check } from 'express-validator';

export const ValidateClassesCreateUserClasseScheduleFilter = (): ValidationChain[] => {
    return [
        query('week_day').notEmpty().isNumeric(),
        query('subject')
            .notEmpty(),
        query('time')
            .notEmpty()
            .custom(value => {
                return /^[0-9]{1,2}:[0-9]{2}$/.test(value)
            })
    ];
};


export const ValidateClassesCreateUserClasseScheduleCreate = (): ValidationChain[] => {

    const validatorsSchedules = [
        body('schedules.*.week_day').notEmpty().isNumeric().withMessage('Dia da semana Obrigatório'),
        body('schedules.*.from').notEmpty()
            .custom(value => {
                return /^[0-9]{1,2}:[0-9]{2}$/.test(value)
            }).withMessage('Hora inicial Obrigatório'),

        body('schedules.*.to').notEmpty()
            .custom(value => {
                return /^[0-9]{1,2}:[0-9]{2}$/.test(value)
            }).withMessage('Hora final obrigatório'),
    ]


    return [
        body('name').notEmpty().isLength({ min: 5 }),
        body('avatar').notEmpty().isURL(),
        body('bio').notEmpty().isLength({ min: 10, max: 255 }),
        body('cost').notEmpty().isNumeric(),
        body('subject').notEmpty(),
        body('schedules').isArray().notEmpty().withMessage('Matéria obrigatória'),
        ...validatorsSchedules
    ];
};



