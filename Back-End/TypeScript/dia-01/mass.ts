const simbolsMassa = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function converts(value: number, UB: string, UC: string): number {
    const fromIndex = simbolsMassa.indexOf(UB);
    const toIndex = simbolsMassa.indexOf(UC);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent)
}