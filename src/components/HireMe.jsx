import { useRef } from 'react';
import useReveal from '../hooks/useReveal';

import { Mail, Phone, MapPin, Download, Github, Linkedin } from 'lucide-react';

export default function HireMe() {
    const ref = useRef(null);

    useReveal(ref);

    return (
        <section ref={ref} className='max-w-6xl mx-auto px-6 py-4'>
            {/* HEADER */}

            <div className='text-center mb-16'>
                <p
                    className='text-sm tracking-widest mb-3'
                    style={{ color: 'var(--color3)' }}
                >
                    HIRE ME
                </p>

                <h1 className='text-4xl md:text-5xl font-bold'>
                    Let's Build Something Great Together
                </h1>

                <p className='text-gray-400 mt-6 max-w-2xl mx-auto'>
                    Full Stack Developer with 3.5+ years of experience building scalable
                    applications using React.js, Node.js and modern cloud infrastructure.
                    Open to full-time roles, freelance projects and collaborations.
                </p>
            </div>

            {/* GRID */}

            <div className='grid md:grid-cols-3 gap-8'>
                {/* SERVICES */}

                <Card title='What I Can Help With'>
                    <ul className='space-y-3 text-sm text-gray-300'>
                        <li>• Full Stack Web Application Development</li>

                        <li>• React.js Frontend Architecture</li>

                        <li>• Node.js / Express Backend APIs</li>

                        <li>• Real-time Applications (WebSockets)</li>

                        <li>• Dashboard & Data Visualization</li>

                        <li>• Performance Optimization</li>

                        <li>• Cloud Deployment & DevOps</li>
                    </ul>
                </Card>

                {/* AVAILABILITY */}

                <Card title='Availability'>
                    <p className='text-sm text-gray-300 leading-relaxed'>
                        Currently open to:
                    </p>

                    <ul className='mt-4 space-y-2 text-sm text-gray-300'>
                        <li>• Full-time opportunities</li>

                        <li>• Freelance / Contract work</li>

                        <li>• Startup collaborations</li>
                    </ul>
                </Card>

                {/* CONTACT */}

                <Card title='Quick Contact'>
                    <div className='space-y-4 text-sm'>
                        <div className='flex items-center gap-3'>
                            <Mail size={18} style={{ color: 'var(--color3)' }} />

                            <span>vishal12viswanath@gmail.com</span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Phone size={18} style={{ color: 'var(--color3)' }} />

                            <span>+91 9492463808</span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <MapPin size={18} style={{ color: 'var(--color3)' }} />

                            <span>Hyderabad, India</span>
                        </div>
                    </div>
                </Card>
            </div>

            {/* ACTIONS */}

            <div className='flex flex-wrap justify-center gap-6 mt-16'>
                <a
                    href='https://drive.google.com/drive/u/0/folders/1XS2nNZAdcypkvILxI1d9KbAGYGrO3DFJ'
                    download
                    className='flex items-center gap-2 px-7 py-3 rounded-full gold-glow'
                    style={{
                        background: 'var(--color3)',
                        color: 'var(--color1)',
                    }}
                >
                    <Download size={18} />
                    Download Resume
                </a>

                <a
                    href='mailto:vishal12viswanath@gmail.com'
                    className='flex items-center gap-2 px-7 py-3 rounded-full border'
                    style={{
                        borderColor: 'var(--color3)',
                        color: 'var(--color4)',
                    }}
                >
                    <Mail size={18} />
                    Email Me
                </a>
            </div>


        </section>
    );
}

function Card({ title, children }) {
    return (
        <div className='glass p-6 rounded-xl hover-gradient'>
            <h3 className='font-semibold text-lg mb-4'>{title}</h3>

            {children}
        </div>
    );
}
