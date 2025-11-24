







//funcionalidad para que la talla sea clickeable 

const sizes = document.querySelectorAll(".size-option:not(.disabled-size)");
sizes.forEach((s) => {
  s.addEventListener("click", () => {
    sizes.forEach((x) => x.classList.remove("size-selected"));
    s.classList.add("size-selected");
  });
});
