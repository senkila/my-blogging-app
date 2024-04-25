import dynamic from 'next/dynamic'
import React from 'react'
import './create-blog.css'

import { BlogDBEntry as BlogDBEntry, BlogFormValue } from 'types/blog-data'
import { generateId, getCurrentDate } from '@/src/utils/utils'
import { Op } from 'quill/core'
import { revalidatePath, revalidateTag } from 'next/cache'
import { hostUrl } from '@/src/utils/constants'
import { Loading } from '@/src/components'

const TextEditor = dynamic(() => import('@/src/components/quill/quillEditor'), {
    ssr: false,
    loading: () => <Loading />,
})

const handleSubmit = async (values: BlogFormValue) => {
    'use server'
    const entry = mapToEntryObject(values)
    const response = await updateDatabase(entry)

    revalidatePath('/')
    // revalidateTag('entries')

    // redirect('/')
    console.log('new post successul', { response })
}

const updateDatabase = async (entry: BlogDBEntry) => {
    const res = await fetch(`${hostUrl}/blog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
        cache: 'no-store',
    })
    const response: BlogDBEntry = await res.json()
    console.log('FETCHED: addNewEntry', { response })

    return response
}

const mapToEntryObject = ({ title, content }: BlogFormValue): BlogDBEntry => {
    return {
        title,
        content,
        dateCreated: getCurrentDate(),
        _id: generateId(title as string),
    }
}

export default function CreateBlog() {
    return (
        <main className="page flex flex-grow flex-col items-center justify-between pt-5">
            <div className="min-h-full w-full flex flex-grow flex-col">
                <h2 className="pageTitle flex-none">Add new blog entry.</h2>
                <TextEditor
                    returnLocation="/"
                    handleSubmit={handleSubmit}
                    // onSubmit={postBlogEntry}
                />
            </div>
        </main>
    )
}
