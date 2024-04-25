import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@/src/utils/testUtils'
import PageLayout from '../layout'

describe('PageLayout', () => {
    it('display content as html', () => {
        const ui = (
            <PageLayout>
                <div>
                    <h2>Test</h2>
                </div>
            </PageLayout>
        )
        const { container } = render(ui)
        const header = container.querySelector('#pageHeader')
        const footer = container.querySelector('#footer')
        expect(header).toBeInTheDocument()
        expect(footer).toBeInTheDocument()
    })
})
