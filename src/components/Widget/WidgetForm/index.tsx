"use client"

import { useState } from "react";
import bugImageUrl from '../../../assets/bug.svg';
import ideaImageUrl from '../../../assets/idea.svg';
import thoughtImageUrl from '../../../assets/thought.svg';
import { FeedBackTypeStep } from "./steps/feedbackType";
import { FeedbackContentStep } from "./steps/feedbackContent";
import { FeedbackSuccessStep } from "./steps/feedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'problema',
    },
    IDEA: {
        title: 'ideia',
    },
    OTHER: {
        title: 'outro',
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSend, SetFeedbackSend] = useState(false);

    const HandleRestartFeedback = () => {
        setFeedbackType(null);
        SetFeedbackSend(false);
    }

    return (
        <div className="bg-gray-900 p-4 rounded-2xl relative mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSend &&
                <FeedbackSuccessStep onFeedbackRestart={HandleRestartFeedback} />
            } {!feedbackSend &&
                <>
                    {!feedbackType &&
                        <FeedBackTypeStep onFeedbackChanged={setFeedbackType} />
                    } {feedbackType &&
                        <FeedbackContentStep
                            onFeedbackRestart={HandleRestartFeedback}
                            feedbackType={feedbackType}
                            onFeedbackSend={() => SetFeedbackSend(true)}
                        />
                    }
                </>
            }
        </div>
    );
}