/**
 * Removes item of type `T` from existing `array`, otherwise adds item or creates an array of a single item
 *
 * * ATTENTION: O(n)
 */
export const toggleArrayItem = <T>(array: T[] | undefined, value: T): T[] => {
  const copyArr = array ? array.slice() : [];
  const i = array ? array.indexOf(value) : -1;
  i === -1 ? copyArr.push(value) : copyArr.splice(i, 1);
  return copyArr;
};

/**
 * Checks if a Date string is expired, considering 10 seconds margin to prevent RTT inconsistencies
 * @param expirationDate RFC2822 or ISO8601 formats
 */
export const isDateExpired = function (expirationDate: string): boolean {
  const exp = Date.parse(expirationDate);
  if (!Number.isNaN(exp)) {
    const now = Date.now();
    return now + 10000 - exp > 0;
  }
  return true;
};

/**
 * Checks if a NumericDate is expired, considering 10 seconds margin to prevent RTT inconsistencies
 * @param expiration NumericDate format
 */
export const isExpired = function (expiration: number): boolean {
  if (typeof expiration === 'number') {
    const now = Date.now();
    return now + 10000 - expiration > 0;
  }
  return true;
};
