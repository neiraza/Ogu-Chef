function compile(){
  console.log("Chef->compile");
  var code  = " \n\nHello World Souffle.\n\nThis recipe prints the immortal words \"Hello wold!\", \nin a basically brute force way.\n\nIngredients.\n72 g haricot beans\n101 eggs\n\nMethod.\nPut potatoes into the mixing bowl.\n\nServes 1.\n\n ";
  console.log(code);
  var arrCode = _get_paragraphs(code);
  return _paragraphsToRecipes(arrCode);
}

function execute(){
}

function dump(){
}

function _get_paragraphs(code){
  console.log("Chef->_get_paragraphs");
  code = code.replace(/^\s|^　|\s+$|　+$/g, "");
  return code.split(/\n{2,}/);
}

function _paragraphsToRecipes(arrCode){
  console.log("_paragraphsToRecipes");
  for (var i=0; i < arrCode.length; i++){
    var tmp = arrCode[i].replace(/\n$/, "");
    arrCode[i]=tmp;
  }

  var recipe_name = null;
  var comments = null;
  var ingredient = null;
  var cooking_time = null;
  var temperature = null;
  var method = null;
  var serves = null;

  var recipes = new Array();
  var recipesIndex = 0;

  for (var i=0; i < arrCode.length; i++){
    var code = arrCode[i];
    //recipe name
    if(!recipe_name && code.match(/^[ ]*([\-\w][\- \w]*)\.[ ]*$/g)){
      recipe_name = code;
      continue;
    }
    //comments & ingredient
    if(!comments && !code.match(/^[ ]*Ingredients\.[ ]*\n/)){
      comments = code;
      continue;
    }
    if(!ingredient && code.match(/^[ ]*Ingredients\.[ ]*\n/)){
      ingredient = code;
      continue;
    }
    //cooking time
    if(!cooking_time && code.match(/^[ ]*Cooking time:[ ]*(\d+)(?: hours?| minutes?)\.[ ]*$/)){
      cooking_time = code;
      continue;
    }
    //temperature
    if(!temperature && code.match(/^[ ]*Pre-heat oven to (\d+) degrees Celsius(?: gas mark (\d+))?\.[ ]*$/)){
      temperature = code;
      continue;
    }
    //method
    if(!method && code.match(/^[ ]*Method\.[ ]*\n/)){
      method = code;
      continue;
    }
    //serves
    if(!serves && code.match(/^[ ]*Serves (\d+)\.[ ]*$/)){
      serves = code;
    }

    var recipeHash = {name:recipe_name==null?'':recipe_name, comments:comments==null?'':comments,
      ingredient:ingredient==null?'':ingredient, cooking_time:cooking_time==null?'':cooking_time,
      temperature:temperature==null?'':temperature, method:method==null?'':method,
      serves:serves==null?'':serves};
    console.log(recipeHash);

    recipes[recipesIndex]=recipeHash;
    console.log(recipes);
    recipesIndex++;
    console.log(recipesIndex);
    recipe(recipes);

    //clear
    _argsClear(recipe_name,  comments,  ingredient,  cooking_time, temperature, method);
  }
  return recipes;
}

function _argsClear(recipe_name,  comments,  ingredient,  cooking_time, temperature, method){
  recipe_name = null;
  comments = null;
  ingredient = null;
  cooking_time = null;
  temperature = null;
  method = null;
  serves = null;
}

