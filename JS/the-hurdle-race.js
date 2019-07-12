// Complete the hurdleRace function below.

/*
Complete the hurdleRace function in the editor below. It should return the minimum units of potion Dan needs to drink to jump all of the hurdles.

hurdleRace has the following parameter(s):

k: an integer denoting the height Dan can jump naturally
height: an array of integers denoting the heights of each hurdle
*/


function hurdleRace(k, height) {
    let maxHeight = height.reduce((acc, cur) => Math.max(acc,cur));
    if (k >= maxHeight){
        return 0;
    }
    return (maxHeight - k);
}

hurdleRace(1,[1,2,3,3,2]);