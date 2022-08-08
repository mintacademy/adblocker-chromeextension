function removeAds() {

    // *** Get all elements in the feed
    let mainFeed = document.getElementById("main");
    // *** Restrict our feed search to ONLY spans & divs
    let theFeed = mainFeed.querySelectorAll('span,div')

    // sidebar on the right promoted tweets
    for (let i = 0; i < theFeed.length; ++i) {
        // Check if they contain the text 'Promoted'
          if (theFeed[i].innerHTML === "\n            Promoted\n        ") {
          //  console.log("Found the Promoted feed item! => ")
          //  console.log(theFeed[i].innerHTML)

            // Get the div that wraps around the entire ad
            let card = theFeed[i].closest(".css-1dbjc4n r-1adg3ll r-1ny4l3l");

            // If the class changed and we can't find it with closest(), get the 9th parent
            if (card === null) {
                // Could also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
                let j = 0;
                card = theFeed[i];
                while (j < 9) {
                    card = card.parentNode;
                    ++j;
                }
            }

            // Make the ad disappear!
            card.setAttribute("style", "display: none !important;");
        }
    }

    // in-feed promoted tweets
    for (let i = 0; i < theFeed.length; ++i) {
        // Check if they contain the text 'Promoted'
          if (theFeed[i].innerHTML === "\n            Promoted\n        ") {
          //  console.log("Found the Promoted feed item! => ")
          //  console.log(theFeed[i].innerHTML)

            // Get the div that wraps around the entire ad
            let card = theFeed[i].closest(".css-1dbjc4n r-eqz5dr r-16y2uox r-1wbh5a2");

            // If the class changed and we can't find it with closest(), get the 8th parent
            if (card === null) {
                // Could also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
                let j = 0;
                card = theFeed[i];
                while (j < 8) {
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


