var form = document.getElementById("recommendationForm");
var recommendationResult = document.getElementById("recommendationResult");
var recommendationList = document.getElementById("recommendationList");
var recommendationCount = document.getElementById("recommendationCount");
var campaignTypes = ["Exploration", "Mystery", "Combat", "Roleplaying"];

function displayCampaignTypes() {
    recommendationList.innerHTML = "";
    for (var i = 0; i < campaignTypes.length; i++) {
        var item = document.createElement("li");
        item.textContent = campaignTypes[i];
        recommendationList.appendChild(item);
    }
    var count = 0;
    while (count < campaignTypes.length) {
        count = count + 1;
    }
    recommendationCount.textContent = "Available campaign styles: " + count;
}

function styleCampaignRows() {
    var campaignItems = document.querySelectorAll(".campaign-row");
    for (var j = 0; j < campaignItems.length; j++) {
        campaignItems[j].style.backgroundColor = j % 2 === 0 ? "#282b3b" : "#202231";
    }
}

function getRecommendation(campaignName, beginner, experienced, wantsDM) {
    var recommendation = "";
    if (campaignName !== "") {
        recommendation = "Look for the campaign called " + campaignName + ".";
    } else if (beginner && !wantsDM) {
        recommendation = "Try a beginner-friendly adventure as a player.";
    } else if (wantsDM && (beginner || experienced)) {
        recommendation = "Try running a short one-shot adventure as Dungeon Master.";
    } else if (experienced) {
        recommendation = "Try a longer campaign with more challenging quests.";
    } else {
        recommendation = "Choose an experience level or enter a campaign name to get a recommendation.";
    }
    return recommendation;
}

function displayRecommendation(name, recommendation) {
    recommendationResult.textContent = (name === "" ? "Your recommendation: " : name + ", your recommendation: ") + recommendation;
}

function handleRecommendation(event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var campaignName = document.getElementById("campaign").value.trim();
    var beginner = document.getElementById("beginner").checked;
    var experienced = document.getElementById("experienced").checked;
    var wantsDM = document.getElementById("dm").checked;
    var recommendation = getRecommendation(campaignName, beginner, experienced, wantsDM);
    displayRecommendation(name, recommendation);
}

displayCampaignTypes();
styleCampaignRows();
form.addEventListener("submit", handleRecommendation);
