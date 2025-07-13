
  const textarea = document.getElementById("message");
  const wordCount = document.getElementById("wordCount");
  const maxWords = 100;

  textarea.addEventListener("input", () => {
    let words = textarea.value.trim().split(/\s+/);
    if (words[0] === "") words = [];
    
    if (words.length > maxWords) {
      textarea.value = words.slice(0, maxWords).join(" ");
    }

    wordCount.textContent = `${Math.min(words.length, maxWords)} / ${maxWords} words`;
  });

