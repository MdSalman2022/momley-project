const express = require('express');
const cors = require('cors');

const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000


app.use(express.json())
app.use(cors())


app.get('/', async (req, res) => {
    res.send('momley portal server is running')
})


const uri = process.env.MONGODB_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        const productCollection = client.db("momley").collection("bookCollection");

        app.get('/api/get/booklist', async (req, res) => {
            const cursor = productCollection.find({})
            const books = await cursor.toArray()
            console.log(books)
            res.send(books)
        })

        // app.post('/orderhistory', async (req, res) => {
        //     const order = req.body;
        //     const result = await OrderCollection.insertOne(order)
        //     res.send(result)
        // })

        // app.delete('/delete', async (req, res) => {
        //     const ids = req.body.ids;
        //     const objectIds = ids.map(id => new ObjectId(id));
        //     const result = await productCollection.deleteMany({ _id: { $in: objectIds } });
        //     res.send(result);
        // });

        // app.put('/update/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const filter = { _id: new ObjectId(id) }
        //     const updatedDoc = {
        //         $set: {
        //             name: req.body.name,
        //             price: req.body.price,
        //             stock: req.body.stock,
        //         }
        //     }
        //     const result = await productCollection.updateOne(filter, updatedDoc, { upsert: false })
        //     res.json(result)
        // })


    } catch (err) {
        console.log(err)
    }
    finally {
        // await client.close();
    }
}

run().catch(console.log)


app.listen(port, () => console.log(`momley portal is running on ${port}`))