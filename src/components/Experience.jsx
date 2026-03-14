import { useRef } from 'react';
import useReveal from '../hooks/useReveal';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);

  useReveal(ref);

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Garudalytics Pvt Ltd',
      time: 'May 2025 – Present',
      desc: 'Developing scalable web applications and AI-powered analytics dashboards. Building modern frontend interfaces and integrating enterprise APIs.',
      stack: ['React.js', 'Node.js', 'PostgreSQL', 'AWS'],
    },

    {
      title: 'MERN Stack Developer',
      company: 'Vynx Group of Companies',
      time: 'Sep 2024 – Mar 2025',
      desc: 'Developed scalable web platforms with secure REST APIs and optimized database architecture for enterprise applications.',
      stack: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    },

    {
      title: 'Associate Software Engineer',
      company: 'Varky Technology Solutions',
      time: 'Jul 2022 – Aug 2024',
      desc: 'Built enterprise dashboards, optimized frontend performance and integrated backend APIs for business intelligence systems.',
      stack: ['React.js', 'Redux', 'Node.js', 'REST APIs'],
    },

    {
      title: 'CAD 2 Engineer',
      company: 'Conformis LLP (India)',
      time: 'May 2021 – Jun 2022',
      desc: 'Worked on engineering design workflows and collaborated with technical teams to deliver precise CAD models.',
      stack: ['Engineering Design', 'CAD'],
    },

    {
      title: 'Design Engineer',
      company: 'Geo Sensor',
      time: 'Nov 2017 – Apr 2021',
      desc: 'Designed and developed engineering solutions while working closely with cross-functional teams on sensor technologies.',
      stack: ['Product Design', 'Engineering'],
    },

    {
      title: 'Apprenticeship',
      company: 'BHEL R&D',
      time: 'Sep 2016 – Sep 2017',
      desc: 'Worked with research and development teams on engineering processes and technical documentation.',
      stack: ['R&D', 'Engineering'],
    },
  ];

  return (
    <section id='experience' ref={ref} className='py-28 px-6 max-w-5xl mx-auto'>
      {/* HEADER */}

      <div className='text-center mb-16'>
        <p
          className='text-sm tracking-widest mb-3'
          style={{ color: 'var(--color3)' }}
        >
          EXPERIENCE
        </p>

        <h2 className='text-4xl font-bold'>Career Journey</h2>

        <p className='text-gray-400 mt-4'>
          My professional journey across full stack development and engineering
          roles
        </p>
      </div>

      {/* TIMELINE */}

      <div className='relative border-l border-white/10 pl-8 space-y-10'>
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, time, desc, stack }) {
  return (
    <div className='relative'>
      {/* TIMELINE ICON */}

      <div className='absolute -left-[38px] top-2 w-8 h-8 rounded-lg flex items-center justify-center glass'>
        <Briefcase size={16} style={{ color: 'var(--color3)' }} />
      </div>

      {/* CARD */}

      <div className='glass p-6 rounded-xl border border-white/10 hover-gradient'>
        <div className='flex justify-between items-center mb-2'>
          <h3 className='font-semibold'>{title}</h3>

          <span className='text-xs text-gray-400'>{time}</span>
        </div>

        <p className='text-sm mb-3' style={{ color: 'var(--color3)' }}>
          {company}
        </p>

        <p className='text-gray-400 text-sm mb-4'>{desc}</p>

        <div className='flex gap-2 flex-wrap'>
          {stack.map((tech, i) => (
            <span
              key={i}
              className='text-xs border border-white/10 px-2 py-1 rounded'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
