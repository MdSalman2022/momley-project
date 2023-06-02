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
        const bookCollection = client.db("momley").collection("bookCollection");
        const usersCollection = client.db("momley").collection("usersCollection");


        // get categories and authors 

        app.get('/api/get/categories', async (req, res) => {
            try {
                const cursor = bookCollection.find({});
                const books = await cursor.toArray();

                const categoryList = books.map(book => book.categoryInfo?.category);
                const uniqueCategoryList = [...new Set(categoryList)];

                res.send(uniqueCategoryList);
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
        app.get('/api/get/authors', async (req, res) => {
            try {
                const cursor = bookCollection.find({});
                const books = await cursor.toArray();

                const authorList = books.map(book => book.specification?.author);
                const uniqueAuthorList = [...new Set(authorList)];

                res.send(uniqueAuthorList);
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });


        // get books 

        app.get('/api/get/booklist', async (req, res) => {
            try {
                const page = parseInt(req.query.page) || 1; // Current page number, defaulting to 1
                const pageSize = parseInt(req.query.pageSize) || PAGE_SIZE; // Number of books per page, defaulting to PAGE_SIZE

                const skip = (page - 1) * pageSize; // Number of books to skip

                const cursor = bookCollection.find({});
                const totalDataLength = await cursor.count();
                console.log(totalDataLength)

                const books = await cursor.skip(skip).limit(pageSize).toArray();

                res.send({
                    books,
                    totalDataLength,
                });
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });


        app.get('/api/get/books/byprice', async (req, res) => {
            try {
                const amount = parseFloat(req.query.amount);
                const page = parseInt(req.query.page) || 1; // Current page number, defaulting to 1
                const pageSize = parseInt(req.query.pageSize) || PAGE_SIZE; // Number of books per page, defaulting to PAGE_SIZE

                const skip = (page - 1) * pageSize; // Number of books to skip


                const cursor = bookCollection.find({ "pricing.price": { $lt: amount } });
                const totalDataLength = await cursor.count();

                const booksByPrice = bookCollection.find({ "pricing.price": { $lt: amount } }).sort({ "pricing.price": 1 }).skip(skip).limit(pageSize);
                const books = await booksByPrice.toArray();

                res.send({
                    books,
                    totalDataLength,
                });
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });

        app.get('/api/get/books/byauthor', async (req, res) => {
            try {
                const writer = req.query.writer;
                const page = parseInt(req.query.page) || 1; // Current page number, defaulting to 1
                const pageSize = parseInt(req.query.pageSize) || PAGE_SIZE; // Number of books per page, defaulting to PAGE_SIZE

                const skip = (page - 1) * pageSize; // Number of books to skip


                const regex = new RegExp(writer, 'i');
                const cursor = bookCollection.find({ "specification.author": regex });
                const totalDataLength = await cursor.count();

                const authorBooks = bookCollection.find({ "specification.author": regex }).skip(skip).limit(pageSize);
                const books = await authorBooks.toArray();

                res.send({
                    books,
                    totalDataLength,
                });
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });

        app.get('/api/get/books/bycategory', async (req, res) => {
            try {
                const category = req.query.category;
                const page = parseInt(req.query.page) || 1; // Current page number, defaulting to 1
                const pageSize = parseInt(req.query.pageSize) || PAGE_SIZE; // Number of books per page, defaulting to PAGE_SIZE

                const skip = (page - 1) * pageSize; // Number of books to skip



                const regex = new RegExp(category, 'i');
                const cursor = bookCollection.find({ "categoryInfo.category": regex });
                const totalDataLength = await cursor.count();

                const categoryBooks = bookCollection.find({ "categoryInfo.category": regex }).skip(skip).limit(pageSize);
                const books = await categoryBooks.toArray();

                res.send({
                    books,
                    totalDataLength,
                });
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });


        app.get('/api/get/book/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: new ObjectId(id) }
            const result = await bookCollection.findOne(query)
            console.log(result)
            res.send(result)
        })
        app.post('/api/post/book', async (req, res) => {
            const book = req.body;
            const result = await bookCollection.insertOne(book)
            res.send(result)
        })



        app.post('/api/users/add', async (req, res) => {
            const book = req.body;
            const result = await usersCollection.insertOne(book);
            res.send(result);
        });






        // app.post('/orderhistory', async (req, res) => {
        //     const order = req.body;
        //     const result = await OrderCollection.insertOne(order)
        //     res.send(result)
        // })

        // app.delete('/delete', async (req, res) => {
        //     const ids = req.body.ids;
        //     const objectIds = ids.map(id => new ObjectId(id));
        //     const result = await bookCollection.deleteMany({ _id: { $in: objectIds } });
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
        //     const result = await bookCollection.updateOne(filter, updatedDoc, { upsert: false })
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