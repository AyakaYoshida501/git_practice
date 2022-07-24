function onButtonClick(){
    //二つの入力された数字を取得
    let num1 = document.forms[0].elements[0].value;
    let num2 = document.forms[0].elements[2].value;
    
    //演算子の取得
    let operator = document.form1.operator;
    let index = operator.selectedIndex;
    let str = operator.options[index].value;
    
    //結果の取得
    let output = document.getElementById("output");

    //計算ができるのは、num1,num2が空欄じゃないとき
    //数字が入力してなかったらalertだしたいけど、時間がなくて...
    if(num1 !== "" && num2 !== ""){
        if(str === "add"){
            output.innerText = Number(num1) + Number(num2);
        }
        else if (str === "sub"){
            output.innerText = Number(num1) - Number(num2);
        }
        else if (str === "mul"){
            output.innerText = Number(num1) * Number(num2);
        }
        else if (str === "div"){
            output.innerText = Number(num1) / Number(num2);
        }
        else if (str === "power"){
            output.innerText = Number(num1)** Number(num2);
        }
        else if (str === "mod"){
            output.innerText = Number(num1) %  Number(num2);
        }
    }
}