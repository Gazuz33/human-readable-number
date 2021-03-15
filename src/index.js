module.exports = function toReadable (number) {
    
  if (number === 0) {
    return 'zero'
  }
  if (number === 1) {
    return 'one'
  }
  if (number === 2) {
    return 'two'
  }
  if (number === 3) {
    return 'three'
  }
  if (number === 4) {
    return 'four'
  }
  if (number === 5) {
    return 'five'
  }
  if (number === 6) {
    return 'six'
  }
  if (number === 7) {
    return 'seven'
  }
  if (number === 8) {
    return 'eight'
  }
  if (number === 9) {
    return 'nine'
  }
  if (number === 10) {
    return 'ten'
  }
  if (number === 11) {
    return 'eleven'
  }
  if (number === 12) {
    return 'twelve'
  }
  if (number === 13) {
    return 'thirteen'
  }
  if (number === 14) {
    return 'fourteen'
  }
  if (number === 15) {
    return 'fifteen'
  }
  if (number === 16) {
    return 'sixteen'
  }
  if (number === 17) {
    return 'seventeen'
  }
  if (number ===18) {
    return 'eighteen'
  }
  if (number === 19) {
    return 'nineteen'
  }
  if (number > 19 && number < 100) {
    return tens(number)
  }
  if (number > 99) {
    return hundreds(number)
  }
}

function hundreds(number) {
  var numberInArray = number.toString().split('').map(n => Number.parseInt(n))
  var countHundreds = numberInArray[0]
  var countTens = numberInArray[1]
  var countOnes = numberInArray[2]
  var end = ''
  if (countTens === 1) {
    if (countOnes === 0) {
      end = ' ' +  'ten'
    }
    if (countOnes === 1) {
      end = ' ' +  'eleven'
    }
    if (countOnes === 2) {
      end = ' ' +  'twelve'
    }
    if (countOnes === 3) {
      end = ' ' +  'thirteen'
    }
    if (countOnes === 4) {
      end = ' ' +  'fourteen'
    }
    if (countOnes === 5) {
      end = ' ' +  'fifteen'
    }
    if (countOnes === 6) {
      end = ' ' +  'sixteen'
    }
    if (countOnes === 7) {
      end = ' ' +  'seventeen'
    }
    if (countOnes ===8) {
      end = ' ' +  'eighteen'
    }
    if (countOnes === 9) {
      end = ' ' +  'nineteen'
    }
  }
  else if (countTens > 1) {
    end = ' ' + tens(countTens * 10 + countOnes)
  } else if (countOnes) {
    end = ' ' +  ones(countOnes)
  }

  if (number >= 100 && number <= 999) {
    return ones(countHundreds) + ' hundred' + end
  }
}

function tens(n) {
  let anyOnes = ones(n)
  if (anyOnes) {
    anyOnes = ' ' + anyOnes
  }
  if (n >= 20 && n <= 29) {
    return 'twenty' + anyOnes
  }
  if (n >= 30 && n <= 39) {
    return 'thirty' + anyOnes
  }
  if (n >= 40 && n <= 49) {
    return 'forty' + anyOnes
  }
  if (n >= 50 && n <= 59) {
    return 'fifty' + anyOnes
  }
  if (n >= 60 && n <= 69) {
    return 'sixty' + anyOnes
  }
  if (n >= 70 && n <= 79) {
    return 'seventy' + anyOnes
  }
  if (n >= 80 && n <= 89) {
    return 'eighty' + anyOnes
  }
  if (n >= 90 && n <= 99) {
    return 'ninety' + anyOnes
  }
}

function ones(number) {
  if (number % 10 === 0) {
    return ''
  }
  if (number % 10 === 1) {
    return 'one'
  }
  if (number % 10 === 2) {
    return 'two'
  }
  if (number % 10 === 3) {
    return 'three'
  }
  if (number % 10 === 4) {
    return 'four'
  }
  if (number % 10 === 5) {
    return 'five'
  }
  if (number % 10 === 6) {
    return 'six'
  }
  if (number % 10 === 7) {
    return 'seven'
  }
  if (number % 10 === 8) {
    return 'eight'
  }
  if (number % 10 === 9) {
    return 'nine'
  }
}

