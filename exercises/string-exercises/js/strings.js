class StringFunctions {
    /**
     * @param {string} input
     * @returns {string}
     * @example
     * capitalize('hello world') // 'HELLO WORLD'
     * capitalize('hElLo wOrLd') // 'HELLO WORLD'
     */
    capitalize(input) {
      return input.toUpperCase();
    }
    /**
     * Returns a reversed string. Example: "abc" => "cba"
     * @param {string} input - the string input to be processed
     * @returns  {string} - the reversed string
     * @example
     * reverse('abc') // 'cba'
     */
    reverse(input) {
      return input.split("").reduce((acc, char) => char + acc, "");
    }
    /**
     * Returns an array of the words in a string
     * @param {string} input - the string input to be processed
     * @returns {string[]} - an array of words in the string
     * @example
     * words('hello world') // ['hello', 'world']
     */
    split(input) {
      return input.split(' '); // return an array of words
    }
}
