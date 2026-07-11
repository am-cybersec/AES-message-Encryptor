const msg = document.getElementById('msg');
const key = document.getElementById('key');
const out = document.getElementById('out');
const status = document.getElementById('status');

function setStatus(text, isError) {
  status.textContent = text;
  status.className = 'status ' + (isError ? 'error' : 'success');
}

document.getElementById('encBtn').addEventListener('click', () => {
  if (!msg.value || !key.value) {
    setStatus('Message and key both required.', true);
    return;
  }
  try {
    const encrypted = CryptoJS.AES.encrypt(msg.value, key.value).toString();
    out.value = encrypted;
    setStatus('Message encrypted successfully.', false);
  } catch (e) {
    setStatus('Encryption failed.', true);
  }
});

document.getElementById('decBtn').addEventListener('click', () => {
  if (!msg.value || !key.value) {
    setStatus(' Add both Encrypted text and key ', true);
    return;
  }
  try {
    const bytes = CryptoJS.AES.decrypt(msg.value, key.value);
    const plain = bytes.toString(CryptoJS.enc.Utf8);
    if (!plain) throw new Error('Decryption produced empty result');
    out.value = plain;
    setStatus('Message decrypted successfully.', false);
  } catch (e) {
    setStatus('Wrong key or invalid encrypted text.', true);
  }
});
