function vigenereEncrypt(plainText, key) {
  let encryptedText = "";
  for (let i = 0, j = 0; i < plainText.length; i++) {
    let currentLetter = plainText[i];
    if (currentLetter.match(/[a-z]/i)) {
      let upper = currentLetter === currentLetter.toUpperCase();
      let letterPosition = upper
        ? currentLetter.charCodeAt(0) - "A".charCodeAt(0)
        : currentLetter.charCodeAt(0) - "a".charCodeAt(0);
      let shift =
        key[j % key.length].toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
      encryptedText += String.fromCharCode(
        ((letterPosition + shift) % 26) +
          (upper ? "A".charCodeAt(0) : "a".charCodeAt(0))
      );
      j++;
    } else {
      encryptedText += currentLetter;
    }
  }
  return encryptedText;
}

function vigenereDecrypt(encryptedText, key) {
  let decryptedText = "";
  for (let i = 0, j = 0; i < encryptedText.length; i++) {
    let currentLetter = encryptedText[i];
    if (currentLetter.match(/[a-z]/i)) {
      let upper = currentLetter === currentLetter.toUpperCase();
      let letterPosition = upper
        ? currentLetter.charCodeAt(0) - "A".charCodeAt(0)
        : currentLetter.charCodeAt(0) - "a".charCodeAt(0);
      let shift =
        key[j % key.length].toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
      decryptedText += String.fromCharCode(
        ((letterPosition - shift + 26) % 26) +
          (upper ? "A".charCodeAt(0) : "a".charCodeAt(0))
      );
      j++;
    } else {
      decryptedText += currentLetter;
    }
  }
  return decryptedText;
}

document.getElementById("encrypt").addEventListener("click", function () {
  const plainText = document.getElementById("plaintext").value;
  const key = document.getElementById("key").value;
  document.getElementById("encrypted").value = vigenereEncrypt(plainText, key);
});

document.getElementById("decrypt").addEventListener("click", function () {
  const encryptedText = document.getElementById("encrypted").value;
  const key = document.getElementById("key").value;
  document.getElementById("decrypted").value = vigenereDecrypt(
    encryptedText,
    key
  );
});
