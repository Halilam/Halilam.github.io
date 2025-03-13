document.addEventListener("DOMContentLoaded", function () {
    fetch("../../data/artworks.json")
        .then(response => response.json())
        .then(data => {
            const artContainer = document.getElementById("art-container");
            const descriptionBox = document.getElementById("art-description");

            data.forEach(item => {
                // art-item element
                const artItem = document.createElement("div");
                artItem.classList.add("art-item");
                artItem.setAttribute("data-description", item.description);

                // image inside the art-item
                const artImage = document.createElement("img");
                artImage.src = item.image;
                artImage.alt = item.title;
                artItem.appendChild(artImage);

                // art-item to the container
                artContainer.appendChild(artItem);

                // Add hover effect for showing the description
                artItem.addEventListener("mouseenter", function () {
                    descriptionBox.textContent = item.description;
                });
            });

            artContainer.addEventListener("mouseleave", function () {
                descriptionBox.textContent = "Hover over an artwork to see details.";
            });
        })
        .catch(error => console.error("Error loading art data:", error));
});
