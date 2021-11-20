import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'guest'
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/pmtdev/image/upload/v1634800837/avatar_user_pfivg6.png'
    },
    emailVerified: {
        type: String,
        default: null
    },
}, { timestamps: true })

let Dataset = mongoose.models.users || mongoose.model('users', userSchema)
export default Dataset;