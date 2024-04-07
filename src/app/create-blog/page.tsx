'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import './page.css'

// import BlogEditorHook from '@/src/components/editor-with-hook/BlogEditor'

const TextEditor = dynamic(
    () => import('src/components/text-editor/TextEditor'),
    {
        ssr: false,
        loading: () => <p>Quill loading</p>,
    }
)

export default function CreateBlog() {
    return (
        <main className="page flex flex-grow flex-col items-center justify-between pt-5">
            <div className="min-h-full w-full flex flex-grow flex-col">
                <h2 className="pageTitle flex-none">Add new blog entry.</h2>
                <TextEditor />
            </div>
        </main>
    )
}
