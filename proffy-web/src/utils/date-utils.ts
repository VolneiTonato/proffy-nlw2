type DateFormatType = 'pt-BR' | 'en-US'

export default class DateUtils {

    static format(str: string, format: DateFormatType) {
        return Intl.DateTimeFormat(format).format(new Date(str))
    }

    static diasSemana() {
        return [
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'Terça-feria' },
            { value: '3', label: 'Quarta-feira' },
            { value: '4', label: 'Quinta-feira' },
            { value: '5', label: 'Sexta-feira' },
            { value: '6', label: 'Sábado' },]
    }
}