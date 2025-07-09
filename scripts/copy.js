document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copy-email");
  const copyMessage = document.getElementById("copy-message");

  copyButton.addEventListener("click", () => {
    const email = "goodtrouble.springfield@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      copyMessage.classList.add("show");
      setTimeout(() => {
        copyMessage.classList.remove("show");
      }, 2000);
    });
  });
});
