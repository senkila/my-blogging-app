import { BlogEntry } from 'types/blog-data'
import parse from 'html-react-parser'
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'
import './blog.styles.css'

type DisplayBlogContentProps = {
    entry?: BlogEntry
    id?: string
    preview?: boolean
    className?: string
    [x: string]: any
}

type BlogContentProps = {
    entry?: BlogEntry
    className?: string
    [x: string]: any
}

export const DisplayBlogContent = ({
    entry,
    id,
    preview,
    className,
    ...rest
}: DisplayBlogContentProps) => {
    const { title, dateCreated, content } = entry || {}
    const deltaConverter = new QuillDeltaToHtmlConverter(content, {})
    const contentType = preview ? 'preview-entry' : 'full-entry'

    const convertedHtml = deltaConverter.convert()
    const dateCreatedString = `Date posted: ${dateCreated}`
    const clampPreview = preview ? ' line-clamp-5' : ''

    return entry ? (
        <div
            id="blog-content"
            className={`${className} flex flex-col pt-8 blog-content`}
            {...rest}
        >
            <h2>{title}</h2>
            <p className={`date-created ${contentType}`}>{dateCreatedString}</p>
            <section className={`${contentType.concat('', clampPreview)}`}>
                {parse(convertedHtml)}
            </section>
        </div>
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
        <DisplayBlogContent id={'blog-content'} entry={entry} preview={false} />
    )
}

export const PreviewBlogContent = ({
    entry,
    className,
    ...rest
}: BlogContentProps) => {
    return (
        <DisplayBlogContent id={'preview-blog'} entry={entry} preview={true} />
    )
}
