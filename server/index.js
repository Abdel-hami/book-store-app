const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")


// middleware ==> middleware refers to software that sits between the client (browser) and the server in a web application
// for connection to FRONT-END side
app.use(cors()) //For example, you need CORS when you want to pull data from external APIs that are public or authorized.
app.use(express.json())

// mongoDb config


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://demo-book-app:IUliDErjw09gpPea@cluster0.bbe3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection of documents
    const bookCollection = client.db("BookInventory").collection("books");

    // insert a book to database: POST method
    app.post("/book-upload", async(req,res)=>{
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result)
    })

    // get all books from the database
    // app.get("/all-books", async(req,res)=>{
    //   const books = bookCollection.find();
    //   const data = await books.toArray();
    //   res.send(data)
    // })

    // update a book data: patch or update
    app.patch("/book/:id", async(req,res)=>{
      const id = req.params.id;
      const ToUpdateBooksData  = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert:true};

      const updateDoc = {
        $set: {
          ...ToUpdateBooksData
        }
      }
      // update
      const result = await bookCollection.updateOne(filter,updateDoc,options);

      res.send(result)
    })

    // delete a book
    app.delete("/book/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.deleteOne(filter);
      res.send(result)
    })

    // filter data by category

    app.get("/all-books", async(req,res)=>{
      let query = {};
      if(req.query?.category) {
        query = {category : req.query.category}
      }
      const result = await bookCollection.find(query).toArray()
      res.send(result);
    })
    // to get single book data
    app.get("/book/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.findOne(filter);
      res.send(result);

    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req,res)=>{
    res.send("hello word")
})

app.listen(port, ()=>{
    console.log(`Am listening in port ${port}`)
})