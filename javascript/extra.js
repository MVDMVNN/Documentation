document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".copy-on-click").forEach(function (el) {
    el.style.cursor = "pointer";
    el.title = "Нажми чтобы скопировать";

    el.addEventListener("click", function () {
      navigator.clipboard.writeText(el.innerText).then(function () {
        const original = el.innerText;
        el.innerText = "✓ Скопировано";
        setTimeout(() => (el.innerText = original), 1500);
      });
    });
  });
});
