
function indexOfSecondOccurrence(string) {
    let firstOccurrence = string.indexOf('zip');
    if (firstOccurrence === -1) {
      return -1;
    }
    
    let secondOccurrence = string.indexOf('zip', firstOccurrence + 1);
    if (secondOccurrence === -1) {
      return -1;
    }
  
    return secondOccurrence;
  }
  
  // Test della funzione
  let testString1 = 'zippityzipzip';
  let testString2 = 'zippity zip zip';
  let testString3 = 'zippityzippityzip';
  
  console.log(indexOfSecondOccurrence(testString1)); // 8
  console.log(indexOfSecondOccurrence(testString2)); // 12
  console.log(indexOfSecondOccurrence(testString3)); // 12