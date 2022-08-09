function removeAds() {

  // *** Get all elements on the page
  let entirePage = document.getElementById("react-root")
  // *** Restrict our page search to ONLY spans, divs, & articles
  let thePage = entirePage.querySelectorAll('span,div,article')

  for (let i = 0; i < thePage.length; ++i) {
    // Check if they contain the text 'Promoted'
    if (thePage[i].innerHTML === "Promoted") {
      // console.log("Found the Promoted feed item! => ")
      // console.log(thePage[i].innerHTML)

      // Get the article tag that wraps around the entire ad
      let card = thePage[i].closest("article");

      // If the class changed and we can't find it with closest(), get the 9th parent
      if (card === null) {
        // Could also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
        let j = 0;
        card = thePage[i];
        while (j < 9) {
          card = card.parentNode;
          ++j;
        }
      }

      // Make the ad disappear!
      card.setAttribute("style", "display: none !important;");
    }
  }
}


removeAds();

// Ensures ads will be removed as the user scrolls
setInterval(function () {
  removeAds();
}, 100)


