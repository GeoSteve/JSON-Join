var family1 = [
    {id: 1, firstName: 'Steve', interests: ['beer']},
    {id: 5, firstName: 'Tucker'},
    {id: 3, firstName: 'Jackson'}
];

var family2 = [
    {id: 1, firstName: 'Steve', lastName: 'Heinrich'},
    {id: 2, firstName: 'Erin', lastName: 'Heinrich'},
    {id: 3, lastName: 'Heinrich'},
    {id: 4, firstName: 'Griffin', lastName: 'Heinrich'}
];



// JSON Object Join on ID, SQL Join Style (with LowDash)
var joinResult = [];
_.forEach(family1, function(currentUser) {
    // Join common objects
    var joinUser = _.find(family2, {'id': currentUser.id});
    joinResult.push(_.assign(currentUser, joinUser));
});
// Merge in the remaining objects from 2nd array
joinResult = joinResult.concat(family2);

// Limit to unique objects
joinResult = _.uniq(joinResult, 'id');
// Reoder the array of objects
joinResult = _.sortBy(joinResult, 'id');
