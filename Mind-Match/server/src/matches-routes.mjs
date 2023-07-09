import fs from 'node:fs/promises' 
import matches from '../db/matches.json' assert { type: 'json' }



const DB_PATH = './db/matches.json'




let NEXT = Object
  .keys(matches)
  .reduce((biggest, id) => biggest > id ? biggest : id, 0)  //NEXT parte da 0 perchè il db parte da un oggetto vuoto quindi il primo NEXT sarà 0

export const create = async (req, res) => {
NEXT++
matches[NEXT] = req.body


//Per permettere il salvataggio nel file system!!!
await fs.writeFile(DB_PATH, JSON.stringify(matches, null, '  '))  

res
    .status(201)
    .send({
    message: 'match created'
    })
}



export const get =  (req,res) => {
    let match = matches[req.params.id]
    if (match) {
        res.send({data: match})
    }else {
        res.status
        res.send({
            data: {},
            error: true,
            message: 'match not found'
        })
    }
}


export const getAll =  (req,res) => {
    res.send(matches)
}

export const update = async (req,res) => {
    let match = matches[req.params.id]
    if (match) {
        let newMatch = {...match, ...req.body}
        matches[req.params.id] = newMatch
        await fs.writeFile(DB_PATH, JSON.stringify(matches, null, '  '))
        res.send(newMatch)
    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'match not found'
        })
    }

}


export const remove = async  (req,res) => {
    let match = matches[req.params.id]
    if (match) {
        delete matches[req.params.id] 

        await fs.writeFile(DB_PATH, JSON.stringify(matches, null, '  '))
        res.status(200).end()
    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'match not found'
        })
    }

}