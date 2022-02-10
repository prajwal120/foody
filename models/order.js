cons5=mongoose =require('mongoose')

const OrderSchema= new mongoose.Schema
(
    {
        userId: { type: String ,required: true },
        products:[
            {
            productId:{
                type: String
            },
            quantity:{
                 type: Number,
                 default:1,
                },
        },
    ],
    amount: {type:Number,required:true},
    address: {type:Object ,required:true},//using the Object cause we may contain many number of lines...
    status: {type:String,default:"Pending"},
    },
    {timestamps: true}
);
module.exports =mongoose.model("Order",OrderSchema);