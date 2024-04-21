// Fetch function returns a Promise 
// Seamless chaining of asynchronus operations
// Below code is for a brief use of fetch function
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((blogs) => blogs.forEach((blogs) => {console.log(blogs);}))
//     .catch((error) => console.log(error));

// Below code uses more detailed and simple fecth function and how it work
// async function fetchData(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const blogs = await response.json();

//         blogs.forEach((blog) => {
//             console.log(blog);
//         });
// } catch (error){
//     console.log(error);
// }
// }
// fetchData();   
// Post some data in the web API
const createPost = async () => {
    const postData = {
        title: "Beverly Hills Cop 4",
        body: "This new installment in the BHC franchise will be landing on your screens soon.",
        userId: 100,
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/posts" , {
        method: "POST",
        header: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(postData),
        });
        const data = await response.json();
        console.log("New post created:", data);
    }
    createPost();

    // Updating a data in a website through API
    const getPost = async (postId) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.json();
        console.log("Post reterived:", data);
    };
    getPost(1);

    const updatePost = async (postId) => {
        const updateData = {
            title: "Update Post Title", 
            body: "This is the updated body of the post",
            userId: 1,
        };

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                method: "PUT",
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateData),
            }
        );
        const data = await response.json();
        console.log("Post Updated:", data);
    };
    updatePost(1);

    // Deleting a post 
    const deletePost = async (postId) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                method: "DELETE",
            }
        );
        if (response.ok) {
            console.log("Post deleted successfully");
        } else {
            console.log("Failed to delete post");
        }
    };

    deletePost(2);