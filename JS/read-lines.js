// ii = parseInt(readLine());
// dd = parseFloat(readLine());
// ss = readLine();

// console.log(i + ii);
// console.log((parseFloat(d) + dd).toFixed(1))
// console.log(s + ss);

const fn = _num =>{
    return Math.round(_num)+ (5 -(Math.round(_num)%5))
}

console.log(fn(83));