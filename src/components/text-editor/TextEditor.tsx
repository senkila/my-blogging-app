'use client'

import { useContext } from 'react'

import { BlogEntryData } from 'types/blog-data'
import { AppContext } from '..'
import useQuill from '../../hooks/useQuill'
import { redirect, useRouter } from 'next/navigation'
import Button from '../ui/Buttons'
import hljs from 'highlight.js'
import 'highlight.js/styles/tokyo-night-dark.css'
import 'quill/dist/quill.snow.css'
import './overwrite.quill.css'
import { generateId, getCurrentDateString } from 'src/utils/utils'

const quillOptions = {
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

export const TextEditor = ({
    onCancel = () => {},
    onSubmit = () => {},
}: {
    onCancel: any
    onSubmit: (blogEntry: BlogEntryData) => void
}) => {
    // Editor state
    // const router = useRouter()

    const { quill, quillRef } = useQuill(quillOptions)

    const mapFormData = (formData: FormData) => {
        const title = formData.get('title')?.toString() ?? ''
        const newEntry: BlogEntryData = {
            title,
            dateCreated: getCurrentDateString(),
            content: quill?.getContents().ops,
            id: generateId(title as string),
        }

        return newEntry
    }

    const handleClick = () => {
        quill?.focus()
    }

    const handleSubmit = (formData: FormData) => {
        const blogEntry = mapFormData(formData)
        onSubmit(blogEntry)
    }

    return (
        <>
            <form
                id={'editor'}
                className="flex flex-grow flex-col"
                action={handleSubmit}
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
                    ref={quillRef}
                    onClick={handleClick}
                />

                <div className="my-4 flex flex-none flex-col gap-y-4 sm:gap-x-4 sm:flex-row-reverse">
                    <Button type={'submit'} label={'Submit'} />
                    <Button
                        onClick={onCancel}
                        variant={'secondary'}
                        type={'button'}
                        label={'Cancel'}
                    />
                </div>
            </form>
        </>
    )
}

export default TextEditor
