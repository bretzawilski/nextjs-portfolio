import React from 'react'

const Footer = () => {
  return (
    <div className="lg:mt-18 mt-12 py-6 sm:py-12 sm:pb-36">
      <div className="mx-auto max-w-4xl px-4 text-gray-800 dark:text-white">
        <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8"></div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <p>Built with Next.js and TailwindCSS</p>
          <div className="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
            <a
              href="https://twitter.com/thisisdrzed"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/zawilsbj/"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/bretzawilski"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://medium.com/@bzawilski"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
