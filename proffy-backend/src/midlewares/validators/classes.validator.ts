import { ValidationChain, query, body } from 'express-validator';
import numberUtils from '@utils/NumberUtils';

export const ValidateClassesCreateUserClasseScheduleFilter = (): ValidationChain[] => {
    return [
        query('week_day').notEmpty().isNumeric(),
        query('subject').notEmpty().isUUID(4),
        query('time')
            .notEmpty()
            .custom(value => {
                return /^[0-9]{1,2}:[0-9]{2}$/.test(value);
            }),
    ];
};

export const ValidateClassesCreateUserClasseScheduleCreate = (): ValidationChain[] => {
    const validatorsSchedules = [
        body('schedules.*.week_day')
            .notEmpty()
            .isNumeric()
            .withMessage('Dia da semana Obrigatório'),
        body('schedules.*.from')
            .notEmpty()
            .custom(value => {
                return /^[0-9]{1,2}:[0-9]{2}$/.test(value);
            })
            .withMessage('Hora inicial Obrigatório'),

        body('schedules.*.to')
            .notEmpty()
            .custom(value => {
                return /^[0-9]{1,2}:[0-9]{2}$/.test(value);
            })
            .withMessage('Hora final obrigatório'),
    ];

    return [
        body('name').notEmpty().isLength({ min: 5 }),
        body('avatar').notEmpty().isURL(),
        body('whatsapp')
            .notEmpty()
            .customSanitizer(value => {
                const number = numberUtils.onlyNumber(value);

                if (!Number(number)) throw new Error(`whatsapp obrigatório`);

                return number;
            }),
        body('bio').notEmpty().isLength({ min: 10, max: 255 }),
        body('cost')
            .notEmpty()
            .customSanitizer(value => {
                const newValue = numberUtils.currencyBRLToDouble(value);

                if (!Number(newValue)) throw new Error(`cost inválido!`);

                return newValue;
            }),
        body('subject').notEmpty().isUUID(4),
        body('schedules')
            .isArray()
            .notEmpty()
            .withMessage('Horários obrigatório'),
        ...validatorsSchedules,
    ];
};
