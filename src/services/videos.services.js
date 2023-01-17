const Video = require('../models/videos.models');

class VideoServices {
static async postVideo(video) {
    try {
      const result = await Video.create(video);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async dropVideo(id){
    try {
        const result = await Video.drop(id);
        return result;
    } catch (error) {
        throw error;
    }
  }
}
module.exports = VideoServices;