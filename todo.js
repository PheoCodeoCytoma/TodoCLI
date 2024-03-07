todoList = [];
while(true) {
    let input = prompt("What would you like to do? (new, list, delete, quit)");
    
    if(input === "quit") {
        break;
    }else if (input === "new") {
        input = prompt("What would you like to add to the list?");
        todoList.push(input);
        console.log(todoList);
        console.log(`Added ${input} to your list.`);
    }else if (input === "list") {
        console.log("**************");
        console.log("Here is a list of your todos: ");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i + 1}. ${todoList[i]}`);
        }
        console.log("**************");
    }else if (input === "delete") {
        input = prompt("What is the number of the list item you'd like to delete?");
        if(input === "quit") {
            break;
        }
        while (parseInt(input)) {
            input = parseInt(input);
            console.log(typeof input);
            if (!Number.isNaN(input) && input < todoList.length && input > 0) {
                console.log(typeof input);
                console.log(input)
                deletedItem = todoList[input-1];
                todoList.splice(input-1, 1);
                console.log(`Item: ${deletedItem} is deleted from your list.`)
                break;
            } else {
                input = parseInt(prompt("Please enter a valid number: "))
                console.log(typeof input);
                console.log(input)
            }
        }
    }else {
    console.log("Please enter a recognizable command from the following: new, list, delete, quit");
    }
}

















// if(input === 'list') {
//     console.log("**********");
//     console.log("LIST OF TASKS");
//     console.log("**********");
//     for (let i = 0; i < todos.length; i++) {
//         console.log(`${i}: ${todos[i]}`);
//     }
// }

// if(input === 'new') {
//     let newTodo = prompt("Enter new todo");
//     todos.push(newTodo);
//     console.log("Added Todo");
// }

// if(input === 'delete') {
//     let index = parseInt(prompt("Enter index of todo to delete"));
//     if (!Number.isNaN(index)) {
//         let deleted = todos.splice(index, 1);
//         console.log(`Deleted ${deleted}`);
//     } else {
//         console.log("Invalid index");
//     }
// }