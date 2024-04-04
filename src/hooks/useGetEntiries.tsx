'use client'

import React, { useContext } from 'react'
import { AppContext } from '../components/context/AppContext'
import entry from '../../public/blog-entries.json'

export const useGetEntries = () => {
    const { entries, addEntry } = useContext(AppContext)

    addEntry(entry)
}
