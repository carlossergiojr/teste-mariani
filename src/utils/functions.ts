export function extractNumbersFromString(inputString: string) {
  // Use a regular expression to match all numbers in the input string
  const numbersArray = inputString.match(/\d+/g)

  // Check if any numbers were found
  if (numbersArray) {
    // Join the numbers into a single string and return it
    return numbersArray.join('')
  } else {
    // If no numbers were found, return an empty string or any other appropriate value
    return ''
  }
}
