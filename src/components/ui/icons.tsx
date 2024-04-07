import React from 'react'
import Image from 'next/image'

type IconProps<T> = {
    [x in keyof T]: any
}

export const AddIcon = <T,>(props: IconProps<T>) => {
    return (
        <Image
            src="/icons/add.svg"
            alt="Add"
            width={24}
            height={24}
            priority
            {...props}
        />
    )
}
