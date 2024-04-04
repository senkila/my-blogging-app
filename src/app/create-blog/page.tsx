import React from 'react'
import BlogEditor from '../../components/editor/BlogEditor'

export default function CreateBlog() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-10">
            <div className="flex flex-col container">
                <h1 className="pageTitle">Create new blog post.</h1>
                <BlogEditor />
            </div>
        </main>
    )
}
