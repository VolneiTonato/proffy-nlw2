type FormatNumberProps = 'pt-BR' | 'en-US'

export default class NumberUtils{

    static formatDecimal(
        props : {value: number, format: FormatNumberProps, digits: 2}
    ){
        return new Intl.NumberFormat(props.format, { 
            maximumSignificantDigits: props.digits 
        }).format(props.value)
    }
}