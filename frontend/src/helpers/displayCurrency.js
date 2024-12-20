const displayINRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-IN',{
        style : "currency",
        currency : 'ZMW',
        minimumFractionDigits : 2
    })

    return formatter.format(num)

}

export default displayINRCurrency