const cloudinary = require('cloudinary')
const fs = require('fs')

cloudinary.config({
    cloud_name: '',
    api_key: '',
    api_secret: ''
});


exports.imageUpload = async (image, type) => {
    try {
        const uploadPath = type == 'banner' ? `marketplace/banners/${image.filename}` : `marketplace/${image.filename}`
        let savedImage = await cloudinary.v2.uploader.upload(image.path, { public_id: uploadPath })
        fs.unlinkSync(image.path)
        return savedImage.secure_url
    } catch (error) {
        console.log(error);
        return error.message
    }
}

exports.universalImageUpload = async (image, folder) => {
    try {
        const uploadPath = `marketplace/${folder}/${image.filename}` 
        let savedImage = await cloudinary.v2.uploader.upload(image.path, { public_id: uploadPath })
        fs.unlinkSync(image.path)
        return savedImage.secure_url
    } catch (error) {
        console.log(error);
        return error.message
    }
}