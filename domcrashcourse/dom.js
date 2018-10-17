//
// // console.dir(document);
// // Returns the properties of an object
//
//
// console.log(document.domain);
// // returns the domain
//
// console.log(document.URL);
// // returns the url's document
//
// console.log(document.title);
// // returns the title of the webpage
//
// // document.title = 123
// // Changes the title to 123
//
// console.log(document.doctype)
// // Returns the type of document we are working in.
//
// console.log(document.head);
// // Returns the head seaction of the HTML document.
//
// console.log(document.body);
// // Returns the body of the document.
//
// console.log(document.all);
//
// // Returns an arrayof HTML collection
//
// console.log(document.all[1]);
// // Returns the element of the index position of the document.
//
// console.log(document.forms[0]);
// // Returns the element form of the document.
//
// console.log(document.forms);
// // Return an HTML Collection from the forms element.
//
// console.log(document.links);
// // Return the links of the document
//
// console.log(document.images);
// // Returns the image of the document
//
// // getElementById
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
//
// // Returns the element with the specify Id & store in the headerTitle variable
//
// // How to change the text of an element.
//
// // headerTitle.textContent = 'Hello';
// // Returns the full text of a node.
//
//
// // headerTitle.innerText = 'Goodbye';
// // Returns the visible text contained in a node(w/ styles). If the node
// // has a span tag for example, it won't show.
//
// // headerTitle.innerHTML = '<h3> Hello </h3>;'
// // newP.innerHTML = '<p> String </p>';
//
//
// // Change the style with JS //
//
// // header.style.borderBottom = 'solid 3px #000';
//
// // getElementsByClassName //
//
// let items = document.getElemensByClassName('list-group-item');
// console.log(item);
// console.log(item[1]);
// // Stores all elements that has the specify class.
//
// // Now you can change those nodes with the class 'list-group-item'

// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// // items[1].style.backgroundColor - '#f4f4f4';
//
// for (let i = 0; i < items.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// querySelector //

// let header = document.querySelector('#main-header')
// header.style.borderBottom = 'sollid 4px #ccc';
//
// let input = document.querySelector('input');
// input.value = 'Hello World'
// console.log(input)
//
// let submit = document.querySelector('input[type="submit"]')
// submit.value='SEND';


// let item = document.querySelector('.list-group-item');
// console.log(item)
//
// // The querySelector properties only returns one element or node.
//
//
// let items = document.querySelectorAll('.list-group-item');
// item.style.color = 'red';
// console.log(items);
// // Returns a node list with all queried items.
//
// let lastItem = document.querySelector('.list-group-item');
// lastItem.style.color = 'coral';
// console.log(lastItem)




// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// console.log(lastItem)

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// console.log(thirdItem)

// Query Selector all

// let titles = document.querySelector('.title');
//
// console.log(titles);
// titles[0].textContent = 'Hello';
//
// let odd = document.querySelector('li:nth-child(odd)');
// let even = document.querySelector('li:nth-child(odd)');
//
// for(let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f1f1f1';
//   even[i].style.backgroundColor = '#ccc'
// }
