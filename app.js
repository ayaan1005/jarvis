const microphoneButton = document.getElementById("microphoneButton");

microphoneButton.addEventListener("click", function () {
	window.open(
		"./mic/index.html",
		"nativeWindow",
		"width=350,height=300"
	);
});
