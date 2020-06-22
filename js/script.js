const toggleDarkMode = () => {
  let element = document.querySelector(".switch");
  element.addEventListener(
    "change",
    (e) => {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    },
    false
  );
};
toggleDarkMode();
