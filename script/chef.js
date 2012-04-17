if (window.File) {
  // File APIに関する処理を記述
  window.alert("File APIが実装されてます。");
  document.getElementById("drop").addEventListener("drop", onDrop, false);
} else {
  window.alert("本ブラウザではFile APIが使えません");
}

// Drop領域にドロップした際のファイルのプロパティ情報読み取り処理
function onDrop(event){
  var files = event
    .dataTransfer
    .files;
  var disp = document.getElementById("disp");
  disp.innerHTML ="";

  // ファイルの配列から1つずつファイルを選択
  for(var i=0; i< files.length; i++){
    var f = files[i];
    // FileReaderオブジェクトの生成
    var reader = new FileReader();

      window.alert("start"+reader);
    // テキストファイルか判定
    if (!f.type.match('text.*')) {
      alert("テキストファイル以外は表示できません。");
      continue;
    }

    // エラー発生時の処理
    reader.onerror = function (evt) {
      disp.innerHTML = "読み取り時にエラーが発生しました。";
    }

    // テキストファイルの場合の処理
    if (f.type.match('text.*')) {
      // ファイル読取が完了した際に呼ばれる処理
      reader.onload = function (evt) {
        // FileReaderが取得したテキストをそのままdivタグに出力
        disp.innerHTML = reader.result;
      }
      // readAsTextメソッドでファイルの内容を取得
      reader.readAsText(f, 'utf-8');
    }
  }
  // ブラウザ上でファイルを展開する挙動を抑止
  event.preventDefault();
}

function onDragOver(event) {
  // ブラウザ上でファイルを展開する挙動を抑止
  event.preventDefault();
}
