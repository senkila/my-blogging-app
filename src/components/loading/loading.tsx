type ComponentProps = {
    className?: string
    [x: string]: any
}

export const Loading = (props: ComponentProps) => {
    return (
        <div
            className={`flex flex-col w-full mx-auto py-10 text-3xl items-center ${props.className}`}
        >
            <p>Quill loading...</p>
        </div>
    )
}

export default Loading
