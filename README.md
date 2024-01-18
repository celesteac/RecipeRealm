# Recipe Realm
A web-based recipe sharing app <br />

## Specification Deliverable

### Elevator Pitch
This is a test <br />

### Design

### Key Features
- Secure Login with HTML
- Add new recipes to the list
- Each recipe in the list links to an external web page
- Updates in real-time the total number of "views" on each recipe
- Ability to delete recipes that you added

### Technologies
I am going to use the required technologies in the following ways:

- **HTML** - Uses correct HTML structure. Two HTML pages. One for login and one for recipe viewing and adding. Button list items that hyperlink to external pages.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice, and contrast.
- **JavaScript** - Provides login, recipe list display, recipe-adding capability, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving recipes
  - uploading new recipes
  - retrieving a random inspiring quote about food
- **DB/Login** - Store users, recipes uploaded by each user, views per recipe, and basic recipe information in the database. Register and log in users. Credentials are securely stored in the database. Cannot add recipes unless authenticated.
- **WebSocket** - When a recipe is viewed, the recipe's views count increases and the recipe owner receives a notification.
- **React** - Application ported to use the React web framework.




<!--
## HTML Deliverable
## CSS Deliverable
## JavaScript Deliverable
## Service Deliverable
## DB/Login Deliverable
## WebSocket Deliverable
## React Deliverable
-->
