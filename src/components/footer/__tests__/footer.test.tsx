import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@/src/utils/testUtils'
import Footer from '../footer'

describe('Footer', () => {
    it('display content as html', () => {
        const ui = <Footer />
        render(ui)
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(2)
        expect(links[0]).toHaveTextContent('Home')
        expect(links[1]).toHaveTextContent('About me')
    })
})
