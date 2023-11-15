document.addEventListener("DOMContentLoaded", function () {
    const gallerySection = document.getElementById("artGallery");

    // List all images
    const images = [
        "images/artwork1.jpg",
        "images/artwork2.jpg",
        "images/artwork3.jpg",
        "images/artwork4.jpg"
        "images/artwork5.jpg"
        "images/artwork6.jpg"
        
    ];

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
});
