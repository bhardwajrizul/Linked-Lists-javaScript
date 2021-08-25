// Example of a linked list in javascript that has the following mapping  // 10 --> 5 --> 16 --> null

// let exampleLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16, 
//                 next: null
//             }
//         }
//     }
// };


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Creating a Node Class  (Templete for Each item in the linked list) 
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


// Creating Singly linked list

class LinkedList{
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    
    // Adding a node at the end of the Linked List
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // Adding a node at the beginning of the Linked List
    prepend(value) {
        
        const newNode = new Node(value); 
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // Adding a node at a specified index in the Linked List
    insert(index, value) {
        const newNode = new Node(value);
        let currentNode = this.head;
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        for (let i = 1; i < index ; i++) {
            if (currentNode) {
                currentNode = currentNode.next;
            } else {
                this.append(value);
                return this;
            }
        }
        if (currentNode){
            newNode.next = currentNode.next;            
            currentNode.next = newNode;
            this.length ++;
        } else {
            this.append(value);
            return this;
        }   
        return this;
    }

    // Removing a node at a specified index in the Linked List

    remove(index) {
        let joinNode;
        let currentNode = this.head;
        let newNode = this.head;
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this;
        }
        for (let i = 0; i < index; i++) {
            if (currentNode){
                currentNode= currentNode.next;
            } else {
                return new Error("\n--> !!! Index Out of Range !!! <--");
            }
        }
        for (let j = 0; j < index - 1; j++) {
            if (newNode){
                newNode= newNode.next;
            } else {
                return new Error("\n--> !!! Index Out of Range !!! <--");
            }
        }
        if (currentNode) {
            joinNode = currentNode.next;
            newNode.next = joinNode;
            this.length--;
        } else {
            return new Error("\n--> !!! Index Out of Range !!! <--");
        }
        return this;
    }

    // Displaying the value of each node in Linked List as an Array

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Inatializing a new Linked List Object 
const myLinkedList = new LinkedList(2);

myLinkedList.append(10);
myLinkedList.prepend(5);
myLinkedList.insert(1, 1);
myLinkedList.remove(1);

console.log(myLinkedList);
myLinkedList.printList();
