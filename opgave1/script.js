const encrypt = document.getElementById("encrypt");
const decrypt = document.getElementById("decrypt");
const plaintext = document.getElementById("plaintext");
const ciphertext = document.getElementById("ciphertext");
const alphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

encrypt.addEventListener('click', function() {
    shift(plaintext, ciphertext, -3);
});

decrypt.addEventListener('click', function() {
    shift(ciphertext, plaintext, 3);
});


function shift(start, finish, x) {
    let c = "";
    let t = start.value;
    for (let i = 0; i < t.length; i++) {
        if (t[i] == " " || !(alphabetArray.includes(t[i]))) {
            c += t[i];
        } else {
            let currentIndex = alphabetArray.indexOf(t[i]);
            let encryptedIndex = (currentIndex + (x) + alphabetArray.length) % alphabetArray.length;
            c += alphabetArray[encryptedIndex];
        }
    }
    finish.value = c;
}