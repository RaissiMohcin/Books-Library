import express from "express"
import {Book} from "../models/bookModel.js"
const router = express.Router()
//Getting all books
router.get("/",async (req,res)=>{
try {
    const books = await Book.find({})
    res.status(200).send({
        count : books.length,
        date:books
    })
} catch (error) {
    console.log(error)
    res.status(500).send({message : err.message})
}
})
//Getting a book by Id 
router.get("/:id",async (req,res)=>{
    try {
        const {id }= req.params;
        const book = await Book.findById(id)
        res.status(200).send(book)
    } catch (error) {
        console.log(err)
        res.status(500).send({message : err.message})
    }
    })
//Update a book
router.put("/:id",async (req,res)=>{
    try {
        if(!req.body.title || !req.body.author|| !req.body.publishedYear){
            return res.status(400).send({message : "Send all required fields:title, author and publishedYear"})
        }
        const {id }= req.params;
        const result = await Book.findByIdAndUpdate(id,req.body)
        if(!result){
            res.status(404).send({message:"book not found"})
        }
        res.status(200).send({message : "the book was found and updated successfully"})
    } catch (error) {
        console.log(err)
        res.status(500).send({message : err.message})
    }
    })
//delete a book
router.delete("/:id",async (req,res)=>{
    try {
        const {id} = req.params
        const result = await Book.findByIdAndDelete(id)
        if(!result){
            res.status(404).send({message:"book not found"})
        }
        res.status(200).send({message : "the book was found and deleted successfully"})
    } catch (error) {
        console.log(err)
        res.status(500).send({message : err.message})  
    }
})
//Creating a book
router.post("/", async (req,res)=>{
try {
    if(!req.body.title || !req.body.author|| !req.body.publishedYear){
        return res.status(400).send({message : "Send all required fields:title, author and publishedYear"})
    }
    const newBook = {
        title : req.body.title,
        author : req.body.author,
        publishedYear : req.body.publishedYear
    }
    const book = await Book.create(newBook)
    return res.status(201).send(book)
} catch (error) {
    console.log(err)
    res.status(500).send({message : err.message})
}
})

export default router;