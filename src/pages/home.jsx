import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import "../styles/home.css";
import Robot from '../components/robote';
import Media from '../components/mediasocila';
import Nav from '../components/nav';


const Home = () => {
    const overflow = useRef(null);
    const textRef = useRef(null);
    const type = [
        "Hallo I'm 3nol", 1000,
        "I'm a Student at Informatics", 1000,
        "I'm a Web Developer", 1000,
        
    ];

    // const lyric = [
    //     "Selamat Datang di Portofolio Saya ",
    //     "Saya antusias menciptakan proyek bermakna yang memadukan kreativitas dan fungsionalitas", 
    //     "didorong oleh rasa ingin tahu dan semangat untuk menghasilkan karya luar biasa bersama tim."
    // ];

    useEffect(() =>{
        const handleScroll = () =>{
            const desrip = document.querySelector(".text1");
            const desrip2 = document.querySelector(".des");
            if(window.scrollY > 550){
                window.requestAnimationFrame(() => {
                    desrip.classList.add('hidden');
                })
            }else if(window.scrollY < 350){
                window.requestAnimationFrame(() => {
                    desrip.classList.remove('hidden');
                })
            }
        }
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    // const delay = [1000];
    // const [lyricList, setLyricList] = useState("");
    // const [lyricIndex, setLyricIndex] = useState(0);
    // const [lyricchard, setLyricchard] = useState(0);

    // useEffect(() => {
    //     if (lyricIndex < lyric.length) {
    //         if (lyricchard < lyric[lyricIndex].length) {
    //             const lyricTime = setTimeout(() => {
    //                 setLyricList((prev) => prev + lyric[lyricIndex][lyricchard]);
    //                 setLyricchard((prev) => prev + 1);
    //             }, 50);
    //             return () => clearTimeout(lyricTime);
    //         } else {
    //             const lyricTime = setTimeout(() => {
    //                 setLyricList((prev) => prev + "\n");
    //                 setLyricIndex((prev) => prev + 1);
    //                 setLyricchard(0);
    //             }, delay[lyricIndex] || 1000);
    //             return () => clearTimeout(lyricTime);
    //         }
    //     }
    // }, [lyricIndex, lyricchard, lyric, delay]);

    useEffect(() => {
        const overflowElement = overflow.current;
        const textElement = textRef.current;

        if (textElement) {
            const textContent = textElement.textContent;
            textElement.innerHTML = '';
            for (let char of textContent) {
                const span = document.createElement('span');
                span.textContent = char;
                textElement.appendChild(span);
            }
        }

        const handleScroll = () => {
            const words = textElement.querySelectorAll('span');
            const scrollY = overflowElement.scrollTop;
            words.forEach((word, index) => {
                if (scrollY >= index * 1.7) {
                    word.classList.add('active');
                } else {
                    word.classList.remove('active');
                }
            });
        };

        overflowElement?.addEventListener('scroll', handleScroll);
        return () => overflowElement?.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const snapTarget = document.getElementById('about');
        const handleScroll = () => {
            const scrolly = window.scrollY;

            if(scrolly >= 500 ||scrolly  &&  scrolly >= 1500) {
                snapTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => {
                    window.removeEventListener('scroll', handleScroll);
                }, 1500);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="flex justify-center items-center fixed z-50 w-full max-h-48 backdrop-blur-md scroll-smooth">
                <div className="navbar w-11/12 h-8 flex items-center justify-around my-4 rounded-xl">
                    <div className="h-auto w-auto flex justify-start items-center font-JetBrains animate-slide-right">
                        <h1 className="text-white text-sm">私は</h1>
                        <p className="emojil text-sm">✌️</p>
                        <p className="text-white text-base">,Tri Setianto</p>
                    </div>
                    <div className="flex justify-end w-4/6 h-auto items-center rounded-xl">
                        <div className="w-auto h-10 shadow-lg shadow-black bg-tertiary p-4 rounded-xl flex justify-center items-center">
                            <Nav name="Home" link="#home" />
                            <Nav name="About" link="#about" />
                            <Nav name="Project" link="#project" />
                            <Nav name="Tech" link="#tech" />
                            <Nav name="Contact" link="#contact" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-auto h-auto overflow-hidden bg-primary'>
                <div className="flex justify-center items-center w-screen h-screen rel" id='home'>
                    <div className="flex flex-col justify-center items-center w-9/12 h-full bg-primary">
                        <div className='h-16 w-full'>
                            <div className="text-3xl text-center font-JetBrains text-white animate-slide-right duration-500 text1">
                                <TypeAnimation
                                    sequence={type}
                                    wrapper="p"
                                    cursor={false}
                                    repeat={Infinity}
                                    className="text-3xl text-white py-5"
                                />
                            </div>
                        </div>
                        {/* <div className='max-w-xl h-30 justify-center items-center flex'>
                            <div className="text-white w-full text-wrap h-auto font-SansSerif flex justify-center des duration-500 animate-slide-right">
                                <p className=" flex justify-center text-left items-center text-2xl font-JetBrains bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-fuchsia-600">
                                    {lyricList}</p>
                            </div>
                        </div> */}
                        <div className='w-full h-30 justify-center items-center flex pt-3'>
                            <Media className='media' />
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        <Robot />
                    </div>
                </div>
                <div className='w-screen h-1/2 bg-white' id='about'>
                    <div ref={overflow} className='window w-screen h-screen flex-col justify-center items-center overflow-y-scroll'>
                        <div className='w-screen h-screen justify-center items-center flex py-6 px-16 gap-4 sticky top-0 z-20'>
                            <div className='max-w-sm h-30'>
                                <img src="https://wallpapers.com/images/hd/cool-xbox-profile-pictures-9dtcc745il694rjs.jpg" alt="" />
                            </div>
                            <div className='w-1/2 h-auto font-SansSerif' ref={textRef}>
                                <p className='font-extralight text-wrap text-sm text-gray-600'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='w-screen h-screen mt-5 bg-sky-400'></div>
                    </div>
                </div>
                <div className='w-screen h-screen bg-slate-700'></div>
            </div>
        </>
    );
};

export default Home;
