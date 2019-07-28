/*
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
Notes:

You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

*/

class MyQueue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }

  peek() {
    //peek() -- Get the front element.
    return this.inbox[0];
  }
  push(value) {
    this.inbox.push();
  }
  pop() {
    //pop() -- Removes the element from in front of queue.
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop());
    }
    let first = this.outbox.pop();
    while (this.outbox.length) {
      this.inbox.push(this.outbox.pop());
    }
    return first;
  }
  empty() {
    //empty() -- Return whether the queue is empty.
    return this.inbox.length === 0;
  }
}
