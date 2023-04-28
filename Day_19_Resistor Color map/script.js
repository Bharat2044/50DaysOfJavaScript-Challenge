// colorCode('blue') should return 6
// colorCode('white') should return 9


const TEST_CASE_1 = 'blue'
const TEST_CASE_2 = 'white'

const colorCode = (color) => {
    const colorMap = new Map()

    colorMap.set('Black', 0)
    colorMap.set('Brown', 1)
    colorMap.set('Red', 2)
    colorMap.set('Orange', 3)
    colorMap.set('Yellow', 4)
    colorMap.set('Green', 5)
    colorMap.set('Blue', 6)
    colorMap.set('Violet', 7)
    colorMap.set('Grey', 8)
    colorMap.set('White', 9)

    return colorMap.get(color.charAt(0).toUpperCase() + color.substr(1))
}

console.log(colorCode(TEST_CASE_1));
console.log(colorCode(TEST_CASE_2));