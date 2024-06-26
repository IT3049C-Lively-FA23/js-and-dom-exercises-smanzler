// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textarea = document.getElementById(`text`);
const stat = document.getElementById(`stat`);

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
textarea.addEventListener('input', () => {
  console.log(textarea.value)
  stat.innerHTML = `You've written ${textarea.value.split(' ').length} words and ${textarea.value.length} characters.`
})