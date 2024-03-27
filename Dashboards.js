console.log("I am working");

const containerDiv = document.getElementById("vizContainer");

// const url = "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
 const url = "https://public.tableau.com/views/CreditCardSpendings_17109085751400/YearlyCreditCardSpendings";

const options = {
    hideTabs: true,
    onFirstInteractive: function() {
        console.log("Dashboard is ready!")
    }
};

function initViz() {
    let viz = new tableau.Viz(containerDiv, url, options);
}

document.addEventListener('DOMContentLoaded', initViz);