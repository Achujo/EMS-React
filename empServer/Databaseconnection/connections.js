//server and database connecting

const mongoose= require('mongoose')

mongoose.connect(process.env.baseurl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
console.log('resolved');
}).catch(()=>{
    console.log('Rejected');
})