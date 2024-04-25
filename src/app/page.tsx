import Link from 'next/link'
import React from 'react'
import Button from '../components/ui/button'
import { AddIcon } from '../components/ui/icons'
import 'highlight.js/styles/tokyo-night-dark.css'
import dynamic from 'next/dynamic'
import { Loading } from '../components'

const PreviewBlogList = dynamic(
    () => import('../components/blog/blog-layout'),
    {
        loading: () => <Loading className="border-black border-2" />,
    }
)

const Home = async () => {
    console.log('Home page')

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
                <div className="py-10">
                    <Link href="/blog/add">
                        <Button
                            label="Create new post"
                            icon={AddIcon}
                            variant={'secondary'}
                        />
                    </Link>
                </div>

                <PreviewBlogList />
                {/* <PreviewBlogList getPageContent={getBlogEntris} /> */}
            </div>
        </main>
    )
}

export default Home
