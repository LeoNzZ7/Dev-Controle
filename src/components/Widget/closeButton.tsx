import { PopoverButton } from '@headlessui/react';
import { BiX } from 'react-icons/bi';

export const CloseButton = () => {
    return (
        <PopoverButton
            className='top-5 right-5 absolute text-gray-400 hover:text-gray-100 transition-colors'
            title='Fechar Formulário de feedback' >
            <BiX size={16} />
        </PopoverButton>
    )
}