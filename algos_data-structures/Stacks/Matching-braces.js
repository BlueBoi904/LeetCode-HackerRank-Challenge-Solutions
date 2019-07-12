// Complete the isBalanced function below.
function isBalanced(s) {
    let stack = [];
    let result = 'YES';
    s.split('').forEach(val => {
        switch(val){
            case '{':
                stack.push('{');
                break;
            case '(':
                stack.push('(');
                break;
            case '[':
                stack.push('[');
                break;
            default:
                let test = stack.pop();
                if (test !== val ){
                    result = 'NO';
                }

        }
    })
    if (stack.length){
        result = 'NO'
    }
    return result;
}