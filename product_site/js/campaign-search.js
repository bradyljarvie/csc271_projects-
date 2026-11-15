var searchInput = document.getElementById("campaignSearch");
var campaignRows = document.getElementsByClassName("campaign-row");
var results = document.querySelector("#searchResults");
var message = document.querySelector("#searchMessage");
var totalCampaigns = campaignRows.length;

function filterCampaigns(searchText) {
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
    return matchCount;
}

function updateSearchResults(matchCount, searchText) {
    results.textContent = "Showing " + matchCount + " of " + totalCampaigns + " campaigns.";
    if (matchCount === 0) {
        message.innerHTML = "<strong>No campaigns found.</strong> Try another name.";
    } else if (searchText === "") {
        message.innerHTML = "<strong>Enter a campaign name to filter the list.</strong>";
    } else {
        message.innerHTML = "<strong>Matching campaigns are shown below.</strong>";
    }
}

function searchCampaigns() {
    var searchText = searchInput.value.toLowerCase().trim();
    var matchCount = filterCampaigns(searchText);
    updateSearchResults(matchCount, searchText);
}

searchCampaigns();
searchInput.addEventListener("input", searchCampaigns);
