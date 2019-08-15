// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
  if (head === null) {
    head = new SinglyLinkedListNode();
    head.data = data;
  } else {
    let currentNode = head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new SinglyLinkedListNode();
    currentNode.next.data = data;
  }
  return head;
}
