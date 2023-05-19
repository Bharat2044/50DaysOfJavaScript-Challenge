// function timeToMixJuice(name) should return asked values
// function limesToCut(wedgesNeeded, limes) should return asked values
// function remainingOrders(timeLeft, orders) should return asked values



const timeToMixJuice = (name) => {
    switch (name){
        case 'Pure Strawberry Joy':
            return 0.5

        case 'Energizer':
        case 'Green Garden':
            return  1.5;

        case 'Tropical Island':
            return 3;

        case 'All or Nothing':
            return 5;

        default:
            return 2.5;
    }
}

const limesToCut = (wedgesNeeded, limes) => {
    let totalWedgesReceived = 0;

    for(let i=0; i<=limes.length; i++){
        if(limes[i] === 'small') 
            totalWedgesReceived += 6;
        else if(limes[i] === 'medium') 
            totalWedgesReceived += 8;
        else if(limes[i] === 'large') 
            totalWedgesReceived += 10;

        if(totalWedgesReceived >= wedgesNeeded) 
            return (i+1);
    }

    return limes.length;
}

const remainingOrders = (timeLeft, orders) => {
    let i = 0;

    while (i<orders.length){
        timeLeft -= timeToMixJuice(orders[i]);
        if(timeLeft <= 0) 
            break;
        i++;
    }

    if(i<orders.length) return orders.slice(i+1);

    return [];
}

console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']));