// const express=require("express");
// const app=express();
// const cors=require("cors");
// const bodyParser=require("body-parser");
// const uuid=require("uuid")
// const PORT=8080;

// //middleware
// app.use(bodyParser.json());
// app.use(cors());

// function custom_middleware(req,res,next){
//     console.log("from Middleware");
//     next()
// }

// app.use(custom_middleware)
// const todos=[
//     {
        
//         id:1,
//         title:"go to gym",
//         completed:false,
//     },
//     {
        
//         id:2,
//         title:"code",
//         completed:true,
//     }
//     // {
        
//     //     id:3,
//     //     title:"go to market",
//     //     completed:false,
//     // }
// ];

// app.get("/",(req,res)=>{
//     res.json({message:"hello world"});
// });

// app.get("/todos",(req,res)=>{
//     res.json(todos);
// });
// app.get("/todos/:id",(req,res)=>{
//     let todo=todos.filter((todo)=>todo.id==req.params.id)
//     res.json(todo);
// });
// app.post("/todos",(req,res)=>{
//     let body=req.body;

//     todos.push({id:uuid.v4(),...body});
//     res.json(todos);
// });
// app.put("/todos/:id",(req,res)=>{
//     let todo=todos.find((todo)=>todo.id==req.params.id)
//     if(todo){
//         todo.title=req.body.title;
//         todo.completed=req.body.completed;
//         res.json(todos);
//     }
//     else{
//         res.semd("todo list not exist for givene id");
//     }
// });
// app.delete("/todos/:id",(req,res)=>{
//     let index=todos.findIndex((todo)=>todo.id==req.params.id);
//     todos.splice(index,1);
//     res.json(todos);
// });


// app.listen(PORT,()=>{
//     console.log(`server started sucessfully ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRoutes = require("./route/todoRoutes");

const app = express();
const PORT = 8080;


app.use(bodyParser.json());
app.use(cors());



function custom_middleware(req, res, next) {
  console.log("from Middleware");
  next();
}

app.use(custom_middleware);


app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server started successfully on PORT ${PORT}`);
});
