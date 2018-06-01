function onGot(item) {
  authorArray = item["goodreads-filter"].split(",").slice(0, -1);

	//get all spans with attribute itemprop="name"
	let spanList = document.querySelectorAll("span[itemprop=\"name\"]");

	//iterate across them
	for (let name of spanList) {

		//if their content matches a given name
		if (authorArray.indexOf(name.textContent) != -1) {

			//find parent
			let p = name.parentElement;

			//iterate higher in the tree until reaching the relevant table row
			while (p.tagName != "TR") {
				p = p.parentElement;
			}

			//and remove
			p.remove();
		}
	}
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var tfilteredAuthors = browser.storage.local.get("goodreads-filter");

tfilteredAuthors.then(onGot, onError);
