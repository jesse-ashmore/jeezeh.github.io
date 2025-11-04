const firstWordRegex = /^(\S+)\s(.*)/;

function applyDynamicClasses() {
  document.querySelectorAll(".headed-list li").forEach((section) => {
    // Wrap first word of list item in a span for special styling
    const firstWord = firstWordRegex.exec(section.textContent.trim())[1];
    if (!firstWord) return;

    section.innerHTML = section.innerHTML.replace(
      firstWord,
      `<span class="first-word">${firstWord}</span>`
    );
  });
}

applyDynamicClasses();
