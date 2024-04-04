'use client'
import { useContext, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import './editor.css'
import dynamic from 'next/dynamic'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import { BlogEntry } from 'types/blog-data'
import { useRouter } from 'next/navigation'
import short from 'short-uuid'
import { AppContext } from '..'

// const QuillEditor = dynamic(() => import('react-quill'), { ssr: false })
const generateId = (title: string) => {
    const shortuuid = short.generate()
    const pageId = `${title.toLocaleLowerCase().replaceAll(' ', '-')}-${shortuuid}`
    return pageId
}

const QuillEditor = dynamic(
    () => {
        hljs.configure({
            languages: ['javascript', 'CSS', 'HTML'],
        })
        // @ts-ignore
        window.hljs = hljs
        return import('react-quill')
    },
    {
        ssr: false,
        loading: () => <p>Quill loading</p>,
    }
)

const quillModule = {
    syntax: true,
    toolbar: [
        [{ header: [3, 4, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
        ['link', 'image', 'code-block'],
    ],
}

const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
]

export const BlogEditor = () => {
    // Editor state
    const [value, setValue] = useState({} as any)
    const [title, setTItle] = useState('')
    const { addEntry } = useContext(AppContext)

    const router = useRouter()

    const handleSubmit = (formData: FormData) => {
        const date = new Date()
        const localTime = date.toLocaleTimeString('en-AU')
        const localDate = date.toLocaleDateString('en-AU')
        const timezone = date.getTimezoneOffset()

        const newEntry: BlogEntry = {
            title,
            dateCreated: `${localDate} ${localTime}`,
            content: value.ops,
            id: generateId(title),
        }
        console.log('adding new entry', { newEntry, timezone })
        addEntry(newEntry)

        router.push('/')
    }

    return (
        <div className={'wrapper'}>
            <form action={handleSubmit}>
                <fieldset className="field flex flex-col">
                    <input
                        className="title mt-4 font-serif text-4xl p-1 shadow-sm border-black border-2"
                        id={'inputTitle'}
                        placeholder="Title for blog entry..."
                        value={title}
                        onChange={(e) => {
                            return setTItle(e.target.value)
                        }}
                    />
                </fieldset>
                <QuillEditor
                    className={'editor'}
                    value={value}
                    onChange={(value, delta, sources, editor) => {
                        const content = editor.getContents()
                        setValue(content)
                    }}
                    modules={quillModule}
                    formats={quillFormats}
                />
                <div className="btn-container flex flex-row-reverse gap-x-4">
                    <button
                        className={'btn bg-orange-400 hover:bg-orange-300'}
                        // onClick={handleSubmit}
                        type={'submit'}
                    >
                        Submit
                    </button>
                    <button
                        className={'btn cancel hover:bg-slate-100'}
                        type={'button'}
                        onClick={() => router.push('/')}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BlogEditor
