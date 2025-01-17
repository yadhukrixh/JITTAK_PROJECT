/**
 * Delays the execution for a specified amount of time.
 * 
 * This function returns a promise that resolves after a given number of milliseconds.
 * It can be used to introduce a delay in asynchronous code execution, useful for 
 * simulating loading states or creating timeouts.
 *
 * @param {number} ms - The number of milliseconds to wait before resolving the promise.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 * 
 * @example
 * delay(1000).then(() => console.log('1 second passed')); // Logs after 1 second
 */
export const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
