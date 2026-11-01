var searchInput = document.getElementById("campaignSearch");
var campaignRows = document.getElementsByClassName("campaign-row");
var campaignTable = document.getElementById("campaignTable");
var tableRows = campaignTable.getElementsByTagName("tr");
var results = document.querySelector("#searchResults");
var message = document.querySelector("#searchMessage");
var totalCampaigns = tableRows.length - 1;

results.textContent = "Showing " + totalCampaigns + " of " + totalCampaigns + " campaigns.";
message.innerHTML = "<strong>Enter a campaign name to filter the list.</strong>";

searchInput.addEventListener("input", function() {
    var searchText = searchInput.value.toLowerCase().trim();
    var matchCount = 0;

    for (var i = 0; i < campaignRows.length; i++) {
        var campaignName = campaignRows[i].getElementsByTagName("td")[0].textContent.toLowerCase();

        if (campaignName.includes(searchText)) {
            campaignRows[i].style.display = "";
            matchCount = matchCount + 1;
        } else {
            campaignRows[i].style.display = "none";
        }
    }

    results.textContent = "Showing " + matchCount + " of " + totalCampaigns + " campaigns.";

    if (matchCount === 0) {
        message.innerHTML = "<strong>No campaigns found.</strong> Try another name.";
    } else if (searchText === "") {
        message.innerHTML = "<strong>Enter a campaign name to filter the list.</strong>";
    } else {
        message.innerHTML = "<strong>Matching campaigns are shown below.</strong>";
    }
});
