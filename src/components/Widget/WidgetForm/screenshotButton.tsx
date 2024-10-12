"use client"

import html2canvas from 'html2canvas'
import { useState } from 'react';
import { Loading } from './loading';
import { BiCamera, BiTrash } from 'react-icons/bi';

type Props = {
    onScreenshotTook: (screenshot: string | null) => void;
    screenshot: string | null
}

export const ScreenshotButton = ({ onScreenshotTook, screenshot }: Props) => {
    const [isTakingScreenshot, setIsTakingScreenShot] = useState(false);

    const handleTakeScreenshot = async () => {
        setIsTakingScreenShot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);
        setIsTakingScreenShot(false);
    };

    if (screenshot) {
        return (
            <button
                type='button'
                className='p-1 w-10 h-10 rounded-md flex border-transparent justify-end items-end text-gray-400 hover:text-gray-300 transition-colors'
                style={{
                    backgroundImage: `url(${screenshot})`
                }}
                onClick={e => onScreenshotTook(null)}
            >
                <BiTrash />
            </button>
        )
    }

    return (
        <button
            type='button'
            className="p-2 bg-neutral-800 rounded-md border-transparent hover:bg-neutral-700 transition-colors  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-brand-100 "
            onClick={handleTakeScreenshot}
        >

            {isTakingScreenshot ? <Loading /> : <BiCamera className="w-6 h-6" />}
        </button>
    )
}