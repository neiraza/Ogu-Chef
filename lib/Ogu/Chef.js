function compile(){
  console.log("Chef->compile");
  var code  = " \n\nHello World Souffle.\n\nThis recipe prints the immortal words \"Hello wold!\", \nin a basically brute force way.\n\nIngredients.\n72 g haricot beans\n101 eggs\n\nMethod.\nPut potatoes into the mixing bowl.\n\nServes 1.\n\nCaramel Sauce.\n\nIngredients.\n1 cup with sugar\n\nMethod.\nFold white sugar into mixiing bowl.\n\n ";
  console.log(code);
  var arrCode = _get_paragraphs(code);
  console.log("**** arrCode ****\n");
  console.log(arrCode);
  var recipes = _paragraphsToRecipes(arrCode);
  console.log("**** recipes ****\n");
  console.log(recipes);
  var new_recipes = {};
  for(var i = 0;i < recipes.length;i++){
    var recipe = recipes[i];
    if(i==0){
      recipe['type']='main';
    }else{
      recipe['type']='sub';
    }
    var recipe_name = recipe['name'];
    new_recipes[recipe_name]=recipe;
  }
  console.log("**** new recipes ****\n");
  console.log(new_recipes);
  return new_recipes;
}

function execute(){
  console.log("Chef->execute()\n");
}

function dump(){
}

function _get_paragraphs(code){
  console.log("Chef->_get_paragraphs");
  code = code.replace(/^\s|^　|\s+$|　+$/g, "");
  return code.split(/\n{2,}/);
}

function _paragraphsToRecipes(arrCode){
  console.log("**** _paragraphsToRecipes ****\n");
  for (var i=0; i < arrCode.length; i++){
    var tmp = arrCode[i].replace(/\n$/, "");
    arrCode[i]=tmp;
  }
  console.log("**** arrCode ****\n");
  console.log(arrCode);

  var recipes = new Array();
  var recipesIndex = 0;

  for (var i=0; i < arrCode.length; i++){
    var recipe_name = null;
    var comments = null;
    var ingredient = null;
    var cooking_time = null;
    var temperature = null;
    var method = null;
    var serves = null;
    var type = null;

    console.log("お客さん、今日はまわしますよ\n");
    console.log(arrCode);
    var code = arrCode[i];
    console.log("**** code<recipe_name> ****\n");
    console.log(code);
    console.log("**** index ****\n");
    console.log(i);
    if(code==null || code==""){
      continue;
    }

    //recipe name
    if(!recipe_name && i<arrCode.length && code.match(/^[ ]*([\-\w][\- \w]*)\.[ ]*$/g)){
      recipe_name = code;
      i++;
      code = arrCode[i];
    }

    //comments & ingredient
    if(!comments && i<arrCode.length && !code.match(/^[ ]*Ingredients\.[ ]*\n/)){
      comments = code;
      i++;
      code = arrCode[i];
    }
    if(!ingredient && i<arrCode.length && code.match(/^[ ]*Ingredients\.[ ]*\n/)){
      ingredient = code;
      i++;
      code = arrCode[i];
    }

    //cooking time
    if(!cooking_time && i<arrCode.length && code.match(/^[ ]*Cooking time:[ ]*(\d+)(?: hours?| minutes?)\.[ ]*$/)){
      cooking_time = code;
      i++;
      code = arrCode[i];
    }

    //temperature
    if(!temperature && i<arrCode.length && code.match(/^[ ]*Pre-heat oven to (\d+) degrees Celsius(?: gas mark (\d+))?\.[ ]*$/)){
      temperature = code;
      i++;
      code = arrCode[i];
    }

    //method
    if(!method && i<arrCode.length && code.match(/^[ ]*Method\.[ ]*\n/)){
      method = code;
      i++;
      code = arrCode[i];
    }

    //serves
    if(!serves && code.match(/^[ ]*Serves (\d+)\.[ ]*$/)){
      serves = code;
    }

    var recipeHash = {name:recipe_name==null?'':recipe_name, comments:comments==null?'':comments,
      ingredient:ingredient==null?'':ingredient, cooking_time:cooking_time==null?'':cooking_time,
      temperature:temperature==null?'':temperature, method:method==null?'':method,
      serves:serves==null?'':serves, type:null};

    console.log("**** recipeHash ****\n");
    console.log(recipeHash);

    recipes[recipesIndex]=recipeHash;
    console.log("**** recipes ****\n");
    console.log(recipes);
    recipesIndex++;
    console.log("**** recipesIndex ****\n");
    console.log(recipesIndex);
    recipe(recipes);

    //clear
    //argsClear(recipe_name,  comments,  ingredient,  cooking_time, temperature, method);
  }
  return recipes;
}

