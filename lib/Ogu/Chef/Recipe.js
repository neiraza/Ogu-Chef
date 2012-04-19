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

var recipeList = {compiled:0, name:'', comments:'', ingredient:'', cooking_time:'',
temperature:"", method:'', serves:'', output:'', loops:{}, bowls:[], dishes:[], self:null, args:null};
