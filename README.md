# DreamHouseApp
Next.js Full-Stack Application which shows the list of available houses in different geographic communities. Users can book an appointment, rent a house or buy a house. Information regarding each house including its type, price and area is all provided.

## Overview
- The app has a landing page, which contains a list of geographic communities in alphabetical order.
- App contains a Navbar with menu, login, booking, and rent/buy buttons.
- Each geographic community is represented in a card, which contains the name of community, group and average price.
- Cards have a visit button, this opens a modal with a table. This table contains the list of different types of houses including their price and area. User can book an appointment, rent, or buy the house.

## How I created the app?
I used the following tech stack:
- Next.js
- Typescript
- Material UI
- HTML
- CSS

## Design
The design is simple and user-friendly. I purposely kept the design minimalistic, there are a few reasons for this:
- Makes the app user-friendly and simple to understand and easy to use.
- Tooltips available to help users with understanding icons.
- Works on screens with different sizes.
- Too many colors and transitions can lead to user discomfort and annoyance.

Design can be improved by adding: 
- Herosection with more information about company.
- Footer section with links to company social media websites.
- etc.

## Functionality
Currently on the app, the user can view different geographic communities and their houses.
Mentioned above were functionalities which can be implemented in future:
- Book an appointment, rent or buy a property.
- Login feature
- Menu

## Follow up question
The app can be improved in many ways if given more time. Due to busy schedule, the website currently satisfies all the minimum requirement with an additional feature of being able to view different houses in the communities through a pop-up modal.

If I had more time I would have:
- Solved minor bugs and warnings
- Added HeroSection 
- Added about us page, contact us page
- Would have worked on login feature
- Implemented book now, rent and buy now feature
- etc

The possibilities are endless. There are multiple things that can be done to improve the app.

If I had more time, I would have reworked on the following: 
- Reimplement button component. I would create a separate button component and reuse it. 
- Instead of using Material-UI components, I would create my own custom components using combination of material-ui and vanilla CSS, then use them in the project to make it unique.
- Have separate files for functions or business logic. Export these functions and reuse them.
- Reduce the amount of code in `index.tsx` by refactoring and creating separate component for cards.
- Write unit tests and test edge cases. Would create custom data just to test the application. 
- Write tests to test the API.


## Technical details
Certain APIs didn't have imgUrl or prices. Thus, code has been written in a way where these issues can be tackled. 

For no imgUrl's or 404 status code, I have used a default placeholder image.

For no prices for a specific community or houses under a specific community id, I have returned "-" string, to denote nothing. Also, the cards for such geographic communities have been disabled. 

Handling edge cases and error handling has been done accordingly.

## Images
<img width="1512" alt="Screen Shot 2023-12-23 at 7 01 08 PM" src="https://github.com/HarshalBhalerao/DreamHouseApp/assets/70837272/732d9b2f-eb36-4f05-aa69-1b2de30fc570">
<img width="1512" alt="Screen Shot 2023-12-23 at 7 01 57 PM" src="https://github.com/HarshalBhalerao/DreamHouseApp/assets/70837272/e4a88d4c-d742-42a5-bb02-6e5373a03378">



