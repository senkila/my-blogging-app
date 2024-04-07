import short from 'short-uuid'

export const getCurrentDateString = () => {
    const date = new Date()
    return date.toLocaleDateString('en-AU')
}

export const generateId = (title: string) => {
    const shortuuid = short.generate()
    const pageId = `${title.toLocaleLowerCase().replaceAll(' ', '-')}-${shortuuid}`
    return pageId
}
