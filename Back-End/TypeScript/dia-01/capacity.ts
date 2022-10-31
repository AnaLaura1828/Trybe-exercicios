const simbolsCapacity= ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convert(value: number, UB: string, UC: string): number{
    const fromIndex = simbolsCapacity.indexOf(UB);
    const toIndex = simbolsCapacity.indexOf(UC);
    const result = (toIndex - fromIndex);

    return value * Math.pow(10, result);
}