const simbols = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

export function convert(value: number, UB: string, UC: string): number{
    const fromIndex = simbols.indexOf(UB); // pegamos o index da unidade base no array
    const toIndex = simbols.indexOf(UC); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}