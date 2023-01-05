import { InputHTMLAttributes, ReactNode } from "react"

interface TextInputRootProps {
    children: ReactNode
}


function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex items-center gap-3 h-10 px-3 rounded-xl bg-transparent border-accentColor border-2 focus-within:border-accentYellowCollor w-full">
            {props.children}
        </div>
    )
}

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}


function TextInputInput(props: TextInputInputProps) {
  
    return (
        <input 
        className="bg-transparent flex-1  text-sm  outline-none" {...props}
        />
    )
}

interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <div className=" text-gray">
            {props.children}
        </div>
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}