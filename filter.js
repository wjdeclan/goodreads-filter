//get all spans with attribute itemprop="name"
let spanList = document.querySelectorAll("span[itemprop=\"name\"]");

//iterate across them
for (let name of spanList) {

	//if their content matches a given name
	if (name.textContent == "###") {
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