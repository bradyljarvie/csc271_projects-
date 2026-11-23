
var toggleButton = document.getElementById("toggleRecommendations");
var campaignStyles = document.getElementById("campaignStyles");
var nameInput = document.getElementById("name");
var campaignInput = document.getElementById("campaign");
var nameFeedback = document.getElementById("nameFeedback");
var campaignFeedback = document.getElementById("campaignFeedback");
var recommendationForm = document.getElementById("recommendationForm");
var recommendationMessage = document.getElementById("recommendationResult");

function toggleCampaignStyles() {
    if (campaignStyles.style.display === "none") {
        campaignStyles.style.display = "block";
        toggleButton.textContent = "Hide Campaign Styles";
    } else {
        campaignStyles.style.display = "none";
        toggleButton.textContent = "Show Campaign Styles";
    }
}

function showNameHelp() {
    nameFeedback.textContent = "Enter your name (at least 2 characters).";
}

function showCampaignHelp() {
    campaignFeedback.textContent = "Optional: enter a campaign name or leave this blank.";
}

function checkName() {
    if (nameInput.value.trim().length < 2) {
        nameFeedback.textContent = "Please enter at least 2 characters for your name.";
        nameFeedback.style.color = "#ffb3b3";
        return false;
    }
    nameFeedback.textContent = "Name looks good!";
    nameFeedback.style.color = "#b4f4bd";
    return true;
}

function checkCampaign() {
    if (campaignInput.value.trim().length === 1) {
        campaignFeedback.textContent = "Enter at least 2 characters, or leave this blank.";
        campaignFeedback.style.color = "#ffb3b3";
        return false;
    }
    campaignFeedback.textContent = "Campaign entry looks good!";
    campaignFeedback.style.color = "#b4f4bd";
    return true;
}

function validateSubmission(event) {
    event.preventDefault();
    if (!checkName() || !checkCampaign()) {
        recommendationMessage.textContent = "Please correct the form before submitting.";
        return;
    }
    recommendationMessage.textContent += " Your responses were successfully recorded on this page.";
}

toggleButton.addEventListener("click", toggleCampaignStyles);
nameInput.addEventListener("focus", showNameHelp);
nameInput.addEventListener("blur", checkName);
campaignInput.addEventListener("focus", showCampaignHelp);
campaignInput.addEventListener("blur", checkCampaign);
recommendationForm.addEventListener("submit", validateSubmission);
