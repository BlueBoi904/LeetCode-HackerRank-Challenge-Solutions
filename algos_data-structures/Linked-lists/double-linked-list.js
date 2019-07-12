class LinkedList {
    constructor(head){
        this.head = head;
        // Head is current 
        this.tail = head;
        // Tail the last node in the list since this list is double linked
    }

    insertNode(value){
        // First node
        let currentNode = this.head;
        let prevNode = this.head;
        // Node has a next value
        while(currentNode.next !== null){
            //prevNode = currentNode; //Reference to current node
            prevNode = currentNode;
            currentNode = currentNode.next;                                    
        }
        // Adding newNode at the end of the basic linked list
        const newNode = new Node(value);
        currentNode.next = newNode;
        newNode.prev = currentNode;
        this.tail = newNode;
    }
    
    logNodesForward(){
        let currentNode = this.head;
        console.log(`Starting Node: ${currentNode.value}`)
        while(currentNode.next !== null){
            currentNode = currentNode.next
            console.log(`Next Node Value ${currentNode.value}`)
            if(currentNode.prev !== null){
                console.log(`Prev Node Value ${currentNode.prev.value}`)
            }            
        }
    }

    logNodesBackward(){
        let currentNode = this.tail;
        console.log(`Starting Node: ${currentNode.value}`)
        while(currentNode.prev !== null){
            currentNode = currentNode.prev
            console.log(`Next Node Value ${currentNode.value}`)
        }
    }

    

    
}

class Node {
    constructor(value){
        this.value = value
        this.next = null;
        this.prev = null;
    }
}

// Simple traversal of a linked list
const List = new LinkedList(new Node('A'))

List.insertNode("B");
List.insertNode("C");

List.logNodesBackward();
