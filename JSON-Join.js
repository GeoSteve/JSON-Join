var DraftRound1 = [
    {id: 1, firstName: 'Steven', interests: ['beer']},
    {id: 5, firstName: 'Tucker', lastName: 'Max', interests: ['debauchery']},
    {id: 3, firstName: 'Jack'}
];

var DraftRound2 = [
    {id: 1, firstName: 'Steven', lastName: 'Heinrich'},
    {id: 2, firstName: 'Aaron', lastName: 'Henry'},
    {id: 3, lastName: 'Griffin'},
    {id: 4, firstName: 'Hank', lastName: 'Berman'}
];


function jsonJoin(input1, input2, joinKey) {
    var joinResult = [];

    _.forEach(input1, function(currentUser) {
        // Join common objects
        var joinOptions = {}
        joinOptions[joinKey] = currentUser.id
        var joinUser = _.find(input2, joinOptions);
        joinResult.push(_.assign(currentUser, joinUser));
    });

    // Merge in the remaining objects from 2nd array
    joinResult = joinResult.concat(input2);

    // Limit to unique objects
    joinResult = _.uniq(joinResult, 'id');

    // Reoder the array of objects
    joinResult = _.sortBy(joinResult, 'id');

    return joinResult;
}

myJoin = jsonJoin(DraftRound1, DraftRound2, 'id');