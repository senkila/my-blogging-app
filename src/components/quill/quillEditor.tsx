'use client'

import { RefObject, useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import Button from '../ui/button'
import hljs from 'highlight.js'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.core.css'
import './overwrite.quill.css'

import { useRouter } from 'next/navigation'
import { Op } from 'quill/core'

const defaultOptions = {
    modules: {
        syntax: { hljs },
        toolbar: [
            [{ header: [3, 4, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
            ['link', 'image', 'code-block'],
        ],
    },
    theme: 'snow',
}

export const QuillEditor = ({
    handleSubmit,
    options = defaultOptions,
    returnLocation = '',
}: {
    options?: any
    handleSubmit: (values: { title: string; content: Op[] }) => void
    returnLocation?: string
}) => {
    const router = useRouter()
    const quillRef: RefObject<any> = useRef()
    const [isLoaded, setLoaded] = useState(false)
    const [quill, setQuill] = useState({} as Quill)

    const formAction = (fromData: FormData) => {
        handleSubmit({
            title: fromData.get('title') as string,
            content: quill.getContents().ops,
        })
    }

    const focusOnClick = () => {
        quill?.focus()
    }

    useEffect(() => {
        const initQuill = async () => {
            return new Quill(quillRef.current, options)
        }
        if (isLoaded && quillRef.current && !quill.container) {
            initQuill().then((quill) => {
                setQuill(quill)
            })
        }
        setLoaded(true)
    }, [quillRef, quill, isLoaded, options])

    return (
        <>
            <form
                id={'editor'}
                data-testid={'blogEditor'}
                className="flex flex-grow flex-col"
                action={formAction}
            >
                <input
                    className="title w-full mb-4 font-serif text-4xl p-1 shadow-sm border-black border-2 flex-none"
                    name={'title'}
                    type={'text'}
                    required
                    placeholder="Title for blog entry..."
                />
                <div
                    id={'editor'}
                    className={'editor flex-grow'}
                    role={'textbox'}
                    ref={quillRef}
                    onClick={focusOnClick}
                >
                    {isLoaded ? null : 'Loading quill editor...'}
                </div>

                <div className="my-4 flex flex-none flex-col gap-y-4 sm:gap-x-4 sm:flex-row-reverse">
                    <Button type={'submit'} label={'Submit'} />
                    <Button
                        onClick={() => {
                            router.push(returnLocation)
                        }}
                        variant={'secondary'}
                        type={'button'}
                        label={'Cancel'}
                    />
                </div>
            </form>
        </>
    )
}

export default QuillEditor
