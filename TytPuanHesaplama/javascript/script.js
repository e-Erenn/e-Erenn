/*
TYT PUAN HESAPLAMA

1- Türkçe 40
2- Matematik 40
3- Sosyal Bilimler 20
4- Fen Bilimleri 20

-----> 100 puanı ösym veriyor
-----> okul puan max 60 veriyor
*/

let turkceDogru , turkceYanlıs = 0;
let matematikDogru , matematikYanlıs = 0;
let sosyalDogru , sosyalYanlıs = 0;
let fenDogru , fenYanlıs = 0;
let puan = 0;
let okulpuanı = 0;

let yenisatir = "\r\n";

let mesaj = "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz" + yenisatir
+"1- Puan Hesapla"+yenisatir
+"2- Çıkış Yap";

// alert(mesaj);

let secim = prompt(mesaj);

switch(secim){
    case "1":
        okulpuanı = Number(prompt("Okul Puanınızı Girinzi"));


        turkceDogru = Number(prompt("Türkçe Doğru Sayısı"));
        turkceYanlıs = Number(prompt("Türkçe Yanlış Sauısı"));
        matematikDogru = Number(prompt("Matematik Doğru Sayısı"));
        matematikYanlıs = Number(prompt("Mtematik Yanlış Sayısı"));
        sosyalDogru = Number(prompt("Sosyal Bilimler Doğru Sayısı"));
        sosyalYanlıs = Number(prompt("Sosyal Bilimler Yanlış Sayısı"));
        fenDogru = Number(prompt("Fen Bilimleri Doğru Sayısı"));
        fenYanlıs = Number(prompt("Fen Bilimleri Yanlış Sayısı"))
        
        let dogrusayısı = turkceDogru + matematikDogru+sosyalDogru+fenDogru;
        let yanlıssayısı = turkceYanlıs+matematikYanlıs+sosyalYanlıs+fenYanlıs;
        let kalandogrusayısı = dogrusayısı - (yanlıssayısı/4);
        puan = (kalandogrusayısı*4) + 100 + okulpuanı;
        alert("TYT Puanınız : "+ puan);2

        break;
        case 2:
            alert("Uygulamadan Başarlı Bir Şekilde Çıkış Yapıldı...");

            break;

            default :
            alert("Lütfen Geçerli Aralıklarda Değer Giriniz...");
            break;


}
