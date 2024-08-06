const runLengthEncoding = (string) => {

    let result = '';
    let count = 1;
  
    for (let i = 0; i < string.length; i++) {
      let j = i + 1;
      while (string[i] === string[j]) {
        count++;
        if (count === 9) {
          j++;
          break;
        } else {
          j++;
        }
      }
      result = result.concat(`${count}${string[i]}`);
      count = 1;
      i = j - 1;
    }
    return result;
  }
