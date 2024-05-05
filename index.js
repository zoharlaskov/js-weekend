// Ex1.1 - Yes or No
function boolToWord(value) {
  return value ? "Yes" : "No";
}

// Ex2.1 - Sum of Lowest Numbers
function sumTwoSmallestNumbers(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0] + sortedNumbers[1];
}

// Ex2.2 - Binary to Integer
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(""), 2);
}

// Ex2.3 - Find the Next Perfect Square
function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  if (sqrt !== Math.floor(sqrt)) {
    return -1;
  }
  const nextSqrt = sqrt + 1;
  return Math.pow(nextSqrt, 2);
}

// Ex2.4 - Find Unique
function findUniq(arr) {
  const counts = {};
  arr.forEach((num) => (counts[num] = (counts[num] || 0) + 1));
  for (const key in counts) {
    if (counts[key] === 1) {
      return parseFloat(key);
    }
  }
}

// Ex2.5 - Summation
function summation(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

// Ex2.6 - Years and Centuries
function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

// Ex2.7 - Basic Math
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      throw new Error("Invalid operation");
  }
}

// Ex3.1 - Growth Of Population
function nbYear(p0, percent, aug, p) {
  let years = 0;
  let population = p0;
  while (population < p) {
    population += population * (percent / 100) + aug;
    years++;
  }
  return years;
}

// Ex3.2 - People on the Bus
function peopleOnBus(busStops) {
  let people = 0;
  busStops.forEach(([on, off]) => {
    people += on;
    people -= off;
  });
  return people;
}

// Ex4.1 - Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

// Ex4.2 - Tribonacci
function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  }
  if (n < 3) {
    return signature.slice(0, n);
  }
  const result = signature.slice();
  for (let i = 3; i < n; i++) {
    const next = result.slice(-3).reduce((acc, val) => acc + val, 0);
    result.push(next);
  }
  return result;
}

// Ex5.1 - Trimming String
function removeChar(s) {
  return s.slice(1, -1);
}

// Ex5.2 - String Repeat
function repeatStr(count, src) {
  return src.repeat(count);
}

// Ex5.3 - To Camel Case
function toCamelCase(text) {
  const words = text.split(/[-_]/);
  const firstWord = words.shift();
  const capitalized = words.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  return [firstWord].concat(capitalized).join("");
}

// Ex5.4 - To Weird Case
function toWeirdCase(string) {
  const words = string.split(" ");
  return words
    .map((word) =>
      word
        .split("")
        .map((char, idx) =>
          idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

// Ex5.5 - Abbreviate Two Words
function abbrevName(name) {
  const parts = name.split(" ");
  return `${parts[0][0].toUpperCase()}.${parts[1][0].toUpperCase()}`;
}

// Ex5.6 - Mask
function maskify(cc) {
  const length = cc.length;
  return length > 4 ? "#".repeat(length - 4) + cc.slice(-4) : cc;
}

// Ex5.7 - Shortest Word Length
function findShortestWordLength(s) {
  const words = s.split(" ");
  return words.reduce((min, word) => Math.min(min, word.length), Infinity);
}

// Ex5.8 - Longest Word
function findLongestWord(s) {
  const words = s.split(" ");
  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
}
