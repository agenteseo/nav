document.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    let links = document.querySelectorAll("nav a");

    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 150) {
            links.forEach(link => link.classList.remove("active"));
            document.querySelector(`nav a[href="#${section.id}"]`)?.classList.add("active");
        }
    });
});
