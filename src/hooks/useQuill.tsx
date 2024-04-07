'use client'

import { RefObject, useEffect, useRef, useState } from 'react'
import 'quill/dist/quill.core.css'
import Quill from 'quill'
import hljs from 'highlight.js'

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

export const useQuill = (
    options: any = defaultOptions
): { quill: Quill | undefined; quillRef: RefObject<any> } => {
    const quillRef: RefObject<any> = useRef()
    const [isLoaded, setLoaded] = useState(false)
    const [quill, setQuill] = useState<Quill | undefined>()

    useEffect(() => {
        const initQuill = async () => {
            return new Quill(quillRef.current, options)
        }
        if (isLoaded && quillRef.current && !quill) {
            initQuill().then((quill) => {
                setQuill(quill)
            })
        }
        setLoaded(true)
    }, [quillRef, quill, isLoaded, options])

    return { quill, quillRef }
}

export default useQuill
