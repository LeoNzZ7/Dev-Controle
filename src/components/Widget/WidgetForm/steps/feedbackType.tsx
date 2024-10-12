import { feedbackTypes } from "..";
import { FeedbackType } from "../index";
import { CloseButton } from "../../closeButton"
import { FaBug, FaRegLightbulb } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";

type Props = {
    onFeedbackChanged: (type: FeedbackType) => void;
}

export const FeedBackTypeStep = ({ onFeedbackChanged }: Props) => {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => (
                    <button
                        key={key}
                        className="bg-neutral-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
                        type="button"
                        onClick={e => onFeedbackChanged(key as FeedbackType)}
                    >
                        {value.title === "ideia" ? (
                            <FaRegLightbulb size={26} />
                        ) : value.title === "problema" ? (
                            <FaBug size={26} />
                        ) : (
                            <TfiThought size={26} />
                        )}
                        <span>{value.title}</span>
                    </button>
                ))}
            </div>
        </>
    );
}