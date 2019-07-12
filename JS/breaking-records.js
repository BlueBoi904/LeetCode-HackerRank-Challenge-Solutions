/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.

For example, assume her scores for the season are represented in the array . Scores are in the same order 
as the games played. She would tabulate her results as follows:
*/


function breakingRecords(scores) {
    console.log(scores);
    let mostPointsCount = 0;
    let leastPointsCount = 0;
    let mostPointsRecord = scores[0];
    let leastPointsRecord = scores[0];
    let result = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > mostPointsRecord) {
            mostPointsRecord = scores[i];
            mostPointsCount++;
        } else if (scores[i] < leastPointsRecord) {
            leastPointsRecord = scores[i];
            leastPointsCount++;
        }
    }
    result.push(mostPointsCount);
    result.push(leastPointsCount);
    return result;

}

console.log(breakingRecords([ 10, 5, 20, 20, 4, 5, 2, 25, 1 ]));