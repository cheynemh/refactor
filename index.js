// A number is interesting if it is has atleast 2 of the following:
// prime,
// ends in 1 or 5,
// sum of digits is a multiple of 10,
// all digits are multiples of 3 or 5

const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

const sumTen = (n) => {
    let sum = 0;

    while (n > 0) {
        const r = n % 10;
        n = (n - r) / 10;
        sum += r;
    }
    return !(sum % 10);
};

const endsInOneOrFive = (n) => {
    if (n % 10 === 1 || n % 10 === 5) {
        return true;
    }
};

const multiplesFiveOrThree = (n) => {
    const stringified = n.toString();
    for (let i = 0; i < stringified.length; ++i) {
        if (+stringified[i] % 3 === 0 || +stringified[i] % 5 === 0) {
            continue;
        } else {
            multiplesFiveOrThree = false;
            break;
        }
    }

    // let stringified = n.toString();
    // if (
    //     stringified.length - (1 % 3) === 0 ||
    //     stringified.length - (1 % 5) === 0
    // ) {
    //     return true;
    // } else {
    //     return false;
    // }

    // all digits are multiples of 3 or 5
    // for loop to go through n

    // let sum = 0;
    // for (i = 3; i < n; i++) {
    //     // check if a multiple of 3 or 5
    //     if (i % 3 === 0 || i % 5 === 0) {
    //         // return true if matches check
    //         multiplesFiveOrThree = true;
    //     }
    //     return multiplesFiveOrThree;
    // }

    // -- harrison's while loop --
    // while (n > 0) {
    //     let digit = n % 10;
    //     if (digit % 10 === 3 || digit % 10 === 5) {
    //         return true;
    //     }
    //     n = (n - digit) / 10;
    //     console.log("n", n);
    // }
    // return false;
};

const isInteresting = (n) => {
    // prime
    // for (let i = n - 1; i > 1; --i) {
    //     if (n % i === 0) {
    //         isPrime = false;
    //         break;
    //     }
    // }

    // -- sumTen
    // let sum = 0;
    // let stringified = n.toString();
    // for (let i = 0; i < stringified.length; ++i) {
    //     sum += parseInt(stringified[i]);
    // }
    // if (sum % 10 === 0) sumTen = true;

    // endsInOneOrFive

    // if (n % 10 === 1 || n % 10 === 5) {
    //     endsInOneOrFive = true;
    // }

    // -- multiplesFiveOrThree
    // for (let i = 0; i < stringified.length; ++i) {
    //     if (+stringified[i] % 3 === 0 || +stringified[i] % 5 === 0) {
    //         continue;
    //     } else {
    //         multiplesFiveOrThree = false;
    //         break;
    //     }
    // }

    // let count = 0;

    // if (isPrime) count += 1;
    // if (sumTen) count += 1;
    // if (endsInOneOrFive) count += 1;
    // if (multiplesFiveOrThree) count += 1;

    // truthy = 1
    // let count = isPrime,
    //     sumTen,
    //     endsInOneOrFive,
    //     multiplesFiveOrThree;
    let count =
        isPrime(n) + sumTen(n) + endsInOneOrFive(n) + multiplesFiveOrThree(n);

    console.log(
        "isPrime: ",
        isPrime,
        "\n",
        "sumTen: ",
        sumTen,
        "\n",
        "endsInOneOrFive: ",
        endsInOneOrFive,
        "\n",
        "multiplesFiveOrThree: ",
        multiplesFiveOrThree
    );
    console.log("COUNT: ", count);

    if (count > 1) {
        return `${n} is interesting!`;
    } else if (count > 0) {
        return `${n} is okay...`;
    } else {
        return `${n} is booooooring`;
    }
};

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", () => {
    let input = document.querySelector("#numberInput");
    let value = parseInt(input.value);
    let interesting = isInteresting(value);

    let output = document.querySelector("#output");
    output.innerText = interesting;
});

const primeButton = document.querySelector("#primeButton");
primeButton.addEventListener("click", () => {
    const input = document.querySelector("#primeInput");
    let n = parseInt(input.value);
    // let isPrime = isPrime(n);

    const output = document.querySelector("#primeOutput");
    if (isPrime(n)) {
        output.innerHTML = n + " is prime!";
    } else {
        output.innerHTML = n + " is not prime! :(";
    }
});
