import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@/src/utils/testUtils'
import { BackLink } from '../backlink'

describe('BackLink', () => {
    it('display content as html', () => {
        const ui = <BackLink href="/test" />
        render(ui)
        const link = screen.getByRole('link')
        expect(link.getAttribute('href')).toEqual('/test')
    })
})
