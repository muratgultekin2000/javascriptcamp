//2.hafta ödevleri
//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 

function asalBul(...numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
        
        let asal=0;
        for (let j = 2; j < numbers[i]; j++) {
            if(numbers[i]%j==0){asal++}
        }
        if(asal==0){console.log(numbers[i]+" sayısı asal sayıdır.")}
        else       {console.log(numbers[i]+" sayısı asal sayı değildir.")}
    }
}
asalBul(25,55,13,11)

//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

function arkadasSayi(sayi1,sayi2) {
    let toplam1=0;let toplam2=0;
    for (let i= 0; i < sayi1; i++) {
        if(sayi1%i==0){ toplam1+=i} 
    }
    for (let i= 0; i < sayi2; i++) {
        if(sayi2%i==0){ toplam2+=i} 
    }
    if(sayi1==toplam2 && sayi2==toplam1){
        console.log(sayi1+" : "+sayi2+"  Sayıları kardeş sayılardır")
    }
    else{console.log(sayi1+" : "+sayi2+"  Sayıları kardeş sayılar değildir.")}
}
arkadasSayi(11,22)

// 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function binMukemmelSayi() {
    
    for (let i = 1; i < 1000; i++) {
        let toplam=0;
        for (let j = 1; j < i; j++) {
            if(i%j==0){toplam+=j}
            
        }

        if(toplam==i){console.log(i+ " sayısı mükemmel sayıdır.")}
        
    }
    
}
binMukemmelSayi();
//son