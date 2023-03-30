window.addEventListener("scroll", function () {
	var nav = document.querySelector("nav");
	nav.classList.toggle("scrolled", window.scrollY > 0);
});

window.onload = function () {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].setAttribute('target', '_blank');
	}
};