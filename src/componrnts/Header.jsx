import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md '>
    <div className='flex justify-between items-center max-w-6xl container mx-auto p-6 lg:p-0 lg:py-6'>
    <Link to='/'>
        <h1 className='font-extrabold text-sm sm:text-xl flex-wrap'>
        <span className='text-slate-500'><span className='text-3xl text-red-400'>V</span>enture</span>
        <span className='text-slate-700'><span className='text-3xl text-cyan-900'>E</span>state</span>
      </h1>
      </Link>
        <form className='bg-slate-50 p-3 rounded-lg flex items-center'>
           <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
           <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-6'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
                Home
            </li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
                About
            </li>
            </Link>
            <Link to='sign-in'>
            <li className=' sm:inline text-slate-700 hover:underline'>
                Sign in
            </li>
            </Link>
        </ul>
     </div>
    </header>
  )
}

export default Header
