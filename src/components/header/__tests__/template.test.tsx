import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@/src/utils/testUtils'
import { PageHeader } from '../header'

describe('PageHeader', () => {
    it('display content as html', () => {
        const ui = <PageHeader />
        render(ui)
        const image = screen.getAllByRole('img')
        expect(image).toHaveLength(2)
        expect(image[0]).toMatchSnapshot()
        expect(image[1]).toMatchSnapshot()
    })
})
