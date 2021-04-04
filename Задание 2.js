 functionnumber(x){
  
    let arr = [];
    for (let i = 0; i < x; i++){
    arr.push(+prompt("Введите число",""));
    }
    let max = Math.max(...arr);
    alert(max);
    
}
 
number(+prompt("Введите кол-во чисел", ""));