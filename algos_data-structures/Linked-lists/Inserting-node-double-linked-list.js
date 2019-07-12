function sortedInsert(head, data) {
    let newNode = new DoublyLinkedListNode(data);

    let tempHead = head;

    if (head === null) {
        return newNode;
    }


    if (tempHead.data > newNode.data) {
        newNode.prev = null;
        newNode.next = tempHead;
        return newNode
    }

    while (tempHead) {
        if (tempHead.data < newNode.data && tempHead.next === null) {
            newNode.prev = tempHead;
            newNode.next = tempHead.next;
            tempHead.next = newNode;
            return head;
        } else if (tempHead.data < newNode.data && tempHead.next.data >= newNode.data) {
            newNode.prev = tempHead;
            newNode.next = tempHead.next;
            tempHead.next.prev = newNode;
            tempHead.next = newNode;
            return head
        }
        tempHead = tempHead.next
    }


    return head;
}