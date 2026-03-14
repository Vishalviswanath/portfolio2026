import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { CgArrowDown } from 'react-icons/cg';

export default function Hero() {
  return (
    <section className='min-h-svh flex items-center justify-center px-6 pt-24 md:pt-20'>
      <div className='max-w-6xl mx-auto '>
        {/* MAIN GRID */}

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* LEFT TITLE */}

          <div>
            <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
              <span className='block'>Full Stack</span>

              <span
                className='block'
                style={{
                  background:
                    'linear-gradient(90deg,var(--color3),var(--color4))',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Developer
              </span>
            </h1>
          </div>

          <div>
            <p className='text-lg max-w-md' style={{ color: 'var(--color4)' }}>
              Full Stack Developer with 3.5+ years of experience building
              scalable web applications using React.js, Node.js and Express.js.
              Passionate about building high-performance systems and elegant
              user experiences.
            </p>

            {/* BUTTONS */}

            <div className='flex gap-4 mt-8'>
              <a
                href='#projects'
                className='px-6 py-3 rounded-full transition'
                style={{
                  background: 'var(--color3)',
                  color: 'var(--color1)',
                }}
              >
                View Work
              </a>

              <a
                href='#contact'
                className='px-6 py-3 rounded-full border transition'
                style={{
                  borderColor: 'var(--color3)',
                  color: 'var(--color4)',
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}

        <div className='flex gap-6 mt-16 justify-center'>
          <a
            href='https://github.com/Vishalviswanath'
            className='p-3 rounded-lg border hover-gradient'
            style={{ borderColor: 'var(--color2)' }}
          >
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/vishal12viswanath'
            className='p-3 rounded-lg border hover-gradient'
            style={{ borderColor: 'var(--color2)' }}
          >
            <FaLinkedin />
          </a>

          <a
            href='mailto:vishal12viswanath@gmail.com'
            className='p-3 rounded-lg border hover-gradient'
            style={{ borderColor: 'var(--color2)' }}
          >
            <FaEnvelope />
          </a>
        </div>

        {/* SCROLL ICON */}

        <div
          className='flex justify-center mt-10 animate-bounce'
          style={{ color: 'var(--color3)' }}
        >
          <CgArrowDown size={24} />
        </div>
      </div>
    </section>
  );
}
