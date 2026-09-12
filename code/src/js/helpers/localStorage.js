// saveLocalStorageItem(key, value) = Save
// loadLocalStorageItem(key, defaultValue) = Load
// removeLocalStorageItem(key) = Clear

/**
 * Speichert einen Wert im localStorage (wird automatisch als JSON serialisiert).
 * @param {string} key - Der Schlüssel, unter dem gespeichert wird.
 * @param {*} value - Der zu speichernde Wert (Objekt, Array, String, etc.).
 * @returns {boolean} true bei Erfolg, false bei Fehler.
 */
export function saveLocalStorageItem(key, value) {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return true;
  } catch (err) {
    console.error(`Fehler beim Speichern von "${key}" in localStorage:`, err);
    return false;
  }
}

/**
 * Lädt einen Wert aus dem localStorage (wird automatisch aus JSON geparst).
 * @param {string} key - Der Schlüssel, dessen Wert geladen werden soll.
 * @param {*} [defaultValue=null] - Fallback-Wert, falls Schlüssel nicht existiert oder Fehler auftritt.
 * @returns {*} Der geladene Wert oder defaultValue.
 */
export function loadLocalStorageItem(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    return JSON.parse(item);
  } catch (err) {
    console.error(`Fehler beim Laden von "${key}" aus localStorage:`, err);
    return defaultValue;
  }
}

/**
 * Entfernt einen Eintrag aus dem localStorage.
 * @param {string} key - Der zu entfernende Schlüssel.
 * @returns {boolean} true bei Erfolg, false bei Fehler.
 */
export function removeLocalStorageItem(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (err) {
    console.error(`Fehler beim Entfernen von "${key}" aus localStorage:`, err);
    return false;
  }
}
