export function toTop() {
    document.addEventListener("DOMContentLoaded", () => {
        const burger = document.querySelector(".header__burger");
        const header = document.querySelector("header");
        const nav = document.querySelector(".header__nav");
        const links = nav.querySelectorAll("a");
        const offset = 80; // отступ сверху

        // клик по бургеру
        burger.addEventListener("click", e => {
            e.stopPropagation();
            burger.classList.toggle("active");
            header.classList.toggle("nav-active");
            header.classList.remove("dropdown-active");
            nav.classList.toggle("open");

            document.querySelectorAll(".header__dropdown.open").forEach(d => {
                if (d !== dropdown) d.classList.remove("open");
            });
        });

        // клик по ссылке в меню
        links.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const targetId = link.getAttribute("href").slice(1);
                const target = document.getElementById(targetId);

                if (target) {
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: targetPosition - offset,
                        behavior: "smooth"
                    });
                }

                burger.classList.remove("active");
                header.classList.remove("nav-active");
                nav.classList.remove("open");
            });
        });

        // закрытие по клику вне nav
        document.addEventListener("click", e => {
            if (
                nav.classList.contains("open") &&
                !nav.contains(e.target) &&
                !burger.contains(e.target)
            ) {
                burger.classList.remove("active");
                header.classList.remove("nav-active");
                nav.classList.remove("open");
            }
        });
    });
}