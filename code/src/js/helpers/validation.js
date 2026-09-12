// validateEmail(Email)
// validatePassword(Password)
// validateUsername(Username)

/**
 * Überprüft eine E-Mail-Adresse.
 * @param {string} Email
 * @returns {boolean}
 */
export function validateEmail(Email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
}

/**
 * Überprüft ein Passwort.
 * Mindestens 8 Zeichen.
 * @param {string} Password
 * @returns {boolean}
 */
export function validatePassword(Password) {
  return typeof Password === "string" && Password.length >= 8;
}

/**
 * Überprüft einen Benutzernamen.
 * 3–20 Zeichen, Buchstaben, Zahlen und _ erlaubt.
 * @param {string} Username
 * @returns {boolean}
 */
export function validateUsername(Username) {
  return /^[a-zA-Z0-9_]{3,20}$/.test(Username);
}
