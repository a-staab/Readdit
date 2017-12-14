
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

function getPostsFor(subreddit) {

    $.get("http://www.reddit.com/r/" + subreddit + "/new.json?sort=new&limit=5")
    .then(function(response) {
        var posts = response.data.children;
        // Make a empty list 
        for (i in posts) {
            var data = posts[i].data
            var author = data.author;
            var text = data.selftext;
            var created_at = data.created_utc;
            var url = data.url;
            var image
            // make an image souce array
            // make an object (JSON)
            // add object to list
        }

        //resolve(object)



    }, function(reason) {
        alert("Unable to retrieve " + subreddit + " from Reddit.");
        console.log(reason);
    })

}


function refreshSubreddits() {

    $('#subreddits').empty();
    for (var i=0; i < subreddits.length; i++) {
        var subredditName = "<li>" + subreddits[i] + "<button type='button' class='delete' id='delete-" + i + "'>" + "Delete</button></li>";
        $('#subreddits').append(subredditName);
    }
    setDeleteListener();
}


$('#add-subreddit').on('click', function (evt) {
    evt.preventDefault();
    var subreddit = $('#subreddit').val();
    $('#subreddit').val("");
    add_new(subreddit);
    render();

});

function setDeleteListener(){
    $('.delete').click(function (evt) {
    evt.preventDefault();
    var toRemove = parseInt(this.id.split("-")[1], 10);
    removeSubreddit(toRemove);
    render();
});

}
