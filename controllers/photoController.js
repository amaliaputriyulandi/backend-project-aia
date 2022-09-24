require("dotenv").config()
const ENV = process.env
const method = {}
const axios = require("axios")

method.findTag = async (req, res) => {
    try{
        const tag = req.query.tag
        console.log(tag)
        const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ENV.FLICKER_API_KEY}&format=json&nojsoncallback=1&tags=${tag}`)

        res.send({
            statusCode: 200,
            statusText: "Success",
            message: "Your request for find All data photo public by tag successfully",
            photos: response.data.photos 
        })


    }catch(error){
        res.status(500).send(error)
    }
}

method.getAll = async (req, res) => {
    try{
        const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${ENV.FLICKER_API_KEY}&format=json&nojsoncallback=1`)

        res.send({
            statusCode: 200,
            statusText: "Success",
            message: "Your request for Get All data photo public successfully",
            photos: response.data.photos 
        })


    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = method