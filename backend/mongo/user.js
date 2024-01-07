const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://omtrivedioo3:78wXMxojl1rc0rSZ@cluster0.vmygbyn.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//  password : 78wXMxojl1rc0rSZ



var db = mongoose.connection;
try {
    db.on("error", console.error.bind(console, "Connecton error"));
    db.once("open", function () {
        console.log("mongoDB connected");
    });
} catch (err) {
    console.log(err);
}



const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    Enrollment_no: { type: String, required: true },
    email: { type: String, required: true },
    password: {
        type: String,
        minLength: 8,
        required: [true, "User password required"],
    },
});

exports.User = new mongoose.model("User", userSchema);
