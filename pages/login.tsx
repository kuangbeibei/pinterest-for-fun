import type { NextPage } from "next";
import React, { SyntheticEvent, useState } from "react";
import router from "next/router";
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from "react-hot-toast";
import { CameraIcon } from "@heroicons/react/outline";
import { videos, images } from "Assets"
import client from "client";
import { createReadStream } from "fs";

const Login: NextPage = () => {
    const [username, setUsername] = useState<string>('');
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        if (!username) return toast('please enter username', {
            style: {
                color: '#f54290'
            },
            icon: '⚠️',
        })
        const _uuid = uuidv4();
        const _data = {
            _id: _uuid,
            _type: 'user',
            username,
        }

        try {
            const result = await fetch('/api/loginUser', {
                method: 'POST',
                body: JSON.stringify(_data)
            })
            if (result.ok) {
                const userData = await result.json();
                localStorage.setItem('user', JSON.stringify(userData));
                toast('Welcome!', {
                    style: {
                        color: '#30797a',
                    },
                    icon: '👏'
                })
                router.push('/')
            } else {
                toast(result.statusText, {
                    style: {
                        color: '#f54290'
                    },
                })
            }
        } catch(e) {
            console.log('login error: ', e);

        }




    }
    return (
        <div className="h-screen flex flex-col justify-start items-center">
            <div className="relative w-full h-full">
                <video
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                >
                    <source type="video/mp4" src={videos.videoBg}></source>
                </video>
                <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-opacity-60 bg-black">
                    <form onSubmit={handleSubmit} className="w-1/2 mt-2">
                        <div className="shadow-2xl w-full flex flex-col">
                            <div className="flex space-x-4 justify-center items-center">
                                <CameraIcon className="w-8 h-8 text-white" />
                                <input name="username" type="text" onBlur={e => setUsername(e.target.value)} placeholder="username..." className="max-w-xs outline-none bg-transparent w-full py-1 px-2 placeholder:italic placeholder-pinterest text-pinterest-placeholder" />
                            </div>
                            <button type="submit" className="mt-2 mx-auto w-full text-pinterest-light hover:text-pinterest-placeholder bg-pinterest-aside bg-opacity-20 py-2 px-3 rounded-full hover:scale-95 transition-transform duration-200 ease-in-out active:bg-opacity-25">sign up or sign in</button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;
