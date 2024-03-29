import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import TwitterIcon from './TwitterIcon'
import GithubIcon from './GithubIcon'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div
      data-is-root-path={isRootPath}
      className="bg-zinc-800 min-h-screen text-zinc-50 px-4"
    >
      <header className="max-w-2xl mx-auto flex items-center py-5">
        <Link to="/" className="text-xl sm:text-2xl flex items-center flex-1">
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
          {title}
        </Link>

        <a
          href="https://twitter.com/laurak_cleve"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          class="w-12 h-12 flex items-center justify-center"
        >
          <TwitterIcon className="fill-emerald-300" />
        </a>
        <a
          href="https://github.com/laurakcleve"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          class="w-12 h-12 flex items-center justify-center"
        >
          <GithubIcon className="fill-emerald-300" />
        </a>
      </header>
      <main className="max-w-2xl mx-auto mt-8">{children}</main>
      <footer className="max-w-2xl mx-auto text-center text-sm font-light text-zinc-400 py-4">
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
