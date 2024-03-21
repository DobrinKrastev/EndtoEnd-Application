const router = require("express").Router();
const bookService = require("../services/bookService")

router.get("/dashboard", async (req,res)=>{
   // const bookData = req.body;
    const books = await bookService.getAll();

    res.json(books)
  
  
});
router.get("/dashboard/details/:bookId", async (req,res)=>{
     ;
    const book = await bookService.getOne(req.params.bookId);

    res.json(book)
  
  
});
router.get("/dashboard/details/:bookId/edit", async (req,res)=>{
    const book = await bookService.getOne(req.params.bookId);

    res.json(book)
 
});
router.put("/dashboard/details/:bookId/edit", async (req,res)=>{
    const bookData = req.body;
   const book = await bookService.getOneAndUpdate(req.params.bookId,bookData);

   res.json(book)
 
 
});
router.put("/dashboard/details/:bookId/delete", async (req,res)=>{
    const bookData = req.body;
   const book = await bookService.getOneAndUpdate(req.params.bookId,bookData);

   res.json({ok: true})
 
 
})

router.post("/create", async (req,res)=>{
     const bookData = req.body;
     const books = await bookService.create(bookData);
 
     res.json(books)
   
   
 });









module.exports = router;