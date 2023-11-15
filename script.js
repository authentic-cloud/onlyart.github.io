document.addEventListener("DOMContentLoaded", function () {
    const gallerySection = document.getElementById("artGallery");

    // List all images from the 'images' folder
    const imageFolder = "images";
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];

    fetchImages(imageFolder, imageExtensions)
        .then(images => {
            // Create HTML elements for each image
            images.forEach(image => {
                const artworkDiv = document.createElement("div");
                artworkDiv.classList.add("artwork");

                const imgElement = document.createElement("img");
                imgElement.src = image;
                imgElement.alt = "Artwork";

                const artistParagraph = document.createElement("p");
                artistParagraph.textContent = "Artist: Unknown"; // You can replace this with actual artist information

                artworkDiv.appendChild(imgElement);
                artworkDiv.appendChild(artistParagraph);

                gallerySection.appendChild(artworkDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching images:", error);
        });

    // Function to fetch images
    function fetchImages(folder, extensions) {
        return new Promise((resolve, reject) => {
            const images = [];
            const validExtensions = extensions.map(ext => ext.toLowerCase());

            fetch(`./${folder}`)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, "text/html");
                    const links = Array.from(doc.querySelectorAll("a"))
                        .map(link => link.getAttribute("href"))
                        .filter(href => validExtensions.some(ext => href.toLowerCase().endsWith(ext)));

                    links.forEach(link => images.push(`${folder}/${link}`));

                    resolve(images);
                })
                .catch(reject);
        });
    }
});
