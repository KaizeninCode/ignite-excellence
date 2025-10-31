
const Header = () => {
    const navLinks = [
        {name: 'About Us', href: '#about'},
        {name: 'Our Mission', href: '#mission'},
        {name: 'Our Focus', href: '#focus'},
        {name: 'Registration', href: '#registration'},
    ]
  return (
    <header className='bg-linear-to-l from-[#b3001b] via-red-500/90 to-[#b3001b] text-[#F4FEC1] max-lg:hidden  w-full px-16 py-4 flex items-center justify-between'>
      <a href="#" className='cursor-pointer'>
          <div>
            <img src="/ignite-nobg.png" alt="Ignite Excellence Logo" className='h-16 w-24'/>
          </div>
      </a>
      <nav className='flex justify-around gap-8 text-lg'>
        {navLinks.map((link) => (
            <a href={link.href} key={link.href} className='hover:text-gray-200 hover:scale-102 text-xl transition duration-700 ease-in-out'>{link.name}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header