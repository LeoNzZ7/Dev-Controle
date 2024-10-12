import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';
import { PiChatTeardropDots } from 'react-icons/pi';

export const Widget = () => {
    return (
        <Popover
            className='text-white absolute bottom-4 right-4 md:bottom-10: md:right-10 flex flex-col items-end outline-none z-[9999]'>
            <PopoverPanel><WidgetForm /></PopoverPanel>
            <PopoverButton className='bg-blue-500 rounded-full px-3 h-12 flex items-center group'>
                <PiChatTeardropDots className='w-6 h-6' />
                <span
                    className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear font-bold'>
                    Feedback
                </span>
            </PopoverButton >
        </Popover >
    );
}