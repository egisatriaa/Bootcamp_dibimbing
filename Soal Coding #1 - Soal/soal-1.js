// menghitung selisih dari jumlah bilangan ganjil dan jumlah bilangan genap
function differentOddEven(arrNumber) {
    // tulis code disini

    let jumlahGanjil = 0;
    let jumlahGenap = 0;

    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] % 2 === 0) {
            jumlahGenap += arrNumber[i]; // Tambahkan angka genap
        } else {
            jumlahGanjil += arrNumber[i]; // Tambahkan angka ganjil
        }
    }
    return Math.abs(jumlahGanjil - jumlahGenap);
}

let data = [1, 4, 4, 3, 2, 7, 8, 12, 13, 1, 6, 9]; // ganjil = 34 & genap = 36
let different = differentOddEven(data);
console.log(different); // 2
