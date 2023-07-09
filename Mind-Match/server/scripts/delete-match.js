import  axios  from 'axios';

async function call (id){
    let res = await axios.delete (`http://localhost:8000/matches/${id}`) 
    console.log(res.status,res.data);

}

call(process.argv[2])