// =========================================
// CORAZONES FLOTANTES
// =========================================

const heartsContainer =
    document.getElementById("hearts-container");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "♥";

    // Posición aleatoria
    heart.style.left =
        Math.random() * 100 + "vw";

    // Tamaño aleatorio
    const size =
        Math.random() * 18 + 8;

    heart.style.fontSize =
        size + "px";

    // Duración aleatoria
    const duration =
        Math.random() * 8 + 7;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);


    // Eliminar después de la animación

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);
}


// Crear corazones periódicamente

setInterval(createHeart, 1800);



// =========================================
// ANIMACIÓN AL HACER SCROLL
// =========================================

const elements =
    document.querySelectorAll(
        ".memory-card, .gallery-item"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },

        {
            threshold: 0.15
        }

    );



elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});



// =========================================
// GALERÍA - CLICK PARA AMPLIAR
// =========================================

const galleryImages =
    document.querySelectorAll(
        ".gallery-item img"
    );


galleryImages.forEach(image => {

    image.addEventListener(
        "click",
        () => {

            const overlay =
                document.createElement("div");

            overlay.style.position =
                "fixed";

            overlay.style.inset = "0";

            overlay.style.background =
                "rgba(0,0,0,0.9)";

            overlay.style.display =
                "flex";

            overlay.style.alignItems =
                "center";

            overlay.style.justifyContent =
                "center";

            overlay.style.zIndex = "9999";

            overlay.style.padding = "30px";


            const fullImage =
                document.createElement("img");

            fullImage.src =
                image.src;

            fullImage.style.maxWidth =
                "95%";

            fullImage.style.maxHeight =
                "90vh";

            fullImage.style.objectFit =
                "contain";

            fullImage.style.borderRadius =
                "5px";


            overlay.appendChild(
                fullImage
            );


            overlay.addEventListener(
                "click",
                () => {

                    overlay.remove();

                }
            );


            document.body.appendChild(
                overlay
            );

        }
    );

});
