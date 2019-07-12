function jumpingOnClouds(c) {
    let minimalJumps = 0;

    //Loop through the array and check arr[i + 2].
    let i = 0;
    while (i < c.length - 1) {
        if (isValidJump(2, i)) {
            i += 2;
            minimalJumps += 1;
        } else if (isValidJump(1, i)) {
            i += 1;
            minimalJumps += 1;
        } else {
            console.log('finished')
        }
    }
    // Check if arr[i + 2] === 1, if not it's a valid jump

    function isValidJump(jumpDistance, index) {
        const jumpToPosition = jumpDistance + index;
        const path = [];
        if (jumpToPosition < c.length - 1) {
            if (c[jumpToPosition] === 1) {
                console.log(`Can't jump to ${jumpToPosition}`)
                return false
            } else {
                console.log(`Jumping To ${jumpToPosition}`)
                path.push(`Jump to index: ${jumpDistance}`);
                return true
            }
        } else {
            path.map((string) => console.log(string));
            return true;
        }
    }

    console.log(minimalJumps);
    //return minimalJumps
    return minimalJumps;
}

jumpingOnClouds([0,0,1,0,0,1,0]);