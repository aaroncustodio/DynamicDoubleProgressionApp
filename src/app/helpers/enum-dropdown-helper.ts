// Used any type because there is no enum interface
export function generateEnumDropdownValues(enumType: any): Array<number> {
    return Object.values(enumType).filter(value => typeof value === 'number').map(x => Number(x));
}
