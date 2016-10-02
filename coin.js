function FindLargestCoinCombo(){
  var x = .92;
  var arr = [.25,.10,.05,.01];
  var a = 0;
  var v0 =0;
  var v1 =0;
  var v2 =0;
  var v3 =0;

  for(var i=0;i<4;i++){
    (vi) = Math.trunc(x/arr[i]);
    x = x-((vi)*arr[0]);
    console.log((vi));
  }

}

FindLargestCoinCombo();
