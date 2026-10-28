var zodiac = "Gemini";
var birth_month = "June";
var birthday = 1;
var lucky_num = 1.1;
var horoscrope = "A bit elusive but at the same time set in their ways, those born on June 1st know how to connect with their inner inspiration and make something good out of nearly anything. Proud and confident, their story is that of the warmth needed to be the source of energy to anything beautiful that one wishes to bring down to reality, to planet Earth.";
const belief = false;

document.getElementById("sign").textContent = zodiac;

document.querySelector(".birthday").textContent = "Birthday: " + birth_month + " " + birthday + "st";

document.querySelector(".luckyNum").textContent = "Lucky Number: " + lucky_num;

var paragraphs = document.querySelectorAll("p");

paragraphs[0].textContent = horoscrope;

paragraphs[1].innerHTML = "Do I believe in astrology? <strong>" + belief + "</strong>";

var my_mood = 4.5;
var partner1_mood = 3.5;
var partner2_mood = 3.4;

var average_mood = (my_mood + partner1_mood + partner2_mood) / 3;

document.getElementById("mood").textContent = "Today's mood rating for " + zodiac + ": " + my_mood + " out of 5. The average mood rating of Gemini, Libra, and Leo is: " + average_mood.toFixed(1);
var zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

var mySign = zodiacSigns[2];
var partner1Sign = zodiacSigns[1];
var partner2Sign = zodiacSigns[9];

document.getElementById("myZodiac").textContent = "My zodiac sign is: " + mySign;
document.getElementById("partner1Zodiac").textContent = "Arnaldo zodiac sign is: " + partner1Sign;
document.getElementById("partner2Zodiac").textContent = "D'Juan zodiac sign is: " + partner2Sign;

var horoscopes = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];

var myDescription = horoscopes[2];
var partner1Description = horoscopes[6];
var partner2Description = horoscopes[4];

horoscopes[2] = "Today is a great day to try something new and spend time with friends.";

myDescription = horoscopes[2];

document.getElementById("myHoroscope").textContent = mySign + " Horoscope: " + myDescription;
document.getElementById("partner1Horoscope").textContent = partner1Sign + " Horoscope: " + partner1Description;
document.getElementById("partner2Horoscope").textContent = partner2Sign + " Horoscope: " + partner2Description;
