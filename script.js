function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");

  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
}

function togglePdf () {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get pdf
  var vedleggPdf = document.getElementById("pdfId");
  // Get txt
  var imgText = document.getElementById("imgtext");
  
  if (vedleggPdf.style.display === "block") {
    vedleggPdf.style.display = "none";
  } else {
    vedleggPdf.style.display = "block";
  }
  

  if (expandImg.style.display === "none") {
    expandImg.style.display = "block";
    imgText.style.display = "block"
  } 
  else {
    expandImg.style.display = "none";
    imgText.style.display = "none";
  }
} 

function setImg () {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get pdf
  var vedleggPdf = document.getElementById("pdfId");
  // Get txt
  var imgText = document.getElementById("imgtext");

  expandedImg.src = "img1t.jpg";
  imgText.innerHTML = "1";
  vedleggPdf.style.display = "none";
}



 
/* expandedImg.onclick =  */function startModal () {
/* var expandImg = document.getElementById("expandedImg");
img01.src = expandImg.src */

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("expandedImg");
var captionText = document.getElementById("imgtext");
// Get the modal
var modal = document.getElementById("myModal");

  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  

  modal.style.display = "none";
}
