function viralAdvertising(n) {
        let totalLikes = 0;
        let peopleShared = 5;
        let nextDayShared  = 5;
        for (let i = 0; i < n; i++){
            let dayilyLikes;
            dayilyLikes = Math.floor(nextDayShared / 2);
            let dayilyShared = dayilyLikes * 3;
            totalLikes += dayilyLikes;
            peopleShared += dayilyShared
            nextDayShared = dayilyShared;
        }
        return totalLikes;
}


// Recursive solution

function viralAdvertising(n, shared) {
    if (n === 0) {
        return 0;
    }

    shared = shared || 5; // start @ 5 shares
    let liked = Math.floor(shared / 2);
    return liked + viralAdvertising(n - 1, liked * 3);
}