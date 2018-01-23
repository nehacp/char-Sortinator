module.exports.store = [];

// this functions sorts the string in reverse
module.exports.sortDescending = function(word) {
  return word.split('').sort((a, b) => {
    if (a < b) return 1;
    if (a === b) return 0;
    if (a > b) return -1;
  }).join('');
};
