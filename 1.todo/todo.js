function todoList() {
    var item = document.getElementById("todoInput").value; // fetches value of the user input
    var text = document.createTextNode(item); // transforms user's input into text node
    var newItem = document.createElement("li"); // creates new li element in a list
    newItem.appendChild(text); // appends newly created text node with the user's input value into a newly created list item
    document.getElementById("todoList").appendChild(newItem); // appends the above new item into the todo list
    todoInput.value = ""; // clears up last user's input after click and prevents adding empty list items upon click


    newItem.addEventListener('click', function() {
        newItem.style.textDecoration = "line-through"; // crosses out item on click
    })



    // newItem.addEventListener('dblclick', function() {
    //     newItem.remove(); // removes list item on dbl click

    //     // Below code does the same as <newItem.remove()> but is more verbose:

    //     // document.getElementById("todoList").removeChild(newItem);
    // })

}