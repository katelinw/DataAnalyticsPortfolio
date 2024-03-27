function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/app/profile/katelin.wooden/viz/OfficeStoreSalesReport/OfficeStoreSalesReport",
        options = {
        hideTabs: true,
        onFirstInteractive: function () {
        console.log("Run this code when the viz has finished loading.");
        }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div. 
    }