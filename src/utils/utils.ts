import short from 'short-uuid'

const getCurrentDate = () => {
    const date = new Date()
    return date.toISOString()
}

const covertToLocalDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-AU')
}

const generateId = (title: string) => {
    const shortuuid = short.generate()
    const pageId = `${title.toLocaleLowerCase().replaceAll(' ', '-')}-${shortuuid}`
    return pageId
}

const isHighlighted = (el: HTMLElement) => {
    return el.getAttribute('data-highlighted') === 'yes'
}

export { getCurrentDate, covertToLocalDate, generateId, isHighlighted }
