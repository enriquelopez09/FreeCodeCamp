function palindrome(str) {
  var strMayus = str.toUpperCase();
  var arrayStr = strMayus.split("");
  var emptyStr = "";
  for(var i in arrayStr) {
    if(isLetter(arrayStr[i])) {
      emptyStr += arrayStr[i];
    }
  }
  var caracters = emptyStr.split("");
  var reverseStr = emptyStr.split("").reverse();
  var result = true;
  for(i in caracters) {
    if(caracters[i] != reverseStr[i]) {
      result=false;
    }
  }
  return result;
}
const isLetter = (caracter) => {
	let ascii = caracter.toUpperCase().charCodeAt(0);
	return ascii > 64 && ascii < 91 || ascii > 47 && ascii < 58;
};