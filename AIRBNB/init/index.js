const mongoose = require('mongoose');
const sampleData = require('./sampledata');
const Listing = require('../module/schema');

main().then((res) => {
    console.log("connection succcessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Listing');

}


async function insertData (){
    await Listing.deleteMany({});

    await Listing.insertMany(sampleData.data);
}


insertData();
