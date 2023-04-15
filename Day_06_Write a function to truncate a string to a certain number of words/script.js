const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
    return str.split(' ').slice(0, wordLimit).join(' ')
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
