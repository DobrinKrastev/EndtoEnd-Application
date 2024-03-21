const Book = require("../Models/Book");


exports.getAll = ()=> Book.find();

exports.create =(bookData)=> {
Book.create(bookData)
}

exports.getOne = (bookId)=>{
    Book.findById(bookId)
}

exports.getOneAndUpdate = (bookId,bookData)=>{
    Book.findByIdAndUpdate(bookId,bookData)
}
exports.delete = (bookId,bookData)=>{
    Book.findByIdAndDelete(bookId,bookData)
}