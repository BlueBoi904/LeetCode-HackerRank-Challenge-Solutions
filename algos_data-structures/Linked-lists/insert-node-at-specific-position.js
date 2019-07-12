// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    // Insert x at position
    const x = new SinglyLinkedListNode(data);
    // Check if head is null, if it is return the new node
    if (head === null) {
        return x;
    }
    // Check if the node needs to be inserted at the beginning of the list
    if (position === 0) {
        x.next = head;
        return x;
    }

    // Create index, prev, and temp values

    let index = 0;
    let prev = null;
    let current = head;
    // Loop through checking if current is null
    while (current) {
        // Main check if our index matches our position
        if (index === position) {
            //x points foward to current x => current
            x.next = current;
            // prev points forward to x: prev => x
            prev.next = x;
            //return head
            return head;
        }
        // Set previous to current
        prev = current;
        // Set current to the next node
        current = current.next;
        // Increment index
        index++;
    }
}