# Document Object Model

- [Document Object Model](#document-object-model)
  - [**Event Listeners**](#event-listeners)
  - [Reacting to Keypress Events](#reacting-to-keypress-events)

**Selecting Elements**

- **document.querySelector('.className')** # to select by class
- **document.querySelector('#id')** # to select by ID
- Document.querySelector() selects the entire element by the class or ID and then we can use methods such as textContent to get the inner properties.
- **document.getElementByID('id')** can also be used to select elements by ID

- **document.querySelectorAll('.classname')**; # Selects ALL elements that match the class or ID

Ex:

```
# Logs the text inside of an html element
console.log(document.querySelector('.class').textContent);
```

**Element can have multiple classes defined as**:

```
 <button class="btn check"> </button>
```

**We can reference this button using any of the class names**

- document.querySelector('.check') will select the button element

## **Event Listeners**

- We can select an element and add an event listener to it.
  **addEventListener() method**
- document.querySelector('.class').addEventListener('eventtype' , event handler function)

**addEventListener() is a special kind of function that takes 2 parameters: event type and then the event handler function**

Ex: Logging an element to the console when we click it using event handlers

```
document.querySelector('.check').addEventListener('click',
function() {
    console.log(document.querySelector('.check').value);
}
)
```

- **Updating the content of a div after clicking a button.**

```
document.querySelector('.buttonclass').addEventListener('click',
()=>document.querySelector('.divclass')
.textContent='value to change div text to')
```

- **Updating CSS of an element from the DOM**

```
document.querySelector('.class').style.backgroundColor = '#60b347';

document.querySelector('.class').style.width = '30rem' ;

```

Updating text of an element:

```
document.querySelector('.class').textArea = 'changed text';
```

**Good Pattern**

We can read an element using document.QuerySelector() and then remove a class on it by using element.classList.remove('class')

Example:

```
# Select an element
const element = document.querySelector('.class') ;

# Remove a class from the element

element.classList.remove('class');

```

**_Note: The remove method does not require the . in the class name._**

## Reacting to Keypress Events

- Keypress elements are global events
- We usually list them on the global document
- **document.addEventListener('keyup' , func)** # when we lift fingers off from the key
- **document.addEventListener('keydown' , func)** # as soon as we press the key
- **document.addEventListener('keyPress' , func)** # fires continuously as our finger is on the key

**Whenever we press a key, it gets logged to an event object.**

```
document.addEventListener('keydown',(e)=>{
  console.log(e);
} )

# e.key will return the exact key pressed
```

**Console.log(e) of the keydown event**
![event](/JS/Section4_DOM/img/F236CCBC3350D9DD.png)

**Checking if an event has a particular class**

- document.querySelector('.class').classList.contains('class') #returns Boolean

**We can update the src attribute of an image element,(or any element)**

- select the element
- **element.src = 'newimagelocation'**

**Toggle() method**

- Removes the class if it is present
- Adds the class if it is not present

Example:

```
document.querySelector('.class').classList.toggle('classname');
```
