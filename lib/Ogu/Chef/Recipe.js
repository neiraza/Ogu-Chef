function recipe(recipes){
  console.log("Recipe->recipe");
  //TODO Perlだと分岐処理あったけど
  if(recipes.length > 1){
    console.log(recipes.length);
  }
  recipeList['args']=recipes;
  console.log(recipeList['args']);
  console.log(recipeList);
}

var recipeList = {compiled:0, name:'', comments:'', ingredient:'', cooking_time:'',
temperature:"", method:'', serves:'', output:'', loops:{}, bowls:[], dishes:[], self:null, args:null};
