console.log("Hello, world!")

const LogicTweeter = function () {
    const _posts = []
    let _nextIdComment = 1;
    let _nextIdPost = 1;
    const idPostMachanism = () => `p${_nextIdPost++}`
    const idCommentMachanism = () => `c${_nextIdComment++}`
    const getPosts = () => _posts

    const addPost = (str) => {
        _posts.push({ text: str, id: idPostMachanism(), comments: [] })
    }

    const removePost = pid => {
        for (let index in _posts) {
            if (_posts[index].id === pid) {
                _posts.splice(index, 1)
            }
        }
    }

    const addComment = (postId, textComment) => {
        for (let index in _posts) {
            if (_posts[index].id === postId) {
                _posts[index].comments.push({ id: idCommentMachanism(), text: textComment })
            }
        }
    }

    const removeComment = (pid, cid) => {
        for (let index in _posts) {
            if (_posts[index].id === pid) {
                for (let indexComm in _posts[index].comments) {
                    if (_posts[index].comments[indexComm].id === cid) {
                        _posts[index].comments.splice(indexComm, 1)
                    }
                }
            }
        }
    }

    return {

        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}


// const tweeter = LogicTweeter();
// tweeter.addPost("This is post!");
// tweeter.addPost("2");
// tweeter.addPost("3");
// tweeter.addPost("4");
// tweeter.addPost("5");
// console.log(tweeter.getPosts());
// tweeter.removePost("p2");
// tweeter.removePost("p3");
// console.log(tweeter.getPosts());
// tweeter.addComment("p1", "aiiiii");
// tweeter.addComment("p1", "biiiii");
// tweeter.addComment("p4", "diiiii");
// tweeter.addComment("p5", "eiiiii");
// console.log(tweeter.getPosts());
// tweeter.removeComment("p1", "c2");
// tweeter.removeComment("p4", "c3");
// console.log(tweeter.getPosts());