var userList1 = [
    {id: 1, firstName: 'Steven', interests: ['beer']},
    {id: 5, firstName: 'Tucker', lastName: 'Max', interests: ['debauchery']},
    {id: 3, firstName: 'Jack'}
];

var userList2 = [
    {id: 1, firstName: 'Steven', lastName: 'Heinrich'},
    {id: 2, firstName: 'Aaron', lastName: 'Henry'},
    {id: 3, lastName: 'Griffin'},
    {id: 4, firstName: 'Hank', lastName: 'Berman'}
];

// Dependency: lodash.js
function jsonJoin(input1, input2, joinKey) {
    var joinResult = [],
        joinOptions = {},
        joinUser = {};

    _.forEach(input1, function(currentUser) {
        joinOptions[joinKey] = currentUser.id // Set key from variable by using object literal
        // Find macthing object
        joinUser = _.find(input2, joinOptions);
        // Join common objects
        joinResult.push(_.assign(currentUser, joinUser));
    });

    // Merge in the remaining objects from 2nd array
    joinResult = joinResult.concat(input2);

    // Limit to unique objects
    joinResult = _.uniq(joinResult, joinKey);

    // Reoder the array of objects
    joinResult = _.sortBy(joinResult, joinKey);

    return joinResult;
}

myJoin = jsonJoin(userList1, userList2, 'id');
console.log(JSON.stringify(myJoin, null, '\t'));