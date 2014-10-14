function log(text) {
	if (console && console.log)
		console.log(text);
}

function linkifyBooks() {
	var isbns = document.getElementsByClassName("ISBN");
	for (i = 0; i < isbns.length; i++) {
		try {
			var asin = isbns[i].parentNode.getElementsByClassName("ASIN")[0].textContent;
			var oldContents = isbns[i].innerHTML;
			isbns[i].innerHTML = '<a href="http://amazon.com/dp/' + asin + '">' + oldContents + '</a>';
		} catch (ex) {
			log("Failed to linkify isbn. isbn=" + isbns[i].textContent);
		}
	}
	
}

function onLoad() {
	linkifyBooks();
}

window.addEventListener("load", onLoad);
