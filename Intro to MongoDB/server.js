const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

let connectToMDB = () => {
    try {

        mongoose.connect("mongodb+srv://satthurikranthi:<db_password>@cluster0.q79l2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


        console.log("connect to MDB successfully.")

    } catch (err) {
        console.log("unnable to connect to MDB");

    }

}


connectToMDB();