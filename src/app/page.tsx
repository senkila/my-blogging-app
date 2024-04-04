'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from 'src/components/context/AppContext'
import { useRouter } from 'next/navigation'
import './globals.css'
import { PreviewBlogContent } from 'src/components'
import { BlogEntry } from 'types/blog-data'

export default function Home() {
    const context = useContext(AppContext)
    const router = useRouter()

    const ref = useRef(null)

    const entries = context.entries.toReversed()
    useEffect(() => {
        console.log('Blog page', { entries })
    }, [entries])

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
                <button
                    className="btn my-4 w-60 self-end inline-flex hover:shadow-inner"
                    onClick={() => router.push('/create-blog')}
                >
                    <Image
                        src="/icons/add.svg"
                        alt="Add"
                        width={24}
                        height={24}
                        priority
                        className="add justify-self-start absolute"
                    />
                    <span className="mx-auto flex flex-row">
                        Create new post
                    </span>
                </button>
                <section className="flex flex-col divide-y-2">
                    {entries.map((entry: BlogEntry, index: any) => {
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
