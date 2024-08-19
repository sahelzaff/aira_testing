"use client";
import React, { useEffect, useState, useRef } from 'react';
import assets from '../../../../public/assets/assets';

const videoUrls = [
    "https://storage.googleapis.com/aaryalabelmediabucket/Instagram%20Videos/1721474145172.mp4",
    "https://storage.googleapis.com/aaryalabelmediabucket/Instagram%20Videos/COTTON~1.MP4",
    "https://storage.googleapis.com/aaryalabelmediabucket/Instagram%20Videos/CHIKAN~1.MP4",
    "https://storage.googleapis.com/aaryalabelmediabucket/Instagram%20Videos/AJRAKH~1.MP4",
    "https://storage.googleapis.com/aaryalabelmediabucket/Instagram%20Videos/COTTON~2.MP4",
    "https://storage.googleapis.com/aaryalabelmediabucket/Instagram%20Videos/COTTON~3.MP4",
    "https://storage.googleapis.com/aaryalabelmediabucket/Instagram%20Videos/SnapInsta.io_3293865455696139176.mp4"
];

const Instagram = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRefs = useRef([]);

    useEffect(() => {
        // Dynamically load the Instagram embed script
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Autoplay the first video
        if (videoRefs.current[0]) {
            videoRefs.current[0].play();
        }

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleMouseEnter = (index) => {
        if (videoRefs.current[currentVideo]) {
            videoRefs.current[currentVideo].pause();
        }
        setCurrentVideo(index);
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
        }
    };

    const handleMouseLeave = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause();
        }
    };

    return (
        <div className="max-w-screen-2xl w-full mx-auto h-auto py-14 overflow-x-hidden">
            <div className="flex flex-col items-center justify-center gap-20">
                <div className="flex gap-4 items-center justify-start">
                    <img
                        src="https://img.icons8.com/cotton/2x/instagram-new.png"
                        alt="Instagram logo"
                        className="h-20 w-20"
                    />
                    <h1 className="font-outfit font-bold text-6xl ">
                        Catch Us On <span className="text-[#ffc0cb]">Instagram</span>
                    </h1>
                </div>
                <div className='flex flex-row justify-center items-center gap-4'>
                    {videoUrls.map((url, index) => (
                        <a
                            key={index}
                            href="https://www.instagram.com/aaraya_label/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='relative w-[150px] cursor-pointer'
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <video
                                src={url}
                                ref={el => videoRefs.current[index] = el}
                                className='w-full rounded-lg'
                                muted
                                loop
                                
                            ></video>
                            <div className={`absolute inset-0 flex items-center justify-center ${currentVideo === index ? 'hidden' : 'flex'}`}>
                                <img src={assets.play} alt="Play Icon" className='w-14 h-14' />
                            </div>
                        </a>
                    ))}
                </div>
                <div>
                    <a 
                        href="https://www.instagram.com/aaraya_label/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex justify-center items-center w-64 h-10 hover:bg-websitepink border-2 border-websitepink transition duration-300 ease-in-out text-black font-montserrat font-semibold text-[16px] rounded-sm -mt-5 group'
                    >
                        Follow Us on Instagram <span><img src="https://img.icons8.com/cotton/2x/instagram-new.png" alt="" className='h-10 w-10 mb-[4px] group:hover:scale:105 transition duration-200 ease-in-out' /></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Instagram;
