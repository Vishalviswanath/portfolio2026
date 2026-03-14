import { useRef } from 'react';
import { Code, Layers, Zap, Coffee } from 'lucide-react';
import useReveal from '../hooks/useReveal';

export default function About() {
  const ref = useRef(null);

  useReveal(ref);

  return (
    <section
      id='about'
      ref={ref}
      className='relative py-28 px-6 max-w-6xl mx-auto '
    >


      <div>
        <p
          className='text-sm tracking-widest mb-4'
          style={{ color: 'var(--color3)' }}
        >
          ABOUT ME
        </p>

        <h2 className='text-4xl font-bold leading-tight'>
          Passionate about building
          <br />
          <span style={{ color: 'var(--color4)' }}>
            exceptional digital experiences
          </span>
        </h2>

        <p className='mt-6 leading-relaxed text-gray-300'>
          I'm a Full Stack Developer with 3.5+ years of experience building
          scalable web applications using React.js, Node.js and Express.js. I
          specialize in developing modern frontends, secure backend APIs and
          cloud-ready systems.
        </p>

        <p className='mt-4 leading-relaxed text-gray-300'>
          I have worked on AI-powered analytics dashboards, enterprise
          integrations, and real-time communication platforms. My focus is on
          writing clean, maintainable code while delivering high-performance
          user experiences.
        </p>

        {/* STATS */}

        <div className='grid grid-cols-2 gap-5 mt-10'>
          <Stat
            icon={<Code size={20} />}
            value='3.5+'
            label='Years Experience'
          />

          <Stat
            icon={<Layers size={20} />}
            value='30+'
            label='Projects Completed'
          />

          <Stat icon={<Zap size={20} />} value='15+' label='Technologies' />

          <Stat icon={<Coffee size={20} />} value='∞' label='Coffee Cups' />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className='glass p-5 rounded-xl hover-gradient transition'>
      <div className='mb-2' style={{ color: 'var(--color3)' }}>
        {icon}
      </div>

      <h3 className='text-xl font-semibold'>{value}</h3>

      <p className='text-sm text-gray-400'>{label}</p>
    </div>
  );
}
