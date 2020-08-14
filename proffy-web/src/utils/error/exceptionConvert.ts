export const errorExceptionConvert = (error: any) => {
    const newError = String(error);
    if (/Error: /.test(newError)) {
        return newError.replace(/Error: /gi, '');
    }
    return newError;
};

export const errorResponseAxios = (err: any) => {
    if (err?.response?.data)
        if (Array.isArray(err.response.data)) {
            throw new Error(
                err?.response?.data
                    ?.map((error: { message: string }) => error.message)
                    .join('|'),
            );
        } else {
            throw new Error(err.response.data?.message || String(err));
        }
    throw new Error(err);
};
