function removeAds() {

    // *** Get all elements in the feed
    let mainFeed = document.getElementById("main");
    // *** Restrict our feed search to ONLY spans & divs
    let theFeed = mainFeed.querySelectorAll('span,div')

    // adding some comments
    // fixing i++ bug
    for (let i = 0; i < theFeed.length; i++) {
        // Check if they contain the text 'Promoted'
          if (theFeed[i].innerHTML === "\n            Promoted\n        ") {
          //  console.log("Found the Promoted feed item! => ")
          //  console.log(theFeed[i].innerHTML)

            // Get the div that wraps around the entire ad
            let card = theFeed[i].closest(".feed-shared-update-v2");

            // If the class changed and we can't find it with closest(), get the 6th parent
            if (card === null) {
                // Could also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
                let j = 0;
                card = theFeed[i];
                while (j < 6) {
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


