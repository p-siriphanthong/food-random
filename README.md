# FoodRandom

Job applications quiz of [Cleverse](https://cleverse.com/)

Try it online at [FoodRandom](https://food-random-cleverse.herokuapp.com/).

## Requirements

* "FoodRandom: Have a hard time choosing what to eat? Use FoodRandom!"
* The food menu is preloaded into the database along with Lat/Long coordinates and food categories.
* After the page is loaded, there is only one button: "What to Eat?"
* After the button is clicked, the web calls the GraphQL API to the server.
* The server responds with the randomized food menu, food category and, shows the location of the restaurant on the map.
* There is a button in a page: "No {{food_category}}, please". For example, "No Japanese food, please".
* If the button is clicked the web will call another API to give another randomized food menu excluding the food categories that the user has been requested.
* The page will show another menu, the same excluding button is also shown. If the button is clicked all the previously requested categories must be excluded.
* The system must be implemented with:
  * Node.js
  * GraphQL
  * MongoDB
  * React
* The hosting/deployment approach is flexible

```
The time limit is 72 hours (3 days)
```

## Available Scripts

In the root directory, you can run:

### `npm run dev`

Runs both client and sever side in developer mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client side in the browser.<br>
Open [http://localhost:5000/graphql](http://localhost:5000) to view the server side in the browser.

### `npm run client`

Runs only client side in developer mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client side in the browser.


### `npm run server`

Runs only server side in developer mode.<br>
Open [http://localhost:5000/graphql](http://localhost:5000) to view the server side in the browser.
