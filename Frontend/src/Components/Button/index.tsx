import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean,
    children: ReactNode,
    className?: string
}

function Button({asChild, children, className, ...props}: ButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp 
        className={clsx(
            "py-2 rounded-xl font-semibold text-white text-md w-full bg-accentColor hover:bg-accentYellowColor hover:delay-100", className 
            )} 
            {...props}>
            {children}
        </Comp>
    )
    
}

export default Button;