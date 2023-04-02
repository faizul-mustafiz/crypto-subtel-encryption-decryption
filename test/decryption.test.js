const {
  decryptMessage,
  decryptFormSingleEncryptedPayload,
} = require("../helpers/decrypt.helper");

messageDecryptionTest = async (sharedKey, sharedIv, encryptedMessage) => {
  if (sharedKey && sharedIv && encryptedMessage) {
    const decryptedMessage = await decryptMessage(
      sharedKey,
      sharedIv,
      encryptedMessage
    );
    console.log("messageDecryptionTest-decryptedMessage:", decryptedMessage);
  } else {
    console.log("Message decryption test was unsuccessful");
  }
};

messageDecryptionFromSingleEncryptedPayload = (payload) => {
  const { key, iv, message } = decryptFormSingleEncryptedPayload(payload);
  console.log("key:", key, "iv:", iv, "message:", message);
  messageDecryptionTest(key, iv, message);
};

const payload =
  "WWNKTHpYL3Vaazh5eEdta2JkbFF4czJMaHZBU1haSUx5ZGNWRlM4QUs4VT1zdWhtVWxCMThBSUxvVlRpRVR0OHY1Q2FWVEZIWC91NDRCZ0FjbFF0R3ZuVGRyMklKQjNCRENrR01oeG5GY0tTQlNmaXloYS9SdnNrRUpXaGNZbi81UT09";
messageDecryptionFromSingleEncryptedPayload(payload);

module.exports = {
  messageDecryptionTest,
  messageDecryptionFromSingleEncryptedPayload,
};
