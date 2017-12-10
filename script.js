
var subreddits = [];

function add_new(subreddit) {
    subreddits.push(subreddit);
}

function removeSubreddit(subredditIndex) {

    subreddits.splice(subredditIndex, 1);

}

function render() {

    refreshSubreddits();
    console.log(subreddits);

}

function refreshSubreddits() {

    $('#subreddits').empty();
    for (var i=0; i < subreddits.length; i++) {
        var subredditName = "<li>" + subreddits[i] + "<button type='button' class='delete' id='delete-" + i + "'>" + "Delete</button></li>";
        $('#subreddits').append(subredditName);
    }
    addDeleteListener();
}


$('#add-subreddit').on('click', function (evt) {
    evt.preventDefault();
    var subreddit = $('#subreddit').val();
    $('#subreddit').val("");
    add_new(subreddit);
    render();

});

function addDeleteListener(){
    $('.delete').click(function (evt) {
    evt.preventDefault();
    var toRemove = parseInt(this.id.split("-")[1], 10);
    removeSubreddit(toRemove);
    render();
});

}
