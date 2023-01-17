const VideoServices = require('../services/videos.services');

const createVideo = async (req, res) => {
    try {
        const newVideo = req.body;
        const result = await VideoServices.postVideo(newVideo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const deleteVideo = async (req, res) => {
    try {
        const {id} = req.params;
       const result = VideoServices.dropVideo(id)
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
module.exports = {
  createVideo,
  deleteVideo
 };