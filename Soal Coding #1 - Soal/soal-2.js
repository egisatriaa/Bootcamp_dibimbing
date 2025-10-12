/**
 * counter "yes"
 *
 * input terminal adalah "yes" / "no"
 *
 * output adalah angka dari berapa kali jumlah "yes"
 *
 * tips: ini menggunakan infinity looping & break
 */
const prompt = require("prompt-sync")();
let flag = 0;

while (true) {
    // tulis code disini
    const input = prompt("continue (yes) / berhenti (no) ? ");
    if (input === "no") {
        break;
    } else {
        flag++;
    }
}
console.log(`Anda menginput "yes" sebanyak ${flag} kali`);
