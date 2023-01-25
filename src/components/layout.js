import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div
      data-is-root-path={isRootPath}
      className="bg-zinc-800 min-h-screen text-zinc-50"
    >
      <header className="max-w-2xl mx-auto flex items-center py-5">
        <StaticImage
          layout="fixed"
          formats={['auto', 'webp', 'avif']}
          src="../images/profile-pic.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
          className="rounded-full mr-4"
        />
        <Link to="/" className="text-2xl">
          {title}
        </Link>
      </header>
      <main className="max-w-2xl mx-auto mt-8">{children}</main>
      <footer className="max-w-2xl mx-auto text-center text-sm font-light text-zinc-400 py-4">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
