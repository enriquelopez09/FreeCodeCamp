function telephoneCheck(str) {
  var regularExp = /^[1]{0,1}[\s]{0,1}(([(]{1}[0-9]{3}[)]{1})|([0-9]{3}))[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/;
  return regularExp.test(str);
}

telephoneCheck("555-555-5555");