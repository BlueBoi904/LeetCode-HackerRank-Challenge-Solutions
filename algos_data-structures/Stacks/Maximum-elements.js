class Stack {
    constructor() {
        this.items = [];

    }
    //Push()
    push(element) {
        this.items.push(element);
    }
    //Pop()
    pop() {
        //Check for underflow
        if (this.items.length === 0) {
            return 'Underflow';
        }
        return this.items.pop();
    }

    //maximumElement()
    getMax() {
        //Loop through the stack and find the max
        let maxItem = this.items[0];
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] > maxItem) {
                maxItem = this.items[i];
            }
        }
        return maxItem;
    }
}

function processData(input) {
    let stack = new Stack();
    const inputs = input.split('\n');
    const numberOfQuerys = Number(inputs[0]);

    //Loop through the inputs
    for (let i = 0; i < numberOfQuerys + 1; i++){
        const query = inputs[i];
        
        const type = Number(query.split(' ')[0]);
        
        const value = Number(query.split(' ')[1]);
        switch (type) {
            case 1:
                stack.push(value);
                break;
            case 2:
                stack.pop();

                break;
            case 3:
                 console.log(stack.getMax());
                break;
        }
    }
}