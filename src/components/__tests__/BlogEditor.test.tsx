import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import TextEditor from '../text-editor/TextEditor'

describe('BlogEditor', () => {
    describe('DisplayBlogContent', () => {
        it('display content as html', () => {
            const ui = <TextEditor />
            render(ui)
            expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
                'A blog about nothing'
            )
            expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
                'Nothingness'
            )
        })
    })
})
