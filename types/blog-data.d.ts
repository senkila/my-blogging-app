import { DeltaStatic } from 'quill'
import { Delta, Op } from 'quill/core'
import { Dispatch } from 'react'

export interface BlogFormValue {
    title: string
    content: Op[]
}
export interface BlogDBEntry extends BlogFormValue {
    _id: any
    dateCreated: string
}

export interface BlogDBEntries {
    entries: BlogDBEntry[]
}

export interface AppContextInterface {
    entries: BlogDBEntry[]
    addEntry: Dispatch<any>
}
