const Book = require("../Models/Book");


exports.getAll = ()=> Book.find();

exports.create =(bookData)=> {
return Book.create(bookData)
}

exports.getOne = (bookId)=>{

    return Book.findById(bookId)
}

exports.getOneAndUpdate = (bookId,bookData)=>{
    return Book.findByIdAndUpdate(bookId,bookData)
}
exports.delete = (bookId,bookData)=>{
    Book.findByIdAndDelete(bookId,bookData)
}