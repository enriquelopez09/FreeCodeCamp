function rot13(str) {
  	var alphabet={1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G",8:"H",9:"I",10:"J",
  				11:"K",12:"L",13:"M",14:"N",15:"O",16:"P",17:"Q",18:"R",19:"S",
                20:"T",21:"U",22:"V",23:"W",24:"X",25:"Y",26:"Z"};
 	var caracters=str.split("");
  	var res='';
  	var k=0;
  	for(var i in caracters) {
    	if(isLetter(caracters[i])){
        	for(var j in alphabet){
            	if(caracters[i]==alphabet[j]){
                	k=parseInt(j)+13;
                    if(k>26){
        				res+=alphabet[k-26];
      				}else{
        				res+=alphabet[k];
      				}
                }
            }
    	}else{
      		res+=caracters[i];
    	}
    }
  	return res;
}

const isLetter = (caracter) => {
	let ascii = caracter.toUpperCase().charCodeAt(0);
	return ascii > 64 && ascii < 91;
};
rot13("SERR PBQR PNZC");