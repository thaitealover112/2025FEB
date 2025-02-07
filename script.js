// List of phrases for the "No" button to cycle through
var noButtonPhrases = ["bruh", "stop", "bro", "fr", "please", "istg", "i hate u"];
var phraseIndex = 0; // Track current index of the phrase list

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        document.getElementById('question').style.display = 'none'; 
        displayCatHeart(); 
    } else if (option === 'no') {
        // Change text of the "No" button to the next phrase in the list
        document.getElementById('no-button').innerText = noButtonPhrases[phraseIndex];

        // Increase font size of the "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.5; // Increase size by 1.5x
        yesButton.style.fontSize = newSize + 'px';

        // Move to the next phrase, looping if necessary
        phraseIndex = (phraseIndex + 1) % noButtonPhrases.length;
    } else {
        alert('Invalid option!');
    }
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = ''; 
    var imageContainer = document.getElementById('image-container');

    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);

        var thankYouText = document.createElement('div');
        thankYouText.id = 'thank-you-text';
        thankYouText.innerText = 'thank youuu, i love you!';
        imageContainer.appendChild(thankYouText);

        document.getElementById('options').style.display = 'none';
    };
}

