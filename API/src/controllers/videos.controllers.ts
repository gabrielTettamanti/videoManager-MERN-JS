import { RequestHandler } from "express";
import Video from "../models/Video";

export const createVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({url: req.body.url});
    if(videoFound)
        return res.status(301).json({message: 'The URL already exists'});
    
    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
};
export const getVideos: RequestHandler = (req, res) => {
    res.json('getting videos')
};
export const getVideo: RequestHandler = (req, res) => {
    res.json('getting a single video')
};
export const deleteVideo: RequestHandler = (req, res) => {
    res.json('deleting a single video')
};
export const updateVideo: RequestHandler = (req, res) => {
    res.json('updating a single video')
};