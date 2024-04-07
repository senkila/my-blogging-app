import { DeltaStatic } from 'quill'
import { Delta } from 'quill/core'
import { Dispatch } from 'react'

export interface BlogEntryData {
    title: String
    dateCreated: String
    content: DeltaStatic
    id: String
}

export interface BlogEntriesObject {
    entries: IBlogEntry[]
}

export interface AppContextInterface {
    entries: IBlogEntry[]
    addEntry: Dispatch<any>
}
