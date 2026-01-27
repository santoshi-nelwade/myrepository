fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        highlightActiveLink();
        enablePageTransition();
    });


function enablePageTransition() {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        });
    });
}

function highlightActiveLink() {
    const links = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
            link.classList.add("active");
        }
    });
}

