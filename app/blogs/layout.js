import Link from "next/link"

const layout = ({children}) => {
  return (
    <div>
      <nav className="mb-4 px-10">
        <ul className="flex gap-8">
            <li> <Link href="#"> Mission </Link> </li>
            <li> <Link href="#"> Vission </Link> </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default layout
