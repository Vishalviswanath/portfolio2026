import { useRef } from 'react';
import useReveal from '../hooks/useReveal';

import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiNginx,
  SiSocketdotio,
  SiBootstrap,
  SiMui,
} from 'react-icons/si';

import { Server, Database, Cpu } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);

  useReveal(ref);

  return (
    <section id='skills' ref={ref} className='py-28 px-6 max-w-6xl mx-auto'>
      {/* HEADER */}

      <div className='text-center mb-16'>
        <p
          className='text-sm tracking-widest mb-3'
          style={{ color: 'var(--color3)' }}
        >
          SKILLS
        </p>

        <h2 className='text-4xl font-bold'>My Tech Stack</h2>

        <p className='text-gray-400 mt-4'>
          Technologies I use to design, build and deploy modern web applications
        </p>
      </div>

      {/* SKILL CARDS */}

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <SkillCard
          title='Frontend'
          icon={<FaReact />}
          skills={[
            { name: 'React.js', icon: <FaReact /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            { name: 'Material UI', icon: <SiMui /> },
            { name: 'Bootstrap', icon: <SiBootstrap /> },
            { name: 'Redux', icon: <SiRedux /> },
            { name: 'HTML5 / CSS3', icon: <Cpu size={16} /> },
          ]}
        />

        <SkillCard
          title='Backend'
          icon={<Server size={18} />}
          skills={[
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'REST APIs', icon: <Server size={16} /> },
            { name: 'Socket.IO', icon: <SiSocketdotio /> },
            { name: 'JWT Authentication', icon: <Server size={16} /> },
          ]}
        />

        <SkillCard
          title='Databases & DevOps'
          icon={<Database size={18} />}
          skills={[
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'AWS', icon: <FaAws /> },
            { name: 'NGINX', icon: <SiNginx /> },
          ]}
        />
      </div>
    </section>
  );
}

function SkillCard({ title, icon, skills }) {
  return (
    <div className='glass p-8 rounded-xl border border-white/10 hover-gradient'>
      {/* TITLE */}

      <div className='flex items-center gap-3 mb-6'>
        <span
          className='w-2 h-2 rounded-full'
          style={{ background: 'var(--color3)' }}
        ></span>

        <h3 className='font-semibold text-lg flex items-center gap-2'>
          <span style={{ color: 'var(--color3)' }}>{icon}</span>

          {title}
        </h3>
      </div>

      {/* SKILL PILLS */}

      <div className='flex flex-wrap gap-3'>
        {skills.map((skill, i) => (
          <span
            key={i}
            className='flex items-center gap-2 text-sm px-3 py-1 rounded-lg border border-white/10 text-gray-300 hover:text-white transition'
          >
            <span style={{ color: 'var(--color3)' }}>{skill.icon}</span>

            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
