import { validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import AppErrorUtils from '../../utils/AppErrorUtils';

const runValidationChain = async (
    validations: Array<ValidationChain | ValidationChain[]>,
    req: Request,
) => {
    for (const validate of validations) {
        if (Array.isArray(validate)) await runValidationChain(validate, req);
        else await validate.run(req);
    }

    return req;
};

export const ValidationMiddleware = (
    validations: Array<ValidationChain | ValidationChain[]>,
    ...rest: Array<ValidationChain | ValidationChain[]>
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (rest) validations = [...validations, ...rest];

            await runValidationChain(validations, req);

            const errors = validationResult(req);

            if (errors.isEmpty()) return next();

            const data = errors
                .array({ onlyFirstError: true })
                .map(({ msg, param }) => {
                    return `${param} ${msg}`;
                })
                .join(' - ');

            throw data;
        } catch (err) {
            return res
                .status(AppErrorUtils.status('400'))
                .json(new AppErrorUtils(String(err), '400'));
        }
    };
};
