const sharp = require('sharp');

const inputList = ['firefox_logo-only_RGB.png', 'firefox-addons.jpg', 'mozilla-dinosaur-head.png'];

// Resize image to 400px wide, maintaining aspect ratio

for ( let inputFile of inputList) {
    sharp(inputFile) // Replace with your input image file
        .resize(400) // The height will be calculated to maintain aspect ratio
        .toFile('./400px/'+inputFile, (err, info) => {
            if(err) {
                console.error("An error occurred:", err);
            } else {
                console.log("Image resized to 400px wide:", info);
            }
        });

// Resize image to 120px wide, maintaining aspect ratio
    sharp(inputFile) // Replace with your input image file
        .resize(120) // The height will be calculated to maintain aspect ratio
        .toFile("./120px/" + inputFile, (err, info) => {
            if(err) {
                console.error("An error occurred:", err);
            } else {
                console.log("Image resized to 120px wide:", info);
            }
        });
}
sharp('./red-panda.jpg') // Replace with your input image file
    .resize(600) // The height will be calculated to maintain aspect ratio
    .toFile('./600px/'+'red-panda.jpg', (err, info) => {
        if(err) {
            console.error("An error occurred:", err);
        } else {
            console.log("Image resized to 400px wide:", info);
        }
    });
