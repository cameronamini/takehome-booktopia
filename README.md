BMO takehome 
Cameron Amini

To run:
- clone the repo
- run `npm i`
- run `npm start`

1. 
I spent 3 or 4 hours on the assignment spread out over a few days. Unfortunately it was a busy week for me due to a move and so I couldn't spend as much time as I would have liked.

Given more time, I would:
- add a select input so users can choose how many results they want shown
- add ability to favourite books
- add pagination and fetch more books 
- consume and display more information about each book from api
- I would add a sidebar with the ability to filter the results based on different parameters, eg publication year
- I would handle more edge cases, for example with some unlikely queries (eg a random number like '433'), the app errors out because the books that the api returns are missing certain fields (eg publish date) which
the code assumes are there. To handle these edge cases I would conditionally add properties to the books
stored in state based on whether a property exists on the book object returned from the API
- I would add more test cases as well


2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Es9, released in 2018, added the ability to use spread for object literals rather than just arras. 
I've used this to clone objects before, useful so you can modify a clone without modifying the original object. 

`let objClone = { ...obj }; //copies all key-value pairs from obj`



3.	How would you track down a performance issue in production? Have you ever had to do this?

My favourite tool for diagnosing performance issues is the lighthouse chrome extension. I use it to
generate a report about my app's performance and assess whether the issue lies in the bundle size, 
unnecessary rerenders, or something else entirely.
I had to do this a few times at my current role at OnTraccr. Often times the solution has been to use code-splitting, 
so that improted components that don't need to be rendered when the page loads don't affect the loading time of the page
React developer tools is another tool to diagnose performance issues when you have a large app with many components.
 It shows all the components that have been loaded and the loading time for each.



 4.	How would you improve the API that you just used?

 I would improve the Open Library API a few different ways. 
 There are many different APIs and it's not immediately clear which one a user should use. Users have to look at 
 each API to see which one is appropriate. I would seperate the APIs into larger categories, such as the 
 search API in it's own category, and make it clear that it's for searching for not necessarily just books but 
 also authors and by a variety of means. Then I would include the APIs for searching for a specific 
 type of content using a specific type of data (eg Books by identifier), and another category for the others. 
For the search API, I would also include more information for the different fields users can search based on
eg title, author, etc.
I would also include an overview section with more helfpul information for using the API, eg information
about ISBNs, OLIDs, etc. For example I had no idea books had multiple ISBNs and this caused me some confusion. 



5.	Please describe yourself using correctly formatted JSON.
```
{
  "name": "Cameron Amini",
  "hometown": "Scarborough, Ontario",
  "favourite food": "pizza",
  "strengths": "work ethic, curiosity, collaboration",
  "weaknesses": "carbs",
  "vimOrEmacs": "vim"
}
```
