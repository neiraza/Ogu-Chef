function compile(){
  var code  = " \n\nHello World Souffle.\n\nThis recipe prints the immortal words \"Hello wold!\", \nin a basically brute force way.\n\nIngredients.\n72 g haricot beans\n101 eggs\n\nMethod.\nPut potatoes into the mixing bowl.\n\nServes 1.\n\n ";
  window.alert("Chef->compile\ncode="+code);
  var arrCode = _get_paragraphs(code);
  for (var i=0; i < arrCode.length; i++){
    window.alert("Chef->compile arrCode["+i+"]="+arrCode[i]);
  }
  return _paragraphsToRecipes(arrCode);
}

function execute(){
}

function dump(){
}

function _get_paragraphs(code){
  window.alert("Chef->_get_paragraphs\ncode="+code);
  code = code.replace(/^\s|^　|\s+$|　+$/g, "");
  window.alert("Chef->_get_paragraphs\ncode="+code);
  return code.split(/\n{2,}/);
}

function _paragraphsToRecipes(arrCode){
  for (var i=0; i < arrCode.length; i++){
    window.alert("Chef->_ arrCode["+i+"]="+arrCode[i]);
    var tmp = arrCode[i].replace(/\n$/, "");
    arrCode[i]=tmp;
    window.alert("Chef->_ arrCode["+i+"]="+arrCode[i]);
  }

  var recipe_name = null;
  var comments = null;
  var ingredient = null;
  var cooking_time = null;
  var temperature = null;
  var method = null;
  var serves = null;

  for (var i=0; i < arrCode.length; i++){
    var code = arrCode[i];
    window.alert("Chef->_ "+code);
    //recipe name
    if(!recipe_name && code.match(/^[ ]*([\-\w][\- \w]*)\.[ ]*$/g)){
      recipe_name = code;
      window.alert("Chef->_recipe_name="+recipe_name);
      continue;
    }
    //comments & ingredient
    if(!comments && !code.match(/^[ ]*Ingredients\.[ ]*\n/)){
      comments = code;
      window.alert("Chef->_comments="+comments);
      continue;
    }
    if(!ingredient && code.match(/^[ ]*Ingredients\.[ ]*\n/)){
      ingredient = code;
      window.alert("Chef->_ingredient="+ingredient);
      continue;
    }
    //cooking time
    if(!cooking_time && code.match(/^[ ]*Cooking time:[ ]*(\d+)(?: hours?| minutes?)\.[ ]*$/)){
      cooking_time = code;
      window.alert("Chef->_ cooking_time="+cooking_time);
      continue;
    }
    //temperature
    if(!temperature && code.match(/^[ ]*Pre-heat oven to (\d+) degrees Celsius(?: gas mark (\d+))?\.[ ]*$/)){
      temperature = code;
      window.alert("Chef->_ temperature="+temperature);
      continue;
    }
    //method
    if(!method && code.match(/^[ ]*Method\.[ ]*\n/)){
      method = code;
      window.alert("Chef->_ method="+method);
      continue;
    }
    //serves
    if(!serves && code.match(/^[ ]*Serves (\d+)\.[ ]*$/)){
      serves = code;
      window.alert("Chef->_ serves="+serves);
      continue;
    }
  }
  //recipes.
  var recipes = {name:recipe_name==null?"":recipe_name, comments:comments==null?"":comments,
  ingredient:ingredient==null?"":ingredient, cooking_time:cooking_time==null?"":cooking_time,
  temperature:temperature==null?"":temperature, method:method==null?"":method,
  serves:serves==null?"":serves};
  //TODO debug
  for(var key in recipes){
    window.alert(recipes[key]);
  }
  return recipes;
}
