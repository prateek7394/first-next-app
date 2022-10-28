import Link from "next/link"

const Navbar = () => {
  return (
        <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a> About </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a> Contact </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a> Blog </a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a> News </a>
            </Link>
          </li>
          <li>
            <Link href="/houses">
              <a> Houses </a>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <a> Product </a>
            </Link>
          </li>
          <li>
            <Link href="/docs">
              <a> Docs </a>
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar