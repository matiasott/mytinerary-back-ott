import mongoose from 'mongoose'


mongoose.connect(process.env['DATABASE_URL'])
.then(() => {
    console.log("Database connectede")
})
.catch(()=>{
    console.log("Database connection failed")
})