function highlight(strings, ...expr){

    let str = "";
    let highlightedExpr = expr.map((el) => `<strong>${el}</strong>`);
     
    strings.forEach((string, i) => {
        str += string + (highlightedExpr[i] || '');
      });

      return str;
}