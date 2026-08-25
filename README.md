
A web-based text encryption tool that uses AES encryption to secure messages, built with a colorful cyber-themed UI. Developed as part of an Information Security course project.

## Features

- 🔐 Encrypt and decrypt text messages using AES
- 🎨 Colorful, cyber-themed responsive UI
- 🌐 Runs entirely in the browser — no server or backend needed
- 🔑 Password-based encryption key
- 📋 Copy encrypted/decrypted output easily

## Tech Stack

- **HTML5 / CSS3** — UI and cyber-themed styling
- **JavaScript** — application logic
- **CryptoJS** — AES encryption/decryption implementation

## How It Works

1. User types a message and enters a secret key/password.
2. On clicking **Encrypt**, CryptoJS uses AES to encrypt the message with the provided key, producing ciphertext.
3. The ciphertext can be shared safely.
4. On the receiving end, entering the same key and clicking **Decrypt** recovers the original message.

