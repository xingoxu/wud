const DISTRIBUTED_WAIT_TIME = 200;

/**
 * Wait for a specified amount of time
 * @param {number} time - Time to wait in milliseconds
 * @returns {Promise<void>}
 */
const wait = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

/**
 * Generate a random number between Min and Max (inclusive)
 * @param {number} Min - Minimum value
 * @param {number} Max - Maximum value
 * @returns {number}
 */
function RandomNum(Min, Max) {
    const Range = Max - Min;
    const Rand = Math.random();
    const num = Min + Math.round(Rand * Range);
    return num;
}

module.exports = {
    wait,
    RandomNum,
    DISTRIBUTED_WAIT_TIME,
};
