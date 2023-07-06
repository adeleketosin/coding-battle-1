/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
    function reverseRow(arr) {
        const M = arr.length;
        for (i = 0; i < M; i++) {
          for (j = 0; j < i; j++) {
            const tmp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = tmp;
      }
      }
      }

module.exports = transpose;
