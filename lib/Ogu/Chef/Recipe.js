document.write("<script type='text/javascript' src='../import.js'><\/script>");
function new(recipes){
  window.alert("new");
  console.log("Recipe->new");
  //TODO Perlだと分岐処理あったけど
  recipeList['args']=recipes;
  console.log(recipeList['args']);
}

var recipeList = {compiled:0, name:'', comments:'', ingredient:'', cooking_time:'',
temperature:"", method:'', serves:'', output:'', loops:{}, bowls:[], dishes:[], self:null, args:null};
