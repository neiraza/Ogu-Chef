var MeasuresTypes = {heaped:'dry', level:'dry'};
var Measures = {g:'dry', kg:'dry', pinch:'dry', pinches:'dry', ml:'liquid',
  l:'liquid', dash:'liquid', dashes:'liquid', cup:'', cups:'', teaspoon:'',
  teaspoons:'', tablespoon:'', tablespoons:''};

var measuresTypesRegex = function (MeasuresTypes){
  var regex = '';
  for(keys in MeasuresTypes){
    regex += keys;
    regex += '|';
  }
  regex = regex.slice(0,  regex.length-1);
  return regex;
}

var measuresRegex = function (Measures){
  var regex = '';
  for(keys in Measures){
    regex += keys;
    regex += '|';
  }
  regex = regex.slice(0,  regex.length-1);
  return regex;
}

