'use client'
import { BlogDBEntry } from 'types/blog-data'
import parse from 'html-react-parser'
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'
import './blog.styles.css'
import hljs from 'highlight.js'
import { useEffect } from 'react'
import { covertToLocalDate, isHighlighted } from '@/src/utils/utils'

type DisplayBlogContentProps = {
    entry?: BlogDBEntry
    index?: any
    id?: string
    preview?: boolean
    className?: string
    [x: string]: any
}

type BlogContentProps = {
    entry?: BlogDBEntry
    index?: any
    className?: string
    [x: string]: any
}

export const DisplayBlogContent = ({
    entry = {} as BlogDBEntry,
    index = '',
    id,
    preview,
    className,
    ...rest
}: DisplayBlogContentProps) => {
    const { title, dateCreated, content } = entry
    const contentType = preview ? 'preview-entry' : 'full-entry'
    // const convertedHtml = new QuillDeltaToHtmlConverter(
    //     preview && content?.length > 3 ? content.slice(0, 3) : content,
    //     {}
    // ).convert()
    const convertedHtml = new QuillDeltaToHtmlConverter(content, {}).convert()

    const dateCreatedString = `${covertToLocalDate(dateCreated as string)}`

    useEffect(() => {
        document
            .getElementById('blog-content')
            ?.querySelectorAll('pre')
            .forEach((el) => {
                !isHighlighted(el) && hljs.highlightElement(el)
            })
    }, [])

    return entry ? (
        <section
            id={`blog-content${index}`}
            className={`${contentType} blog-section flex flex-col`}
            {...rest}
        >
            <div className={`${contentType} blog-heading`}>
                <h2>{title}</h2>
                <p className={`date-created ${contentType}`}>
                    {dateCreatedString}
                </p>
            </div>
            <div className={`${contentType}${preview ? ' line-clamp-4' : ''}`}>
                {parse(convertedHtml)}
            </div>
        </section>
    ) : (
        <p className="bold text-lg"> Error retrieve blog entry</p>
    )
}

export const FullBlogContent = ({
    entry,
    className,
    ...rest
}: BlogContentProps) => {
    return (
        <DisplayBlogContent
            id={'blog-content'}
            entry={entry}
            preview={false}
            {...rest}
        />
    )
}

export const PreviewBlogContent = ({
    entry,
    className,
    ...rest
}: BlogContentProps) => {
    return (
        <DisplayBlogContent
            id={'preview-blog'}
            entry={entry}
            preview={true}
            {...rest}
        />
    )
}
