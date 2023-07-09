import axios from 'axios'


async function call(id) {
    let putDate = new Date();
    let res = await axios.put(`http://localhost:8000/matches/${id}`, {
        date: putDate
    })
    console.log(res.status, res.data)
}
  
call(process.argv[2]) 