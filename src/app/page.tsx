'use client'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { AppContext } from 'src/components/context/AppContext'
import { useRouter } from 'next/navigation'
import { PreviewBlogContent } from 'src/components'
import { BlogEntryData } from 'types/blog-data'
import Button from '../components/ui/Buttons'
import { AddIcon } from '../components/ui/icons'
import 'highlight.js/styles/tokyo-night-dark.css'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'

export default function Home() {
    const context = useContext(AppContext)
    const router = useRouter()

    const entries = context.entries.toReversed()

    useEffect(() => {
        document.querySelectorAll('pre').forEach((el) => {
            hljs.highlightElement(el)
        })
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-10">
            <div className="flex flex-col">
                <h1 className="pageTitle hidden">Embracing the imposter</h1>
                <p>
                    I create this blog as a project where I could advance my
                    skills as a software developer in areas I would not normally
                    get exposure to in my professional life, while also serving
                    as a place where I can share my journey along the way.
                </p>
                <Button
                    label="Create new post"
                    icon={AddIcon}
                    variant={'secondary'}
                    onClick={() => {
                        console.log('clicked create')
                        router.push('/create-blog')
                    }}
                />
                <section className="flex flex-col divide-y-2">
                    {entries.map((entry: BlogEntryData, index: any) => {
                        return (
                            <Link key={index} href={`/${entry.id}`}>
                                <PreviewBlogContent
                                    entry={entry}
                                    preview={true}
                                />
                            </Link>
                        )
                    })}
                </section>
            </div>
        </main>
    )
}
