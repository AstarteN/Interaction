document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    const imageSources = ["image1.png", "image2.png", "image3.png"];
    
    images.forEach(function (image, index) {
        image.addEventListener('click', function () {
      
            const nextIndex = (index + 1) % imageSources.length;
            
        
            image.src = imageSources[nextIndex];
        });
    });
});
