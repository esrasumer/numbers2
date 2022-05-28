// Numbers

let val;

val = Number('45');
val = parseInt('52.5');
val = parseFloat('52.5');
// val = parseInt("a52a"); harf başa gelirse sayıya çevirilemez
val = isNaN('A19');
let num = 10.132453789;
val = num.toPrecision(2); // sayının ilk iki basamağını alır
val = num.toFixed(2); // virgülden sonra ilk iki basamağı yazar ** 10.13
val = Math.PI;
val = Math.round(2.4); // en yakın sayıya yuvarlar ** 3
val = Math.round(2.7); // en yakın sayıya yuvarlar ** 3
val = Math.ceil(2.1); // üstündeki sayıya yuvarlar ** 3
val = Math.floor(2.9); // altındaki sayıya yuvarlar ** 2
val = Math.sqrt(64); // karekökü alır ** 8
val = Math.abs(-3); // mutlak değeri alır ** 3
val = Math.pow(8, 2); // 8'in 2. kuvveti ** 64
val = Math.min(2, 3, 4, 5); // en küçük sayıyı alır ** 2
val = Math.max(2, 3, 4, 5); // en büyük sayıyı alır ** 5
val = Math.random(); // 0 ile 1 arasında sayı üretir
val = Math.random() * 20; // 0 ile 20 arasında sayı üretir
val = Math.floor(Math.random() * 100); // 0 ile 100 arasında sayı üretir

console.log(val);
console.log(typeof val);