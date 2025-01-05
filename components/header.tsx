import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'  // Importing the usePathname hook
import { ThemeToggle } from './theme-toggle'
import Image from 'next/image'
import authorImage from '@/public/images/authors/fjerbi.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()  // Access the current path using usePathname

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Define the type of 'path' parameter explicitly
  const getLinkClassName = (path: string) => {
    return pathname === path
      ? 'block rounded bg-gray-700 px-3 py-2 text-white dark:text-white transition-all duration-100 ease-in-out' // Active link styles
      : 'block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-gray-700 md:dark:hover:bg-transparent md:dark:hover:text-gray-500 transition-all duration-300 ease-in-out' // Inactive link styles
  }

  return (
    <nav className='border-gray-200 bg-white dark:bg-gray-900'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <h1 className='whitespace-nowrap text-2xl font-semibold dark:text-white flex items-center space-x-2'>
            <span>Firas JERBI</span>
            <Image src={authorImage} alt="Firas Jerbi" width={50} height={50} priority className="rounded-full" />
          </h1>
        </Link>
        <button
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
          aria-controls='navbar-default'
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className='sr-only'>Open the main menu</span>
          {isMenuOpen ? (
            <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
            </svg>
          ) : (
            <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
            </svg>
          )}
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id='navbar-default'>
          <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-white p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse'>
            <li>
              <Link href='/posts' className={getLinkClassName('/posts')} aria-current='page'>
                Posts
              </Link>
            </li>
            <li>
              <Link href='/projects' className={getLinkClassName('/projects')}>
                Projects
              </Link>
            </li>
            <li>
              <Link href='/resume' className={getLinkClassName('/resume')}>
                Resume
              </Link>
            </li>
            <li>
              <Link href='/contact' className={getLinkClassName('/contact')}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
