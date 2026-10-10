"use strict";
const gallery = document.querySelector(".gallery");
const largeImg = document.querySelector("#largeImg");
gallery.addEventListener("click", (e)=>{
    const link = e.target.closest("a");
    if (!link) return;
    e.preventDefault();
    largeImg.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
