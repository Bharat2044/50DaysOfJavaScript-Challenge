const str = 'XeroX';

function getTheGapX(str) {
    const firstIndex = str.indexOf('X')

    if(firstIndex === -1)
        return -1

    const lastIndex = str.lastIndexOf('X')

    return lastIndex - firstIndex
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)