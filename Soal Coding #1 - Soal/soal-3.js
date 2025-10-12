/**
 * Penjumlahan
 *
 * Ketentuan:
 * - jika input adalah angka, maka jumlahkan dengan angka-angka sebelumnya
 * - jika input bukan angka, misal "=" atau apapun itu, outputkan hasil penjumlahannya
 *
 * tips: dapat menggunakan regular expression (regex) untuk mengecek apakah input adalah angka
 * if( input.match(/^\d+$/) ) { ... }
 */

const prompt = require("prompt-sync")();

let jumlah = 0; // inisialisasi total penjumlahan

while (true) {
    const input = prompt("input ? ");

    // cek apakah input adalah angka menggunakan regex
    if (input.match(/^\d+$/)) {
        // ubah string ke number dan tambahkan ke total
        jumlah += Number(input);
    } else {
        // kalau bukan angka (misal "="), hentikan loop
        console.log(`invalid input`);
        break;
    }
}

console.log(`jumlah = ${jumlah}`);
