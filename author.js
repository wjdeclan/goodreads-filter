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

  btn.addEventListener("click", function() { btnClick(btn); });
}

function btnClick(btn) {
  console.log("click");

  if (btn.textContent === 'Block Author') {
    btn.textContent = 'Unblock Author';
  } else {
    btn.textContent = 'Block Author';
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var tfilteredAuthors = browser.storage.local.get("goodreads-filter");

tfilteredAuthors.then(onGot, onError);
