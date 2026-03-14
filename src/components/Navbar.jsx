import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='fixed top-0 w-full z-50 glass backdrop-blur-xl h-20'>
        <div className='max-w-6xl mx-auto flex justify-between items-center px-6 h-full'>
          {/* LOGO */}

          <h1 className='text-xl font-semibold tracking-wide'>
            <span style={{ color: 'var(--color3)' }}>Viswanath</span>.
          </h1>

          {/* DESKTOP MENU */}

          <div className='hidden md:flex items-center gap-8 text-sm'>
            <NavItem link='#about' label='About' />
            <NavItem link='#skills' label='Skills' />
            <NavItem link='#projects' label='Projects' />
            <NavItem link='#experience' label='Experience' />
            <NavItem link='#contact' label='Contact' />

            {/* HIRE BUTTON */}

            <Link
              to='/hire'
              className='glass gradient not-last:px-5 px-2 py-1.5 rounded-full font-medium transition'
              style={{
                color: 'var(--color3)',
              }}
            >
              Hire Me
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button className='md:hidden text-xl' onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}

        {open && (
          <div className='md:hidden flex flex-col gap-6 px-6 pb-6 pt-2 text-sm glass'>
            <NavItem link='#about' label='About' />
            <NavItem link='#skills' label='Skills' />
            <NavItem link='#projects' label='Projects' />
            <NavItem link='#experience' label='Experience' />
            <NavItem link='#contact' label='Contact' />

            <a
              href='#contact'
              className='px-5 py-2 rounded-full text-center transition gold-glow'
              style={{
                background: 'var(--color3)',
                color: 'var(--color1)',
              }}
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>
      <div className="h-20"></div>

    </>
  );
}

function NavItem({ link, label }) {
  return (
    <a
      href={link}
      className='relative text-gray-300 hover:text-white transition'
    >
      {label}

      <span
        className='absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300'
        style={{ background: 'var(--color3)' }}
      ></span>
    </a>
  );
}
