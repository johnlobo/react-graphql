const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin request
app.use(cors());

//Connect to database
mongoose.connect('mongodb://admin:admin@ds119080.mlab.com:19080/jl_library18');
mongoose.connection.once('open', () => {
	console.log('Database connection stablished');
})

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000,()=>{
	console.log('now listening on port 4000');
});