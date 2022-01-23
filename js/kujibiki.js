

var items = ["大当たり", "ハズレ", "2等", "3等", "4等", "5等"];      //結果の配列
    var btn = document.getElementById('btn');　　　　　　　　　　　　//btnを変数化して扱えるようにする
    var results = document.getElementById('results');　　　　　　　//結果の表示を変数化し取り出せるようにする
    var number =0;　　　　　　　　　　　　　　　　　　　　　　　　　　　　//変数の初期化

    btn.addEventListener("click", function(){　　　　　　　　　　　　//btnを押した時に関数を実行
        var number = Math.floor(Math.random()* items.length);　　//配列の番号をランダムに取り出す
        results.innerHTML = items[number];   　　　　　　　　　　　//itemsの番号を取り出すし、resultsに表示させる
    });



