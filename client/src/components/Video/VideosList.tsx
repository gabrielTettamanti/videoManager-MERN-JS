import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Video } from './Video';
import * as videoServices from './VideoServices';
import VideoItem from './VideoItem';

const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async () => {
        const res = await videoServices.getVideos();
        setVideos(res.data);
    };

    useEffect(() => {
        loadVideos();
    }, []);

    return (
        <div>
            {videos.map((video) => {
                return <VideoItem video={video}/>
            })}
        </div>
    );
};

export default VideoList;