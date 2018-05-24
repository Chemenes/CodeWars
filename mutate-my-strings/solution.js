function mutateMyStrings(stringOne, stringTwo) {

  let resultString = stringOne + "\n";
  let stringOneArr = [...stringOne];
  let stringTwoArr = [...stringTwo];
  //console.log(stringOneArr)
  for (i in stringOneArr) {
    console.log(i)
    if (stringOneArr[i] !== stringTwoArr[i]) {
      stringOneArr[i] = stringTwoArr[i]
      resultString += (stringOneArr.join('') + "\n")

    }
  }
  return resultString;
}