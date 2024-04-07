import '@testing-library/jest-dom'
import React, { FC, ReactElement } from 'react'
import { DisplayBlogContent, FullBlogContent, PreviewBlogContent } from '..'
import { fakeBlogEntry } from './test-data'
import { render, screen } from '@testing-library/react'

describe('BlogContext', () => {
    describe('DisplayBlogContent', () => {
        it('display content as html', () => {
            const ui = <DisplayBlogContent entry={fakeBlogEntry} />
            render(ui)
            expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
                'A blog about nothing'
            )
            expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
                'Nothingness'
            )
            const subheaders = screen.getAllByRole('heading', { level: 4 })
            expect(subheaders[0]).toHaveTextContent(
                'Nothing rules the universe.'
            )
            expect(subheaders[1]).toHaveTextContent(
                'From nothing to something, and back to nothing'
            )
            expect(subheaders[2]).toHaveTextContent('The end?')
        })
        it('render error if entry prop is empty', () => {
            const ui = <DisplayBlogContent entry={undefined} />
            render(ui)

            expect(
                screen.getByText('Error retrieve blog entry')
            ).toBeInTheDocument()
        })
        it('render error if entry prop is empty', () => {
            const ui = <DisplayBlogContent entry={undefined} />
            render(ui)

            expect(
                screen.getByText('Error retrieve blog entry')
            ).toBeInTheDocument()
        })
    })

    describe('PreviewBlogContent', () => {
        it('should render DisplayBlogContent and applies correct class', () => {
            const ui = <PreviewBlogContent entry={fakeBlogEntry} />
            const { container } = render(ui)

            const contentSection = container.querySelector(
                '#blog-content > section'
            )
            expect(contentSection).toHaveClass('preview-entry')
            expect(contentSection).toHaveClass('line-clamp-5')
            expect(contentSection).not.toHaveClass('full-entry')
        })
    })

    describe('FullBlogContent', () => {
        it('should render DisplayBlogContent and applies correct class', () => {
            const ui = <FullBlogContent entry={fakeBlogEntry} />
            const { container } = render(ui)
            const contentSection = container.querySelector(
                '#blog-content > section'
            )
            expect(contentSection).toHaveClass('full-entry')
            expect(contentSection).not.toHaveClass('preview-entry')
            expect(contentSection).not.toHaveClass('line-clamp-5')
        })
    })
})
