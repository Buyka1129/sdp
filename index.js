function isNumberKey(evt) {
    var i = 0
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
      return false;
    return true;
  }