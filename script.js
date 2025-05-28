document.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    let links = document.querySelectorAll("nav a");

    sections.forEach(section => {
        let top = section.getBoundingClientRect().top;
        if (top >= 0 && top <= 200) {
            links.forEach(link => link.classList.remove("active"));
            document.querySelector(`nav a[href="#${section.id}"]`).classList.add("active");
        }
    });
});
