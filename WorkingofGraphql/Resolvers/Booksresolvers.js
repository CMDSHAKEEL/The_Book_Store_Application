

const booksModel = require('../../App/models/BookModel')
const userModel = require('../../App/models/usermodel')
 

module.exports ={

    Query:{
        books: async ()=>{
            return await  booksModel.find()

       },
       getbooks: async(_parent,{id})=>{
        return await booksModel.findById(id);
      }
    },

    Mutation:{
         // creating books

         createBook: async(_,{post},context)=>{

            const existingUser = await userModel.findOne({ email: context.email }); 
            const books =  new booksModel({
             title: post.title,
             description: post.description,
             emailid: post.email,
             topic: post.topic,
         })
             

         if(existingUser){
             return 'user id already EXIST'
         }
         await books.save();
         return books

      },

      // Editing Books By Id 

      updateBook: async(parent,args,context,info)=>{

          const {id} =args

         const {title, description,topic} =args.post

         const book = await booksModel.findByIdAndUpdate(id,{title,description,topic},{new :true})

         return book
      },

      // Deleting Books by ID  

      deleteBook: async(parent,args,context,info)=>{

     const { id } = args

     await booksModel.findByIdAndDelete(id)

     return 'ok  your Book is deleted successfully'

     }
    } 
}