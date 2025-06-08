  function asideItem() {
    const altera = document.getElementById("asd-pai");
    if (altera.style.display === "none") {
      altera.style.display = "block";
    } else {
      altera.style.display = "none";
    }
  }


      import { animate, hover } from "https://cdn.jsdelivr.net/npm/motion@12.16.0/+esm"

    hover(".card-son", (element) => {
        animate(element, { scale: 1.1 })

        return () => animate(element, { scale: 1 })
    })