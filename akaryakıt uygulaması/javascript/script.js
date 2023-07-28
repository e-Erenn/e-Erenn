let dizel = 35.30 , benzin = 36.04 , lpg = 14.00;
const yenisatır = "\r\n";
const YakıtMetni = "1-dize"+yenisatır
+"2-benzin"+yenisatır
+"3-lpg"+yenisatır
+"yakıt türünüzü seçiniz"

let yakıtTipi = prompt(YakıtMetni);
let yakıtLitresi = Number (prompt("yakıt litresini giriniz"));
let bakiye = Number  (prompt("bakiyenizi giriniz"));

if(yakıtTipi=="1"){
    //dizel
    let odenecekTutar = dizel*yakıtLitresi
    if(odenecekTutar<=bakiye){
        //bakiye yeterli
        alert("Tebrikler, yakıt alma işlemi başarılı" + yenisatır
        + "Kalan Bakiye : " + (bakiye - odenecekTutar));
    }
    else{
        //bakiye yeteli değil
        alert("Bakiyeniz yeterli değildir" + yenisatır
        + "odenecek tutar:" + odenecekTutar + yenisatır + "Bakiye : " + bakiye + "Eksik Bakiye" + (odenecekTutar-bakiye));
    }
} else if(yakıtTipi=="2"){
    //benzin
    let odenecekTutar = benzin*yakıtLitresi
    if(odenecekTutar<=bakiye){
        //bakiye yeterli
        alert("Tebrikler, yakıt alma işlemi başarılı" + yenisatır
        + "Kalan Bakiye : " + (bakiye - odenecekTutar));
    }
    else{
        //bakiye yeteli değil
        alert("Bakiyeniz yeterli değildir" + yenisatır
        + "odenecek tutar:" + odenecekTutar + yenisatır + "Bakiye : " + bakiye + "Eksik Bakiye" + (odenecekTutar-bakiye));
    }
} else if(yakıtTipi=="3"){
    //lpg
    let odenecekTutar = lpg*yakıtLitresi
    if(odenecekTutar<=bakiye){
        //bakiye yeterli
        alert("Tebrikler, yakıt alma işlemi başarılı" + yenisatır
        + "Kalan Bakiye : " + (bakiye - odenecekTutar));
    }
    else{
        //bakiye yeteli değil
        alert("Bakiyeniz yeterli değildir" + yenisatır
        + "odenecek tutar:" + odenecekTutar + yenisatır + "Bakiye : " + bakiye + "Eksik Bakiye" + (odenecekTutar-bakiye));
    }
} else{
    alert("lütfen geçerli bir yakıt türü seçiniz");
}
