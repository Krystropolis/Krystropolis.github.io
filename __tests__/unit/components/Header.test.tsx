import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Header from '@/components/Header'
import { getMockedLocalStorage } from '@/test-helpers'

// Mock Next.js hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

describe('Header Component', () => {
  let usePathname: jest.Mock

  beforeEach(() => {
    usePathname = require('next/navigation').usePathname
    usePathname.mockReturnValue('/')
    getMockedLocalStorage().getItem.mockReturnValue(null)
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    usePathname.mockReset()
    getMockedLocalStorage().clear()
  })

  describe('Rendering', () => {
    it('should render the header element', () => {
      render(<Header />)
      const header = screen.getByRole('banner')
      expect(header).toBeInTheDocument()
    })

    it('should render the logo link to home', () => {
      render(<Header />)
      const logoLinks = screen.getAllByRole('link', { name: /home/i })
      expect(logoLinks.length).toBe(2) // Logo link and nav item link
      expect(logoLinks[0]).toHaveAttribute('href', '/')
    })

    it('should render the logo with K letter', () => {
      render(<Header />)
      const logoLetter = screen.getByText('K')
      expect(logoLetter).toBeInTheDocument()
    })

    it('should render the Krystropolis brand name', () => {
      render(<Header />)
      const brandName = screen.getByText('Krystropolis')
      expect(brandName).toBeInTheDocument()
    })
  })

  describe('Navigation Items', () => {
    it('should render all navigation items', () => {
      render(<Header />)
      const navLinks = screen.getAllByRole('link')
      expect(navLinks.length).toBeGreaterThan(0)
    })

    it('should mark active navigation item', () => {
      usePathname.mockReturnValue('/resume')
      render(<Header />)
      const resumeLink = screen.getByRole('link', { name: 'Resume' })
      expect(resumeLink).toHaveClass('text-primary-600')
    })

    it('should mark home as active on root path', () => {
      usePathname.mockReturnValue('/')
      render(<Header />)
      const homeLinks = screen.getAllByRole('link', { name: 'Home' })
      expect(homeLinks.length).toBe(2)
    })
  })

  describe('Dark Mode Toggle', () => {
    it('should render dark mode toggle button', () => {
      render(<Header />)
      const toggleButton = screen.getByLabelText(/switch to dark mode/i)
      expect(toggleButton).toBeInTheDocument()
    })

    it('should toggle dark mode when clicked', async () => {
      render(<Header />)
      const toggleButton = screen.getByLabelText(/switch to dark mode/i)
      
      fireEvent.click(toggleButton)
      
      await waitFor(() => {
        expect(document.documentElement).toHaveClass('dark')
      })
    })

    it('should toggle back to light mode', async () => {
      // Start with dark mode
      getMockedLocalStorage().getItem.mockReturnValue('dark')
      render(<Header />)
      
      // Wait for initial dark mode to be set
      await waitFor(() => {
        expect(document.documentElement).toHaveClass('dark')
      })

      const toggleButton = screen.getByLabelText(/switch to light mode/i)
      
      fireEvent.click(toggleButton)
      
      await waitFor(() => {
        expect(document.documentElement).not.toHaveClass('dark')
      })
    })

    it('should load saved light theme from localStorage', async () => {
      getMockedLocalStorage().getItem.mockReturnValue('light')
      render(<Header />)
      
      await waitFor(() => {
        expect(document.documentElement).not.toHaveClass('dark')
      })
    })
  })

  describe('Mobile Menu', () => {
    it('should render mobile menu button', () => {
      render(<Header />)
      const menuButton = screen.getByLabelText(/toggle navigation menu/i)
      expect(menuButton).toBeInTheDocument()
    })

    it('should open mobile menu when button is clicked', () => {
      render(<Header />)
      const menuButton = screen.getByLabelText(/toggle navigation menu/i)
      
      fireEvent.click(menuButton)
      
      expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    })

    it('should close mobile menu when button is clicked again', () => {
      render(<Header />)
      const menuButton = screen.getByLabelText(/toggle navigation menu/i)
      
      fireEvent.click(menuButton)
      expect(menuButton).toHaveAttribute('aria-expanded', 'true')
      
      fireEvent.click(menuButton)
      expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    })

    it('should display navigation items in mobile menu when open', () => {
      render(<Header />)
      const menuButton = screen.getByLabelText(/toggle navigation menu/i)
      
      fireEvent.click(menuButton)
      
      const mobileMenu = screen.getByRole('menu')
      expect(mobileMenu).toBeInTheDocument()
    })

    it('should have dark mode toggle in mobile menu', () => {
      render(<Header />)
      const menuButton = screen.getByLabelText(/toggle navigation menu/i)
      
      fireEvent.click(menuButton)
      
      const darkModeText = screen.getByText(/dark mode/i)
      expect(darkModeText).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper aria-label on navigation', () => {
      render(<Header />)
      const nav = screen.getByRole('navigation', { name: /main navigation/i })
      expect(nav).toBeInTheDocument()
    })

    it('should have aria-current on active navigation item', () => {
      usePathname.mockReturnValue('/about')
      render(<Header />)
      const aboutLink = screen.getByRole('link', { name: 'About' })
      expect(aboutLink).toHaveAttribute('aria-current', 'page')
    })

    it('should have proper aria-expanded on mobile menu button', () => {
      render(<Header />)
      const menuButton = screen.getByLabelText(/toggle navigation menu/i)
      expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    })

    it('should have aria-controls on mobile menu button', () => {
      render(<Header />)
      const menuButton = screen.getByLabelText(/toggle navigation menu/i)
      expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu')
    })
  })

  describe('Styling', () => {
    it('should have sticky positioning', () => {
      render(<Header />)
      const header = screen.getByRole('banner')
      expect(header).toHaveClass('sticky')
      expect(header).toHaveClass('top-0')
    })

    it('should have z-index for layering', () => {
      render(<Header />)
      const header = screen.getByRole('banner')
      expect(header).toHaveClass('z-50')
    })

    it('should have proper dark mode classes', () => {
      render(<Header />)
      const header = screen.getByRole('banner')
      expect(header).toHaveClass('dark:bg-surface-dark')
    })
  })

  describe('Props', () => {
    it('should accept and apply custom className', () => {
      render(<Header className="custom-class" />)
      const header = screen.getByRole('banner')
      expect(header).toHaveClass('custom-class')
    })

    it('should render without className prop', () => {
      render(<Header />)
      const header = screen.getByRole('banner')
      expect(header).toBeInTheDocument()
    })
  })
})
