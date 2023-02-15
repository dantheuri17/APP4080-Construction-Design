/*---------- Project Page Script --------*/

let noOfCharac = 150;
let contents = document.querySelectorAll(".project-text");

contents.forEach(content => {
	if (content.textContent.length < noOfCharac) {
		content.nextElementSibling.style.display = "none";
	} else {
		let displayText = content.textContent.slice(0, noOfCharac);
		let moreText = content.textContent.slice(noOfCharac);
		content.innerHTML = `${displayText}<span class="dots">...
        </span><span class="hide more">${moreText}</span>`;
	}

});

function readMore(btn) {
	let post = btn.parentElement;
	post.querySelector(".dots").classList.toggle("hide");
	post.querySelector(".more").classList.toggle("hide");
	btn.textContent == "Read More"
		? (btn.textContent = "Read Less")
		: (btn.textContent = "Read More");
}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}


