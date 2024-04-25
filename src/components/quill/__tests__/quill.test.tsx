import React, { Suspense } from 'react'
import { render, screen, waitFor, act, fireEvent } from '@/src/utils/testUtils'
import QuillEditor from '../quillEditor'
import userEvent from '@testing-library/user-event'
import { QuillOptions } from 'quill'

class MockQuillEditor {
    constructor(container: String | HTMLElement, options: QuillOptions) {
        if (typeof container === 'string') {
            // @ts-ignore
            document.querySelector(container).innerHTML
        } else {
            // @ts-ignore
            container.innerHTML = '<div><p>Mock Quill Editor</p></div>'
        }
    }

    element: any
    logAction(msg: string, params?: []) {
        console.log(msg, params)
    }
}

// jest.mock('quill', () => {
//     return {
//         __esModule: true,
//         default: jest.fn().mockImplementation(() => {
//             return {
//                 Quill: MockQuillEditor,
//             }
//         }),
//     }
// })

jest.mock('quill', () => {
    return {
        __esModule: true,
        default: jest.fn().mockImplementation((container, options) => {
            return new MockQuillEditor(container, options)
        }),
    }
})
describe('PageLayout', () => {
    it('display content as html', async () => {
        const ui = (
            <Suspense fallback={<div>Loading</div>}>
                <QuillEditor />
            </Suspense>
        )
        // const { container } = render(ui)

        act(() => {
            render(ui)
        })

        expect(
            (await screen.findByRole('textbox')).getAttribute('placeholder')
        ).toEqual('Title for blog entry...')

        screen.logTestingPlaygroundURL()

        expect(
            screen.getByRole('button', {
                name: /submit/i,
            })
        ).toBeInTheDocument()

        expect(
            screen.getByRole('button', {
                name: /cancel/i,
            })
        ).toBeInTheDocument()
    })
    it.only('click submit button', async () => {
        const mockOnSubmit = jest.fn()
        const user = userEvent.setup()
        const ui = (
            <Suspense fallback={<div>Loading</div>}>
                <QuillEditor onSubmit={mockOnSubmit} />
            </Suspense>
        )

        const { container } = render(ui)

        // const titleInput = screen.findByRole('textbox')
        expect(await screen.findByRole('textbox')).toHaveValue('')

        await user.type(await screen.findByRole('textbox'), 'Test title')

        await waitFor(() => {
            expect(screen.getByRole('textbox')).toHaveValue('Test title')
            screen.logTestingPlaygroundURL()
        })

        fireEvent.submit(screen.getByTestId('blogEditor'))

        // screen.logTestingPlaygroundURL()

        await waitFor(() => {
            expect(mockOnSubmit).toHaveBeenCalled()
        })
    })
})
