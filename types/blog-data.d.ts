import { DeltaStatic } from 'quill'
import { Delta } from 'quill/core'
import { Dispatch } from 'react'

export interface BlogEntry {
    title: String
    dateCreated: String
    content: DeltaStatic
    id: String
}

export interface BlogEntries {
    entries: BlogEntry[]
}

export interface AppContextInterface {
    entries: BlogEntry[]
    addEntry: Dispatch<any>
}
