const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://chaitanyam187:Pushpa216@cluster0.ngwrbuw.mongodb.net/goFoodMern?retryWrites=true&w=majority';
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) {
            console.log('----' + err);
        }
        else {
            console.log('Successfully connected to mongo db');
            const fetched_data = await mongoose.connection.db.collection("foodItems");
            fetched_data.find({}).toArray(async (err, data) => {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray((err, catData) => {
                    if (err) console.log(err);
                    else {
                        global.foodItems = data;
                        global.foodCategory = catData;
                    }
                })

            })

        }
    });

}
module.exports = mongoDB;


