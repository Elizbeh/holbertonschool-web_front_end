function createElement(data) {
  const paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

const queryWikipedia = (callback) => {
  const req = new XMLHttpRequest();

  req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
  req.addEventListener("load", function(){
    if (req.status === 200 && req.readyState === 4) {
      const res = JSON.parse(req.responseText);
      var extract = res.query.pages[Object.keys[0]].extract;
      callback(extract);
    } else {
      throw new Error("Bad request");
      //console.error("");
    }
   })

  req.send();
}


queryWikipedia(createElement);