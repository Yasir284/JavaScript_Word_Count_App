let text = document.querySelector(".text");

text.addEventListener("keyup", getCount);

function getCount() {
  let getText = text.value;
  document.querySelector(".words").textContent = `Words : ${getWordCount(
    getText
  )}`;
  document.querySelector(".letters").textContent = `Letters : ${getLetterCount(
    getText
  )}`;

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
  text.value = "";
  document.querySelector(".words").textContent = "Words";
  document.querySelector(".letters").textContent = "Letters";
}

document.querySelector(".addFile").addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = (event) => console.log(event.target.result); // desired file content
  reader.onerror = (error) => reject(error);
  reader.readAsText(this.files[0]); // you could also read images and other binaries
});
