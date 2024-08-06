function isAnagram(str1, str2) {

    
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false
      }

    let counter = new Map();
    for (let letter of str1) {
        if(!counter.has(letter))
            counter.set(letter, 1);
        else 
            counter.set(letter, counter.get(letter)+1)
        
    }

    for (let letter of str2) {

      if(!counter.has(letter))
            return false;
      if(counter.get(letter) < 0)
            return false;
      counter.set(letter, counter.get(letter)-1);

    }

    return true;
  }