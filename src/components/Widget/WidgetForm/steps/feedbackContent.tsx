"use client"

import { FormEvent, useState } from "react";
import { CloseButton } from "../../closeButton";
import { FeedbackType, feedbackTypes } from "../index";
import { ScreenshotButton } from "../screenshotButton";
import { BsArrowLeft } from "react-icons/bs";
import { Loading } from "../loading";
import Image from "next/image";
import { FaBug, FaRegLightbulb } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";

type Props = {
    feedbackType: FeedbackType;
    onFeedbackRestart: () => void;
    onFeedbackSend: () => void;
}

export const FeedbackContentStep = ({ feedbackType, onFeedbackRestart, onFeedbackSend }: Props) => {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    const handleSubmitFeedback = async (event: FormEvent) => {
        event.preventDefault()
        setIsSendingFeedback(true)

        setTimeout(() => {
            setIsSendingFeedback(false)
            onFeedbackSend()
            setComment('')
            setScreenshot(null)
            setTimeout(() => {
                onFeedbackRestart()
                console.log(screenshot)
            }, 2000)
        }, 2000)
    }

    return (
        <>
            <header>
                <button onClick={onFeedbackRestart} type="button" className="top-5 left-5 absolute text-gray-400 hover:text-gray-100" >
                    <BsArrowLeft size={16} />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    {feedbackTypeInfo.title === "ideia" ? (
                        <FaRegLightbulb size={20} />
                    ) : feedbackTypeInfo.title === "problema" ? (
                        <FaBug size={20} />
                    ) : (
                        <TfiThought size={20} />
                    )}
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form className="my-4 w-full" onSubmit={handleSubmitFeedback} >
                <textarea
                    className="min-w-[304px] p-1 w-full min-h-[112px] text-sm placeholder-gray-400 text-gray-100 border-gray-600 bg-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 focus: ring-1 resize-none outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte-nos com detalhes o que está acontecendo..."
                    onChange={e => setComment(e.target.value)}
                />

                <footer className="flex gap-2 mt-2" >
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                    <button
                        type="submit"
                        disabled={comment.length === 0 || isSendingFeedback ? true : false}
                        className="p-2 bg-brand-100 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-100"
                    >
                        {isSendingFeedback ? <Loading /> : 'Enviar Feedback'}
                    </button>
                </footer>
            </form>
        </>
    );
}