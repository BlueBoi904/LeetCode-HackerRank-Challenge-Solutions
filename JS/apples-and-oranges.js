function countApplesAndOranges(s, t, a, b, apples, oranges) {
    /*
    s: integer, starting point of Sam's house location.
    t: integer, ending location of Sam's house location.
    a: integer, location of the Apple tree.
    b: integer, location of the Orange tree.
    apples: integer array, distances at which each apple falls from the tree.
    oranges: integer array, distances at which each orange falls from the tree.
    */
    let applesCount = 0;
    let orangesCount = 0;

    //Loop through apple array
    for (let i = 0; i < apples.length; i++){
        // Add apples[i] + a to see if it falls within range [s,t]
        if ((apples[i] + a) >= s && (apples[i] + a) <= t ){
            // If it does, applesCount ++
            applesCount ++;
        }
    }
    
    

    //Loop through orange array
    for (let i = 0; i < oranges.length; i++){
        //Add oranges[i] + b to see if it falls within range [s,t]
        if ((oranges[i] + b) >= s && (oranges[i] + b) <= t ){
            // If does, orangesCount ++
            orangesCount ++;
        }
    }
    
    console.log(applesCount);
    console.log(orangesCount);

}