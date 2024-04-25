import { BlogDBEntry } from '@/types/blog-data'
import Link from 'next/link'
import React from 'react'
import { PreviewBlogContent } from '.'
import { getBlogEntris } from '@/src/utils/common/serverActions'

const PreviewBlogList = async () => {
    const blogContent: BlogDBEntry[] = await getBlogEntris()
    return (
        <>
            <section className="flex flex-col divide-y-2 border-y-2 pb-8    ">
                {blogContent?.map?.((entry: BlogDBEntry, index: any) => {
                    return (
                        <div key={index} className="px-4">
                            <Link href={`/blog/${entry._id}`}>
                                <PreviewBlogContent
                                    entry={entry}
                                    index={index}
                                    preview={true}
                                />
                            </Link>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default PreviewBlogList
