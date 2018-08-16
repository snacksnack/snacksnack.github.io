//activates the image gallery.
//add event listener to each image and respond appropriately to clicks

function activateGallery() {
  //find all the thumbnails
  let thumbnails = document.querySelectorAll("#gallery-thumbs div img");
  let mainImage  = document.querySelector("#gallery-photo img");

  thumbnails.forEach(thumbnail => {
    //preload large images.
    let newImgSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImgSrc;

    thumbnail.addEventListener("click", function() {
      
      //set clicked image as main image
      mainImage.setAttribute("src", newImgSrc);
      mainImage.setAttribute("alt", thumbnail.alt)

      //change current image designation
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      //update image info.
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = document.querySelector(".title");
      let description = document.querySelector(".description");

      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;


    })
  });

}