AES Message Encryptor
A web-based text encryption tool that uses AES encryption to secure messages, built with a colorful cyber-themed UI. Developed as part of an Information Security course project.
Features
🔐 Encrypt and decrypt text messages using AES
🎨 Colorful, cyber-themed responsive UI
🌐 Runs entirely in the browser — no server or backend needed
🔑 Password-based encryption key
📋 Copy encrypted/decrypted output easily
Tech Stack
HTML5 / CSS3 — UI and cyber-themed styling
JavaScript — application logic
CryptoJS — AES encryption/decryption implementation
How It Works
User types a message and enters a secret key/password.
On clicking Encrypt, CryptoJS uses AES to encrypt the message with the provided key, producing ciphertext.
The ciphertext can be shared safely.
On the receiving end, entering the same key and clicking Decrypt recovers the original message.
Installation & Usage
Bash
Open index.html directly in a browser — no build tools or dependencies to install.
Security Notes
Encryption/decryption happens entirely client-side; messages and keys are never sent anywhere.
The strength of encryption depends on the secret key used — use strong, unique keys.
This project is for educational/demonstration purposes and shows practical understanding of symmetric cryptography.
