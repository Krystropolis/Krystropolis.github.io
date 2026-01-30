import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer Component', () => {
  describe('Rendering', () => {
    it('should render the footer element', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
    })

    it('should render the copyright text', () => {
      render(<Footer />)
      const copyrightText = screen.getByText(/© \d+ Krystal Elliott\. All rights reserved\./i)
      expect(copyrightText).toBeInTheDocument()
    })

    it('should render the current year', () => {
      render(<Footer />)
      const currentYear = new Date().getFullYear()
      const yearText = screen.getByText(new RegExp(String(currentYear)))
      expect(yearText).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    it('should accept and apply custom className', () => {
      render(<Footer className="custom-class" />)
      const footer = screen.getByRole('contentinfo')
      expect(footer).toHaveClass('custom-class')
    })

    it('should render without className prop', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('should have default Tailwind classes', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      expect(footer).toHaveClass('bg-surface-light')
      expect(footer).toHaveClass('dark:bg-surface-dark')
      expect(footer).toHaveClass('border-t')
      expect(footer).toHaveClass('border-gray-200')
      expect(footer).toHaveClass('dark:border-gray-700')
    })

    it('should have container with proper padding', () => {
      render(<Footer />)
      const container = screen.getByRole('contentinfo').querySelector('.container')
      expect(container).toHaveClass('mx-auto')
      expect(container).toHaveClass('px-4')
      expect(container).toHaveClass('py-12')
    })
  })

  describe('Content', () => {
    it('should display the author name as Krystal Elliott', () => {
      render(<Footer />)
      const authorName = screen.getByText(/Krystal Elliott/i)
      expect(authorName).toBeInTheDocument()
    })

    it('should display All rights reserved text', () => {
      render(<Footer />)
      const rightsText = screen.getByText(/All rights reserved/i)
      expect(rightsText).toBeInTheDocument()
    })
  })
})
