import getData from "./app.js" 

async function main() 
{
    let userData= await getData(1);
    console.log(userData)

}
main()
