# Testing
## Table of Contents
<details>
  <summary>Click to expand table of contents</summary>

1. [User Stories Testing](#user-stories)
2. [Code Validation](#code-validation)
3. [Functionality Testing](#functionality-testing)
4. [Encountered Issues](#encountered-issues)
5. [Performance Testing](#performance-testing)
</details>

# User Stories Testing
## Visitor Stories
**As a site visitior, I would like to gain an understanding of the website's purpose from the landing page.**
   
   - A hero image, placed towards the top of a webpage gives immediately a first glimpse on the website's content and purspose.
    - Strategically placed headline also indicates to the user what is the websites purpose.

<h2 align="center"><img src="readme-files/img-readme/US-1.jpg" alt="Explore National Parks of Japan hero image" target="_blank" width="75%" height="75%"></h2>

**As a site visitor, I would like to easily navigate through the site and find what I'm looking for with an ease.**

- A navigation menu is placed in the top left corner of the website. Originally I planned to just have a hamburger icon (without menu wording) but in this way it will be more obvious to the users that this is navigation menu.
<h2 align="center"><img src="readme-files/img-readme/us-2-menu.jpg" alt="Website's navigation menu" target="_blank" width="75%" height="75%"></h2>

- When the user clicks on the hamburger icon, a full overlay navigation appears which allows the user to easily access any section on the website.
<h2 align="center"><img src="readme-files/img-readme/us-2-overlay_n.jpg" alt="Back to top arrow" target="_blank" width="75%" height="75%"></h2>

- Back to top arrow button appears on the lower right of page when the user start to scroll down the page. Once clicked, it jumps to the top of the webpage which reduces the time to manually scorll up the website.
<h2 align="center"><img src="readme-files/img-readme/us-2-back_to_top_arrow.jpg" alt="Back to top arrow" target="_blank" width="75%" height="75%"></h2>

**As a site visitor, I would like to find the aesthetics of the website enjoyable.**
- The home section with hero image is eye-catching and graphically attractive which should keep the visitor's attention.
<h2 align="center"><img src="readme-files/img-readme/US-1.jpg" alt="Explore National Parks of Japan hero image" target="_blank" width="75%" height="75%"></h2>

- Clean design was used throughout the website. The attention was paid to the colors, eye-catching images and textual content.
The website was designed to be elegant but simple and easy to use. The elements of the website are visually connected and balanced. 
<h2 align="center"><img src="readme-files/img-readme/us-3-map.jpg" alt="Website's map section" target="_blank" width="75%" height="75%"></h2>
<h2 align="center"><img src="readme-files/img-readme/us-3-contact.jpg" alt="Website's contact section" target="_blank" width="75%" height="75%"></h2>

- A full overlay navigation is modern and distinctive and the visitors can easyily find what they are looking for.

**As a site visitor,I want to use interactive elements on the website.**


**As a site visitor, I would like to be able to easily find and navigate to the company's social media.**

- Social media icons are placed in header section, located in the top rigth corner of the website. 
The media icons were strategically placed at this position.
- By clicking either on Facebook, Instagram or Twitter icon, mentioned social media pages will open in a new window.

<h2 align="center"><img src="readme-files/img-readme/us-2-menu.jpg" alt="Website's social media icons" target="_blank" width="75%" height="75%"></h2>

**As a site visitor, I want to get in touch if I might have any queries.**

- The contact form is located under the website's Contact section. The contact form is connected using EmailJS service which allows users to send an email directly without using the server.
SweetAlert2 was used to add an interactive custom modal popup window when a user submits a contact form. Success or error message will 
display depending on if the user correctly or incorrectly uses the forms on the website.

<h2 align="center"><img src="readme-files/img-readme/us-contact-confirmation.jpg" alt="Website's contact section" target="_blank" width="75%" height="75%"></h2>

- The email notification sent to the website owner:
<h2 align="center"><img src="readme-files/img-readme/us-contact-email.jpg" alt="Confirmation email" target="_blank" width="75%" height="75%"></h2>
- The site visitor also has an option to contact the company via social media links located at the bottom footer on all webpages.

**As a site visitor, I want to use map to find exciting national parks in Japan and based on the provided information make a decision what places to visit.**
- Google Maps API was used to dispay the ten most beutiful national parks of Japan. When hover over the marker, the national park's name shows.
And when the user clicks on the marker, the national park information with the correspoing image changes on the left side based on the marker the user clicked.

<h2 align="center"><img src="readme-files/img-readme/us-map-np.jpg" alt="National parks of Japan on the map" target="_blank" width="75%" height="75%"></h2>
<h2 align="center"><img src="readme-files/img-readme/us-map-np-1.jpg" alt="National parks of Japan on the map" target="_blank" width="75%" height="75%"></h2>

**As a site visitor, I want to get information how to get to the national parks.**
- Under each national park there is a paragraph "How to get there" which gives the user the information on how to get to this particual national park.
This paragraph is placed as the last paragraph undre the all national parks information section.

<h2 align="center"><img src="readme-files/img-readme/us-how-to-get-there.jpg" alt="How to get there info" target="_blank" width="75%" height="75%"></h2>

**As a site visitor, I want to find about the current weather and accordingly plan my visit.**

- TO BE ADDED

# Code Validation
- The website was validated by the [W3C Markup Validation Service](https://validator.w3.org/) to ensure there were no syntax errors or issues. 
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to validate CSS code.
- [JSHint](https://jshint.com/) was used for JavaScript code validation was used for validation of JavaScript.

## [W3C Markup Validation Service](https://validator.w3.org/) - Markup Validation
- There are no errors or warnings. 
    <h2 align="center"><img src="readme-files/img-readme/html-validator-MS2.jpg" alt="HTML Validation" target="_blank" width="60%" height="60%"></h2>

## [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - CSS Validation
- There are no errors.
- There are several warnings about the vendor prefixes which can be ignored.
    <h2 align="center"><img src="readme-files/img-readme/css-validator-MS2.jpg" alt="CSS Validation" target="_blank" width="50%" height="50%"></h2>

## [JSHint](https://jshint.com/) - JavaScript Validation


# Functionality Testing 
Comprehensive testing was executed. Further elaborated in more details below:
## Navigation menu
- A full screen overlay navigation is fully functional.
    - When clicked on the nav links every navigation link goes to the expected section and the overlay navigation closes.
    - When hover over each navigation link, it changes the color correctly.
    - Close button (x) works correctly - it closes the overlay navigation

## Social media icons

## Hero image


## Button



## Browser Testing

## Device Testing

# Encountered Issues

# Performance Testing


## Accessibility


Click here to return to [README.md](README.md) file.