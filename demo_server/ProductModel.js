const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    _name: String, // jag har gjort _name för att se skillanden mellan den och name så att dom inte ser ut att vara samma sak, _name = variabel namnet
    _productType: String,
    _productNumber: Number
});

const Product = mongoose.model('Product', personSchema);

exports.createProduct = (name, email, age) => {
    var product = new Person({
        _name: name, // _name = variabel namnet, name = variabeln
        _productType: productType, 
        _productNumber: productNumber 
       })

       return product
}