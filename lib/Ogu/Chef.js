function compile(){
  var code  = " \n\nHello World .\n\nMobile Game\nDevelopers Group. ";
  window.alert("Chef->compile\n"+code);
  var arr = _get_paragraphs(code);
  for (var i=0; i < arr.length; i++){
    window.alert("Chef->compile loop"+arr[i]);
  }
}

function execute(){
}

function dump(){
}

function _get_paragraphs(code){
  window.alert("Chef->_get_paragraphs\n"+code);
  code = code.replace(/^\s|^　|\s+$|　+$/g, "");
  window.alert("Chef->_get_paragraphs\n"+code);
  return code.split(/\n{2, }/);
}?

function _paragraphsToRecipes(){
}
