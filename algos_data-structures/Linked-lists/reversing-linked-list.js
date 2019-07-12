/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
//  * @param {ListNode} head
//  * @return {ListNode}
 */
const reverseList = function(head) {
    //Reverse a linked list in linear time
    //As you go through, you reverse pointers on the way in
    //Create temp head var to hold reference
    let previous = null;
    let current = head;
    while (current){
        // Keep track of next value
        let temp = current.next;
        //Swap next and prev
        current.next = previous;
        //Shift previous foward
        previous = current;
        //shift current foward
        current = temp;
        
    }
    return previous;
};