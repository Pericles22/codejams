const player = {
    equipment: [
        'sword'
    ]
}

const equipment = {
    sword: {
        name: 'sword',
        stats: {
            attack: 5
        },
        type: 'melee',
        possibleUpgrades: ['awesome sword']
    },
    awesome_sword: {
        name: 'awesome sword'
    }
}

Array(10).fill() // generate array of 10 undefineds

Array.map // returns map, you get to fill it with whatever you want, but it will be the same length as the initial array
Array.find // finds one specific thing that matches criteria, returns by itself
Array.filter // find all things that match criteria, return in array
Array.forEach // runs code for everything in the array

Object.keys(equipment).forEach(function(key) {
    console.log(equipment[key])
})

function findMelee() {
    Object.keys(equipment).filter(key => equipment[key].type === 'melee') 
    
    /* returns [{
        name: 'sword',
        stats: {
            attack: 5
        },
        type: 'melee',
        possibleUpgrades: ['awesome sword']
    }] */
}

[1,2,3,4,5,6].filter(function(num) {return isPrime(num)}) [1,2,3,5]
