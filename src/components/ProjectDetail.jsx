import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';

import useReveal from '../hooks/useReveal';

import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code,
  Layers,
  Cpu,
} from 'lucide-react';
import { projects } from './Projects';

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  const ref = useRef(null);

  useReveal(ref);

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        Project Not Found
      </div>
    );
  }

  return (
    <section ref={ref} className='max-w-6xl mx-auto px-6 py-6'>
      {/* BACK BUTTON */}

      <Link
        to='/'
        className='inline-flex items-center gap-2 mb-10 hover:opacity-80'
        style={{ color: 'var(--color3)' }}
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      {/* TITLE */}

      <h1 className='text-4xl md:text-5xl font-bold mb-6'>{project.title}</h1>

      {/* LINKS */}

      <div className='flex gap-4 mb-12'>
        {project.live && (
          <a
            href={project.live}
            target='_blank'
            className='flex items-center gap-2 px-5 py-2 rounded-full '
            style={{
              background: 'var(--color3)',
              color: 'var(--color1)',
            }}
          >
            <ExternalLink size={16} />
            Live Site
          </a>
        )}

        {/* {project.github && (
          <a
            href={project.github}
            target='_blank'
            className='flex items-center gap-2 px-5 py-2 rounded-full border'
            style={{
              borderColor: 'var(--color3)',
              color: 'var(--color4)',
            }}
          >
            <Github size={16} />
            Source Code
          </a>
        )} */}
      </div>

      {/* GRID */}

      <div className='grid md:grid-cols-3 gap-8'>
        {/* LEFT CONTENT */}

        <div className='md:col-span-2 space-y-10'>
          {/* OVERVIEW */}

          <Card title='Overview' icon={<Cpu size={18} />}>
            <p className='text-gray-300 leading-relaxed'>{project.overview}</p>
          </Card>

          {/* FEATURES */}

          <Card title='Key Features' icon={<Layers size={18} />}>
            <ul className='space-y-2'>
              {project.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </Card>

          {/* CONTRIBUTIONS */}

          <Card title='My Contributions' icon={<Code size={18} />}>
            <ul className='space-y-2'>
              {project.contributions.map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>
          </Card>

          {/* ARCHITECTURE */}

          {project.architecture && (
            <Card title='Architecture'>
              <ul className='space-y-2'>
                {project.architecture.map((a, i) => (
                  <li key={i}>• {a}</li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        {/* SIDEBAR */}

        <div className='space-y-8'>
          {/* TECH STACK */}

          <Card title='Tech Stack'>
            <div className='flex flex-wrap gap-2'>
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className='text-sm px-3 py-1 rounded-full border hover-gradient'
                  style={{
                    borderColor: 'var(--color2)',
                    color: 'var(--color4)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* DEPLOYMENT */}

          {project.deployment && (
            <Card title='Deployment'>
              <p className='text-sm text-gray-400 leading-relaxed'>
                {project.deployment}
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

function Card({ title, children, icon }) {
  return (
    <div className='glass p-6 rounded-xl hover-gradient'>
      <div className='flex items-center gap-2 mb-4'>
        {icon}

        <h3 className='text-lg font-semibold'>{title}</h3>
      </div>

      {children}
    </div>
  );
}
