function onGot(item) {
  let authorArray = [];
  if ("goodreads-filter" in item) {
    authorArray = item["goodreads-filter"].split(",");
  }

  let span = document.querySelector("span[itemprop=\"name\"]");
  let name = span.textContent;

  let box = document.querySelector(".authorFollowButtonContainer");  

  if (authorArray.indexOf(name) != -1) {
    box.innerHTML = box.innerHTML + "<br>" + "<button name=\"button\" type=\"button\" class=\"gr-button gr-button--fullWidth gr-button--togglable--disabled\" id=\"block-button\">Unblock Author</button>";
  } else {
    box.innerHTML = box.innerHTML + "<br>" + "<button name=\"button\" type=\"button\" class=\"gr-button gr-button--fullWidth gr-button--togglable--disabled\" id=\"block-button\">Block Author</button>";
  }

  let btn = document.querySelector("#block-button");

  btn.addEventListener("click", function() { btnClick(btn, authorArray, name); });
}

function btnClick(btn, authorArray, name) {
  console.log("click");

  if (btn.textContent === 'Block Author') {
    btn.textContent = 'Unblock Author';
    authorArray.splice(authorArray.length, 0, name);
    browser.storage.local.set({"goodreads-filter": authorArray.join(",")});
  } else {
    btn.textContent = 'Block Author';
    authorArray.splice(authorArray.indexOf(name), 1);
    browser.storage.local.set({"goodreads-filter": authorArray.join(",")});
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var tfilteredAuthors = browser.storage.local.get("goodreads-filter");

tfilteredAuthors.then(onGot, onError);
