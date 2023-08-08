let a = [2,6]
let b = [24, 36]

function getTotalX(a, b) {
    const maxA = Math.max(...a);
    const minB = Math.min(...b);
    let count = 0;

    for (let num = maxA; num <= minB; num++) {
        let isFactorOfB = b.every(val => val % num === 0);
        let isFactorOfA = a.every(val => num % val === 0);
        
        if (isFactorOfA && isFactorOfB) {
        count++;
        }
    }

    return count;
}

console.log(getTotalX(a, b))