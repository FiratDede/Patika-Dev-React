import axios from "axios"

async function getData(userId){
    let {data:userData} = await axios("https://jsonplaceholder.typicode.com/users/"+userId)
    let {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userId)
    userData.posts=posts
    return userData

}

export default getData