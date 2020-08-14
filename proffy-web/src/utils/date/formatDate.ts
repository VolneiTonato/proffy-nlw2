type DateFormatType = 'pt-BR' | 'en-US';

export default function formatDate(str: string, format: DateFormatType) {
    return Intl.DateTimeFormat(format).format(new Date(str));
}
