import React, { MouseEventHandler } from 'react'

interface ButtonsProps {
    variant?: 'primary' | 'secondary'
    label: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
    formAction?: string | ((formData: FormData) => void)
    icon?: any
    [x: string]: any
}

const Button = ({
    variant = 'primary',
    icon,
    label,
    formAction,
    ...props
}: ButtonsProps) => {
    const Icon = icon

    return (
        <button
            className={`${variant === 'primary' ? 'bg-orange-400 hover:bg-orange-300' : 'hover:bg-slate-100'} p-4 min-w-full sm:min-w-40 rounded-lg border-black border-2 font-bold self-end inline-flex hover:shadow-inner`}
            type={'button'}
            formAction={formAction}
            {...props}
        >
            {icon && <Icon className={'add justify-self-start absolute"'} />}
            <span className="mx-auto flex flex-row">{label}</span>
        </button>
    )
}

export default Button
