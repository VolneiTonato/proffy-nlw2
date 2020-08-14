import { ValidationError } from 'yup';

interface ErrorProps {
    [key: string]: string;
}

export default function yupValidationErrors(err: ValidationError) {
    const validationErros: ErrorProps = {};

    if (!Array.isArray(err.inner)) return err;

    err.inner.forEach(error => {
        validationErros[error.path] = error.message;
    });

    return validationErros;
}
