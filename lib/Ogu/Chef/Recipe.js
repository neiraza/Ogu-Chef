function recipe(recipes){
  console.log("Recipe->recipe");
  if(recipes.length > 1){
    //ここの処理内容がよく分からん
    console.log(recipes.length);
  }
  recipeList['args']=recipes;
  console.log(recipeList['args']);
  console.log(recipeList);
  return recipeList;
}

function recipeCompile(recipes){
 console.log("Recipe->recioeCompile");
 console.log(recipes);
 for(var i = 0;i<recipes.length;i++){
   console.log("**** レシピの材料を読む会 ****\n");
   var ingredients = recipes[i]['ingredient'];
   console.log(ingredients);
   var arrIngredient = ingredients.split(/\n/);
   arrIngredient.splice(0, 1);
   for(var j=0;j<arrIngredient.length;j++){
     console.log(arrIngredient[j]);
     //ingredientを分類するわ
     var ingredient = arrIngredient[j];
     var value = ingredient.match(/\d+/);
     console.log("*** 含有量 ***\n");
     console.log(value);
     var measure_type = ingredient.match(measuresTypesRegex(MeasuresTypes));
     console.log(measure_type);
     var measure = ingredient.match(measuresRegex(Measures));
     console.log(measure);
   }
 }
}

var recipeList = {compiled:0, name:'', comments:'', ingredient:'', cooking_time:'',
temperature:"", method:'', serves:'', output:'', loops:{}, bowls:[], dishes:[], self:null, args:null};

