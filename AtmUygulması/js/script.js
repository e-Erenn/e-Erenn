/*
ATM UYGULMAMASI

1- Bakiye görüntüleme
2- Para çekme
3- Para yatırma
4- Çıkış
*/

// ilk önce kulanıcının bakiyesini belirlememiz gerekiyor
let bakiye = 1000;

let yenisatir = "\r\n"; //bir alt satıra geçebilmek için yenisatır adında değişken tanımlıyoruz

let metin = "1- Bakiye Görüntüleme"+yenisatir //yukarıda yorum satırı ile yazdıklarımı verip kullanıcıdan değer alabilmek için yaptım
+"2- Para çekme"+yenisatir
+"3- Para yatırma"+yenisatir
+"4- Çıkış"+yenisatir
+"Lütfen bir değer seçiniz";

// alert(metin);

let seçim = prompt(metin);
switch(seçim){
    case "1":
        alert("Bakiyeniz : " + bakiye)
        break;
        case "2":
        let cekilecektutar = Number( prompt("Çekmek istediğiniz tutar"));
        if(cekilecektutar<bakiye){
            bakiye = bakiye - cekilecektutar
            alert("İşleminiz başarılı"+yenisatir
            +"Kalan bakiyeniz : " + bakiye);
        }
        else{
            bakiye = cekilecektutar - bakiye
            alert("Çekmek istediğiniz tutar bakiyenizden fazla olmamalıdır"+ yenisatir
            +"Eksik Baliye : "+ bakiye);
            break;
        }

        case "3":
            let yatirilacaktutar = Number(prompt("Yatırılacak Tutarı Giriniz : "));
            bakiye = bakiye + yatirilacaktutar;
            alert("Güncel Bakiyeniz : " + bakiye);
            break;

            case "4":
                console.log("Sistemden Çıkış Ypılmıştır");
                break;
                default :
                alert("Lütfen 1 ile 4 arasında bir değer seçiniz")



}
