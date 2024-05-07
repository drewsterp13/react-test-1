import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-500 text-white flex flex-col md:flex-row justify-between p-2">
        <div className="flex flex-row justify-center">
            <h1 className="text-yellow-300 font-bold text-2xl sm:text-3xl p-1">THE CAR DEALERSHIP's</h1>
            <h3 className="text-xl sm:text-2xl p-1">car data modifier</h3>
        </div>
        <div className="flex flex-row justify-center">
            <Link to="/" className="p-1">home</Link>
            <Link to="/dashboard" className="p-1">dashboard</Link>
            <Link to="/info" className="p-1">info</Link>
        </div>
    </nav>
  )
}
