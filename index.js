/* 1) Функція повертатиме часовий період між цими датами */
console.log('Task 1')

function durationBetweenDates(startDate = '01 Jan 2023', endDate = new Date(Date.now()), timeDimension = 'days') {
    let result;

    let start = Date.parse(startDate)
    let end = Date.parse(endDate)

    let dateDifference = end - start;

    if (dateDifference < 0) { dateDifference = dateDifference * -1 }

    if (timeDimension === 'seconds') {
        result = dateDifference / 1000;
        return `${Math.floor(result)} seconds`
    }
    if (timeDimension === 'minutes') {
        result = dateDifference / 1000 / 60;
        return `${Math.floor(result)} minutes`
    }
    if (timeDimension === 'hours') {
        result = dateDifference / 1000 / 60 / 60;
        return `${Math.floor(result)} hours`
    }
    if (timeDimension === 'days') {
        result = dateDifference / 1000 / 60 / 60 / 24;
        return `${Math.floor(result)} days`

    }
}
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'))
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'))
console.log(durationBetweenDates())
console.log(durationBetweenDates('05 Aug 1985', '03 Aug 1985', 'seconds'))





/* 2) Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.*/
console.log('Task 2')

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};


function optimizer(data) {
    dataClone = JSON.parse(JSON.stringify(data));
    dataCloneFormatted = Object.fromEntries(Object.entries(dataClone).map(([key, value]) => [key.toLocaleLowerCase(), Number(value).toFixed(2)])
    );
    return dataCloneFormatted;
};

let updatedPriceData = optimizer(priceData);
console.log(priceData)
console.log(updatedPriceData)
// я чуть не вбилась об стіну поки не розібралась чесно, так приємно було розібратись нарешті





/* 3) Задача про рекурсію та ітерацію */
console.log('Task 3')

function recursiveOddSumTo(number) {
    if (number <= 0) {
        return 0
    } else if (number % 2 == 0) {
        return recursiveOddSumTo(number - 1)
    } else {
        return number + recursiveOddSumTo(number - 1)
    }
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

/* три дні без шуток сиділа і в мене нічого не виходило, і тут шось клацнуло і усе запрацювало і я безмежно рада але дивлячись зараз на цей код він такий простий аж обідно що я одразу не додумалась :(  */

function iterativeOddSumTo(number) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            result += i
        }
    }
    return result
};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25

