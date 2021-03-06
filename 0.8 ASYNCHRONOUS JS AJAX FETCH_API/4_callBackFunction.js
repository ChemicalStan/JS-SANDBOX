// Posts
const posts = [
    {title: 'Post One', body: 'This is post One'}, 
    {title: 'Post Two', body: 'This is post Two'}
];

    // SYNCHRONOUS WAY
// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
// createPost({title:'post three', body:'This is POst Three'});
// getPosts()

    // ASYNCHRONOUS WAY USING CALLBACK FUNCTION
function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}
createPost({title:'post three', body:'This is Post Three'}, getPosts);

