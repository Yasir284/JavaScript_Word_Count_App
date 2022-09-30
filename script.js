let text = document.querySelector(".text");

text.addEventListener("keyup", getCount);

function getCount() {
  let getText = text.value;
  document.querySelector(".wordsCount").textContent = getWordCount(getText);
  document.querySelector(".lettersCount").textContent = getLetterCount(getText);

  if (event.key == "Delete") {
    clearText();
  }
}

function getWordCount(text) {
  if (text === "") {
    return 0;
  }
  return text.trim().split(" ").length;
}

function getLetterCount(text) {
  return text.split("").filter((val) => val !== " ").length;
}

function clearText() {
  text.textContent = "";
  document.querySelector(".wordsCount").textContent = 0;
  document.querySelector(".lettersCount").textContent = 0;
  document.querySelector(".addFile").value = "";
}

document.querySelector(".addFile").addEventListener("input", function () {
  const reader = new FileReader();
  reader.readAsText(this.files[0]);
  reader.onload = (event) => {
    text.textContent = event.target.result;
    console.log(text.textContent);
    document.querySelector(".wordsCount").textContent = getWordCount(
      text.textContent
    );
    document.querySelector(".lettersCount").textContent = getLetterCount(
      text.textContent
    );
  };
  reader.onerror = (error) => reject(error);
});
