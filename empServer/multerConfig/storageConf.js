// import multer
const multer=require('multer')

// step-1 set storage
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})

// file filtering
const fileFilter=(req,file,callback)=>{
    if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg'){
       callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error('only accepetd png/jpg/jpeg'))

    }
}

// upload
const upload=multer({storage,fileFilter})


module.exports=upload