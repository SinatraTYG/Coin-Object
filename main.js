let coin = {
  state: 0,
  flip: function () {
    this.state = Math.round(Math.random());
  },
  toString: function () {
    if (this.state === 0) {
      return "heads";
    } else {
      return "tails";
    }
  },
  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 0) {
      image.src = "images/heads.jpg";
    } else {
      image.src = "images/tails.jpg";
    }
    return image;
  },
};

function display20Flips() {
  // Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)
  for (let i = 0; i < 20; i++) {
    coin.flip();
    let li = document.createElement("li");
    li.innerHTML = coin.toString();
    document.body.append(li);
  }
}

function display20Images() {
  // but this time instead of displaying the result as a string,
  // display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
  for (let i = 0; i < 20; i++) {
    coin.flip();
    let li = document.createElement("li");
    li.append(coin.toHTML());
    document.body.append(li);
  }
}
display20Flips();
display20Images();
