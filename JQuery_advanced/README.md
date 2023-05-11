
![Project badge](https://intranet.hbtn.io/assets/pathway/003_color-0c5b38973bfe29fff8dd86f65a213ea2d2499a7d0d9e4549f440c50dc84c9618.png)

# jQuery advanced

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/68c5f95c4e32d808cd79.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5519c0a25d94f2fc358ff02dbb5c4a2c162514089cf58bb3cd6669fe37708c6c)

## Resources

**Read or watch:**

-   [jQuery CDN](https://intranet.hbtn.io/rltoken/iOz8wEa7kAwnzFOjpBvXbw "jQuery CDN")
-   [jQuery API Documentation](https://intranet.hbtn.io/rltoken/JbOOsa1cUaTDLbOlenMgsQ "jQuery API Documentation")
-   [Json server](https://intranet.hbtn.io/rltoken/JUe8jdQHFeWY9w9M-0w3_Q "Json server")

## Learning Objectives

-   Learn how to load jQuery from a CDN in a page
-   Learn the different ways to create DOM elements with jQuery
-   Learn how to modify elements
-   Learn how to add new elements to a page with different positions
-   Learn how to add a click handler on an element
-   Learn how to send GET, POST, DELETE or any type of AJAX query with jQuery
-   Learn how to create a pagination

## Requirements

-   Allowed editors:  `vi`,  `vim`,  `emacs`,  `Visual Studio Code`
-   All your files should end with a new line
-   A  `README.md`  file, at the root of the folder of the project, is mandatory

## Tasks

### 0. Setup your dev environment

mandatory

You are given this starter HTML for this task:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>

        <meta charset="utf-8" />
        <title>Task 0</title>

    </head>

    <body>

    </body>

</html>

```

**In a file  `0-index.html`:**

-   Load the latest version of jQuery using their  `code.jquery.com`  CDN
-   Use the Slim & minified version of jQuery
-   When the page is being loaded, verify that jQuery is loaded correctly
-   If jQuery is ready to be used, log to the console  `jQuery has been loaded correctly`
-   If jQuery has not been loaded properly, log to the console  `jQuery has not been loaded correctly`

**Requirements**

-   Make sure your code is in a  `script`  of type  `application/javascript`

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `0-index.html`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21850-carousel)

File  `0-index.html`  is present

[](https://intranet.hbtn.io/projects/2380#task-21850-carousel)

Help

**0/8** pts

### 1. Creating a DOM element

mandatory

**In a file  `1-index.html`, reuse the template you created previously.**

-   Remove the code that verifies jQuery loaded and logs messages to the console
-   Create a function named  `createTextElement`:
    -   Within the function, create a  `p`  HTML element
    -   The paragraph should display  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    -   Add the paragraph to the  `body`  of the page
-   Call the  `createTextElement`  function

**Requirements:**

-   You must use jQuery only to generate the HTML tag and attach it to the page
-   Use the keyword  `append`  to attach the element to the page

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `1-index.html`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21851-carousel)

File  `1-index.html`  is present

[](https://intranet.hbtn.io/projects/2380#task-21851-carousel)

Help

**0/12** pts

### 2. Creating multiple DOM elements at once

mandatory

**In a file  `2-index.html`, reuse the template you created previously.**

-   Remove the function  `createTextElement`
-   Create a function named  `createFamilyTree`:
    -   It should create a table element
        -   The head of the table should display  `Firstname`  and  `Lastname`  in two cells
        -   The body of the table should three rows
        -   The first row should contain two cells with  `Guillaume`  and  `Salva`
        -   The second row should contain two cells with  `Paulette`  and  `Salva`
        -   The third row should contain two cells with  `Antoine`  and  `Salva`
    -   Use the keyword  `append`  only once to attach all the elements of the table to the page
-   Call the  `createFamilyTree`  function

**Requirements:**

-   You must use jQuery only to generate the HTML tag and attach it to the page
-   The entire table code should be contained in one string

**The table created by your script should look like this**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/b65cd64b2fe0bf2a2efd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=db1be160e58266aa57bab6d9a8ade5a0d1ff40bac3140c2af056ade97ba86254)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `2-index.html`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21852-carousel)

File  `2-index.html`  is present

[](https://intranet.hbtn.io/projects/2380#task-21852-carousel)

Help

**0/11** pts

### 3. Chain DOM elements

mandatory

**In a file  `3-index.html`, reuse the template you created previously. Reuse also the function named  `createFamilyTree`:**

-   The table is containing the exact same values as the previous task
-   This time, create each element one by one
-   Use the keywords  `append`  for each element and  `text`  for the cells
-   Do not create any intermediate variable
-   Call the  `createFamilyTree`  function

**Tips:**

-   You can append multiple elements at once, by separating the elements with a comma

**Requirements:**

-   You must use jQuery only to generate the HTML tag and attach it to the page

**The table created by your script should look like this**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/ec35dc2f7b81b4be4a47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=23134e2d506ff4c2a98d8da3baa47bf10eaa0fcfc7aa81356265a2cbcd235ea9)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `3-index.html`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21853-carousel)

File  `3-index.html`  is present

[](https://intranet.hbtn.io/projects/2380#task-21853-carousel)

Help

**0/10** pts

### 4. HTML function

mandatory

**In a file  `4-index.html`, reuse the template you created in the previous task. Reuse also the function named  `createFamilyTree`.**

-   Create a new function  `replaceFamilyTree`:
    -   It should replace the childrens of the  `tbody`  elements with a new  `tr`
    -   The  `tr`  element should contain two cells with  `Gerard`  and  `Bonissa`  in each
-   Make sure  `createFamilyTree`  and  `replaceFamilyTree`  are called

**Requirements:**

-   You must use the keyword  `html`  to replace the content of the table

**The table created by your script should look like this**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/dac8d3e497a6b0fef6ec.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3328443acb13668d58a7138346d24d090e92d0b89550ac297a2d7988fb5b0e1b)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `4-index.html`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21854-carousel)

File  `4-index.html`  is present

[](https://intranet.hbtn.io/projects/2380#task-21854-carousel)

Help

**0/10** pts

### 5. Click attribute and remove function

mandatory

**In a file  `5-index.html`, reuse the template you created previously.**

-   Remove the  `createFamilyTree`  and  `replaceFamilyTree`  functions
-   Create a function  `createFamilyTree`:
    -   It should append to the  `body`  an empty table, with  `thead`  and two cells with text  `Firstname`  and  `Lastname`, respectively
    -   It should append an empty  `tbody`  element to the  `table`  after the  `thead`
-   Create a function  `addNewMember`:
    -   It accepts two arguments  `firstName`(string) and  `lastName`(string)
    -   It appends to the body of the  `table`  a new row with three cells
    -   The first cell displays the  `firstName`, the second cell displays the  `lastName`
    -   The third cell displays  `(x)`
    -   On click on the third cell, it should remove the row
    -   Add CSS to the third cell to have an  `orange`  background
-   Calls the function  `createFamilyTree`
-   Using  `addNewMember`, generate a fake table with:
    -   the first row  `Guillaume`,  `Salva`
    -   the second row  `Arielle`,  `Snizt`
    -   the third row  `Fanette`,  `Snizt`
    -   the fourth row  `Gerard`,  `Snizt`
    -   the fifth row  `Victor`,  `Salva`

**Requirements:**

-   You must use the keywords  `click`,  `css`, and  `remove`

**The table created by your script should look like this:**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/6aa4c6aafa86f320f78d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d78b0c296712d91e76aeaf1be06fff54e62a95b50983aaf16aebe438ccebb8e4)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `5-index.html`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21855-carousel)

File  `5-index.html`  is present

[](https://intranet.hbtn.io/projects/2380#task-21855-carousel)

Help

**0/23** pts

### 6. Val, before, and prepend functions

mandatory

**In a file  `6-index.html`, reuse the template you created previously.**

-   Reuse the function  `createFamilyTree`  you wrote in the previous task
-   Reuse the function  `addNewMember`  you wrote in the previous task, and add the following modification:
    -   The function should accept a new argument  `position`(string)
    -   When position is equal to  `before`, it should add the row at the top of the table
    -   Otherwise, it should add the row at the bottom of the table
-   Write a function  `createForm`:
    -   It should add before the table two  `input`  of type  `text`
    -   It should add a  `select`  with two options as well:  `before`  and  `after`  with corresponding  `Before`  and  `After`  text
    -   It should add a  `input`  of type  `submit`  as well
        -   When the user clicks on the submit, it should call the function  `addNewMember`  with the value of the two inputs and the value of the select element
-   Call the function  `createFamilyTree`
-   Call the function  `createForm`

**Requirements:**

-   You must use the keywords  `first`,  `before`, and  `prepend`
-   To select the second input, use the  `nth-of-type`  selector

**The form created by your script should look like this:**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/06a560c3cf7cbd67ebd4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b130f611f5ae91840a86acf922d8b55487f39a182ca1ab881fde412a586a898f)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `6-index.html`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21856-carousel)

File  `6-index.html`  is present

[](https://intranet.hbtn.io/projects/2380#task-21856-carousel)

Help

**0/22** pts

### 7. Query - Setup your dev environment

mandatory

**In a file  `7-index.html`, reuse the template you created in the previous task**

-   Remove the functions from the  `script`
-   Import jQuery using the CDN and make sure you can access the ajax methods

-   Create a form:

    -   Create a function  `createSearchForm`, it should append to the body:
        -   An empty  `input`  of type  `text`  without ID, name, or class
        -   An  `input`  of type  `submit`
            -   When the user clicks on the submit button, it should query the function  `queryWikipedia`  that you are going to create with the value of the text  `input`
        -   An empty  `ul`  element
-   Create a function  `addNewArticle`  to add new items to a list

    -   It accepts three arguments  `id`(string),  `title`(string), and  `snippet`(string)
    -   It create an element  `li`
        -   Within the  `li`, add two  `paragraph`  elements
            -   The first paragraph contains a  `span`  tag with the following text:  `id -`, then a  `b`  element with the  `title`
            -   The second paragraph, should contain the  `snippet`
    -   Appends the  `li`  to the  `ul`  element (created by  `createSearchForm`)
-   Implement a get function: create a function  `queryWikipedia`

    -   It accepts one argument  `search`(string)
    -   Create a data object with attributes required to query a search using the string passed in the argument with Wikipedia
    -   For each result returned by the API, call the function  `addNewArticle`  with the result’s  `pageid`,  `title`, and  `snippet`
-   Call the function  `createSearchForm`  when the page loads


**Requirements:**

-   Look at the documentation from Wikipedia to query the API  `https://www.mediawiki.org/wiki/API:Search`
-   Use the minified only version of jQuery, so you can access the ajax methods
-   When adding the  `snippet`, make sure that the HTML coming from Wikipedia is correctly displayed

**The form created by your script should look like this:**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/1aa9995ca67d199e7ddc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6181f8035b8aceb820bb47927ef0a2182f48f1ea0fe74a062865650c1e23b52e)

**Query results should display like this:**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/57dd8327b2855039d8e2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a2355118576c64a3e569e9e482e6c7c40a7955373c478ee41344b2bc7c830af5)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `7-index.html`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21857-carousel)

File  `7-index.html`  is present

[](https://intranet.hbtn.io/projects/2380#task-21857-carousel)

Help

**0/23** pts

### 8. Pagination

mandatory

**In a file  `8-index.html`, reuse the code from the previous task**

-   Modify the function  `createSearchForm`:

    -   It should append to the body another list, with the id  `pagination`
-   Modify the function  `queryWikipedia`:

    -   Add a new parameter named  `offset`(number)
    -   By default, the offset should be set to  `0`
    -   Modify the data object to add the  `offset`
    -   When you receive the response from the API, call the function  `buildPagination`  that you are going to create below
-   Create a new function named  `buildPagination`:

    -   It accepts three arguments  `numberOfItems`(number),  `itemsPerPage`(number), and  `currentOffset`(number)
    -   When the function is called, reset the pagination list to an empty tag
    -   Write a loop that will display the pagination (using the total number of items divided by the number of items per page)
    -   For each page, create a list item
        -   Add some CSS for each item (`cursor: 'pointer'`,  `10px`  margin left, and bold when this is the current page)
        -   The text of the item should be the page number
        -   When clicking on a page number, it should call the function  `queryWikipedia`  with the right offset

**Requirements:**

-   Use the  `totalhits`  value from Wikipedia to define the total number of items
-   Display 10 items per page
-   Make sure your pages are displayed in an horizontal line

**The form created by your script should look like this:**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/1aa9995ca67d199e7ddc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6181f8035b8aceb820bb47927ef0a2182f48f1ea0fe74a062865650c1e23b52e)

**The query results should display like this, notice how the  `12`  is in bold, because that is the current page**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/4f86ed3cadb452d74841.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a96ea148fdbae1d372877fc5575a5f47f68d0116f3d478709bbf2b4bd272ea95)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `8-index.html`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21858-carousel)

File  `8-index.html`  is present

[](https://intranet.hbtn.io/projects/2380#task-21858-carousel)

Help

**0/18** pts

### 9. Wrap/unwrap

mandatory

**In a file  `9-index.html`, reuse the code from the previous task**

-   In the header, add some CSS, with the  `style`  tag:

    -   Add a new class named  `loading`
        -   Set the opacity at 0.2 within that class
-   In your  `script`  with your other functions, create a function named  `displayLoading`:

    -   It accepts one argument  `loading`
    -   It select the first  `ul`  element of the page
    -   If  `loading`  is true, it wraps the element with a  `div`  tag and the class  `loading`
    -   If  `loading`  is false, it unwrap the  `ul`  from the  `div`
-   Modify the  `queryWikipedia`  function:

    -   It should call the function  `displayLoading`  before querying the API
    -   Once the API returns the value, it should remove the opacity by calling the function again

**Requirements:**

-   You must use the  `wrap`  and  `unwrap`  functions of Jquery

**How the page should look when results are loading**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/34aa8b01dbfb14fbb873.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a62375bdde2f89f2d403360d1afa8fa73a40a2574844e02a1196b5ba74fecea3)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `9-index.html`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21859-carousel)

File  `9-index.html`  is present

[](https://intranet.hbtn.io/projects/2380#task-21859-carousel)

Help

**0/11** pts

### 10. Another Get API

mandatory

**Setup your dev environment**

-   Install  `json-server`  within your projects using  `npm`:
-   Run the server using  `node_modules/.bin/json-server --watch db.json`

**You are provided with this  `db.json`, don’t forget to push it, you can change the values of the  `id`,  `title`,  `author`,  `postId`,  `name`  as you like**

```
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    },
    {
      "title": "fd",
      "author": "fffff",
      "id": 2
    },
    {
      "title": "fd",
      "author": "fffff",
      "id": 3
    },
    {
      "title": "f",
      "author": "f",
      "id": 4
    },
    {
      "title": "",
      "author": "",
      "id": 5
    },
    {
      "title": "",
      "author": "",
      "id": 6
    },
    {
      "title": "",
      "author": "",
      "id": 7
    },
    {
      "title": "",
      "author": "",
      "id": 8
    },
    {
      "title": "",
      "author": "",
      "id": 9
    },
    {
      "title": "",
      "author": "",
      "id": 10
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}

```

**In a file  `10-index.html`:**

-   Reuse your template from the previous task, remove the functions in your  `script`  and the  `style`  in the head
-   Make sure you import jQuery using the CDN and make sure you can access the ajax methods

-   Create a function  `addPostRow`:

    -   It takes into argument  `data`  (object)
    -   It append to the body a paragraph
    -   The paragraph should contain a  `span`  element with the text  `Post created with id ID, title: TITLE, author: AUTHOR`
        -   Each variable is contained in the  `data`  object
-   Create a function named  `listPosts`:

    -   It should query your local server on the  `posts`  endpoint
    -   When the server return a 200 response, it should call the function  `addPostRow`  for each element in the response
    -   When the server is unavailable, display an alert with the message  `Server Error`
-   Call the function  `listPosts`  when your page loads


**Requirements:**

-   You must use the  `get`  function from jQuery

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `10-index.html, db.json`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21860-carousel)

Files  `10-index.html`  and  `db.json`  are present

[](https://intranet.hbtn.io/projects/2380#task-21860-carousel)

Help

**0/12** pts

### 11. Post query

mandatory

**In a file  `11-index.html`, reuse the code you previously wrote**

-   Create a new function  `buildForm`:

    -   It appends to the body a  `form`  element
    -   Inside the form, add a  `div`  element, with a  `label`  for  `author`  with text  `Author`  and an  `input`  of type  `text`  with id  `author`
    -   Inside the form, add a  `div`  element, with a  `label`  for  `title`  with text  `Title`  and a  `textarea`  with id  `title`
    -   Inside the form, add an  `input`  of type  `submit`
    -   When clicking on the submit button, call the function  `sendForm`  detailed below
-   Create a new function  `sendForm`:

    -   It should add after the  `form`, the text  `About to send the query to the API`
    -   It should create a data object, with the  `title`  and  `author`  attributes. The values are the ones within the inputs
    -   It should send a  `POST`  query to your server endpoint  `posts`  with the data
    -   If the query succeed, call the function  `addPostRow`  with the data coming back from the API
    -   If the query does not succeed, it should display an alert with the message  `Error sending the POST query`
-   Call the functions  `listPosts`  and  `buildForm`  when your page loads


**Requirements:**

-   When clicking on the label, the input text should be selected by the browser
-   When pressing enter on the input text, the form should be submitted without reloading the page
-   You must use the  `after`  function from jQuery

**With the JSON server running, your  `11-index.html`  should look something like this in your browser (does not have to be exactly the same, rows and values depend on what’s in your  `db.json`)**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/2d127c7a16400751c442.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=80fc7da06b029e7894a1e057ebe74c5cb84f4f55858108ab9098d865f613dee2)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `11-index.html, db.json`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2380#task-21861-carousel)

Files  `11-index.html`  and  `db.json`  are present

[](https://intranet.hbtn.io/projects/2380#task-21861-carousel)

Help

**0/20** pts

### 12. Delete query

mandatory

**In a file  `12-index.html`, reuse your code from the previous task**

-   Modify the function  `addPostRow`:

    -   Add an id attribute to the paragraph with  `row-ID`  (the ID being the one of the post)
    -   Append a  `span`  element with the text  `(delete)`  to the  `p`, this  `span`  should come before the  `span`  with the post information
        -   On click, call the function  `deletePost`  with the post id
-   Create a function  `deletePost`:

    -   It accepts one argument  `id`(number)
    -   Send a  `DELETE`  query to the  `posts`  endpoint with the id of the post
    -   If the query is successful, remove the row from the body
    -   If the query is not successful, display an alert with the message  `Post was not deleted`

**Requirements:**

-   You must use the function  `remove`  from jQuery

**With your JSON server running,  `12-index.html`  should look like this in your browser, actual rows and values depend on what’s in your  `db.json`**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/b8759684f071da1e1449.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230429%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230429T123847Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5fdb9b7693799834e0e0f9ee75f46d1f241166173dcd570abb21c221c5581ced)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `JQuery_advanced`
-   File:  `12-index.html, db.json`