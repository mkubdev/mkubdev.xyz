import Link from '@/components/Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = ({ navShow, onToggleNav }) => {
  return (
    <div className="sm:hidden">
      <div
        className={`fixed top-12 right-0 z-40 h-screen w-full bg-white duration-500 ease-in-out dark:bg-violet-1000 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        } bg-opacity-30 backdrop-blur-lg firefox:bg-opacity-100 dark:bg-opacity-30 dark:firefox:bg-opacity-100`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed z-30 h-full w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="relative z-40 mt-8 space-y-8">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12">
              <Link
                href={link.href}
                title={link.title}
                className="text-xl font-semibold leading-8 tracking-wide text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                onClick={onToggleNav}
              >
                {link.title.toLowerCase()}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
