const textBox = document.getElementById('evaluatedText');
const wordCount = document.getElementById('wordCount');

textBox.addEventListener('input', () => {
  const text = textBox.value.trim();
  if (text.length === 0) {
    wordCount.textContent = '0';
  } else {
    wordCount.textContent = text.split(/\s+/).length;
  }
});


