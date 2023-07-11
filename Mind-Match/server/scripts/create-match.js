import  axios  from 'axios';

if (endGame === true) {


async function call (){
    let postDate = new Date();
    let res = await axios.post ('http://localhost:8000/matches', {
        date: postDate,
    })
    console.log(res.status,res.data);
}

call(process.argv[2])

}
