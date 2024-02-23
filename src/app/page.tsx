'use client'
import { useEffect, useState } from "react";

export default function Home() {
    const [activeBlock, setActiveBlock] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBlock((prevActiveBlock) => (prevActiveBlock % 3) + 1);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const getBlockClass = (blockNumber:number) => {
        return activeBlock === blockNumber ? 'text-transparent' : 'text-black';
    };

    return (
        <main >
            <nav className={'w-full py-3'}></nav>
            <div className="flex flex-col w-screen h-screen justify-center items-center">
                <div className='text-[112px] font-[800] leading-[134px]'>
                    <span
                        className={`bg-clip-text bg-gradient-to-r duration-[2s] ${getBlockClass(1)} from-cyan-600 to-emerald-400`}>From Data </span>
                    <span
                        className={`bg-clip-text bg-gradient-to-r duration-[2s] ${getBlockClass(2)} from-orange-600  to-yellow-400`}>to </span>
                    <span
                        className={`bg-clip-text bg-gradient-to-r duration-[2s] ${getBlockClass(3)} from-green-600  to-yellow-400`}>Insight</span>
                </div>
            </div>
            <div></div>

        </main>
    );
}

