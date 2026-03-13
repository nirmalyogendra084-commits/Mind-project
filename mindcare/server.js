
import express from "express"
import cors from "cors"
import { Low } from "lowdb"
import { JSONFile } from "lowdb/node"
import { nanoid } from "nanoid"

const app=express()
app.use(cors())
app.use(express.json())

const adapter=new JSONFile("db.json")
const db=new Low(adapter,{moods:[]})
await db.read()

app.get("/api/moods",async(req,res)=>{
await db.read()
res.json(db.data.moods)
})

app.post("/api/moods",async(req,res)=>{
const mood={id:nanoid(),mood:req.body.mood}
db.data.moods.push(mood)
await db.write()
res.json(mood)
})

app.listen(3001,()=>console.log("Backend running on 3001"))
