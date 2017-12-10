
var subreddits = [];

function add_new(subreddit) {
    subreddits.push(subreddit);
}

$('#add-subreddit').on('click', function (evt) {
    evt.preventDefault();
    var subreddit = $('#subreddit').val();
    add_new(subreddit);

}