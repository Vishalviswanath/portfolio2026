import { useRef } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const ref = useRef(null);
  const form = useRef(null);

  useReveal(ref);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to send message.');
      });
  };

  return (
    <section id='contact' ref={ref} className='py-28 px-6 max-w-6xl mx-auto'>
      {/* HEADER */}

      <div className='text-center mb-16'>
        <p
          className='text-sm tracking-widest mb-3'
          style={{ color: 'var(--color3)' }}
        >
          CONTACT
        </p>

        <h2 className='text-4xl font-bold'>Let's Work Together</h2>

        <p className='text-gray-400 mt-4'>
          Have a project in mind or an opportunity to discuss? I'd love to hear
          from you.
        </p>
      </div>

      {/* CONTACT GRID */}

      <div className='grid md:grid-cols-2 gap-10'>
        {/* LEFT SIDE */}

        <div className='space-y-6'>
          <ContactCard
            icon={<Mail size={18} />}
            title='Email'
            value='vishal12viswanath@gmail.com'
          />

          <ContactCard
            icon={<MapPin size={18} />}
            title='Location'
            value='Hyderabad, India'
          />

          <div className='glass p-6 rounded-xl hover-gradient'>
            <p className='text-sm text-gray-400 mb-3'>Available for</p>

            <ul className='space-y-1 text-sm'>
              <li>• Full-time roles</li>
              <li>• Freelance projects</li>
              <li>• Collaboration</li>
            </ul>
          </div>
        </div>

        {/* CONTACT FORM */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className='glass p-8 rounded-xl border border-white/10 space-y-4'
        >
          <div className='grid grid-cols-2 gap-4'>
            <input
              name='name'
              placeholder='Your name'
              required
              className='bg-transparent border border-white/10 rounded px-4 py-2 outline-none'
            />

            <input
              name='email'
              placeholder='Email'
              required
              className='bg-transparent border border-white/10 rounded px-4 py-2 outline-none'
            />
          </div>

          <input
            name='subject'
            placeholder='Subject'
            required
            className='w-full bg-transparent border border-white/10 rounded px-4 py-2 outline-none'
          />

          <textarea
            rows='5'
            name='message'
            placeholder='Tell me about your project...'
            required
            className='w-full bg-transparent border border-white/10 rounded px-4 py-2 outline-none'
          />

          <button
            type='submit'
            className='glass gradient flex items-center justify-center gap-2 px-6 py-3 rounded-full transition w-full'
            style={{ color: 'var(--color3)' }}
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value }) {
  return (
    <div className='glass p-6 rounded-xl hover-gradient flex items-center gap-4'>
      <div style={{ color: 'var(--color3)' }}>{icon}</div>

      <div>
        <p className='text-sm text-gray-400'>{title}</p>
        <p className='text-sm'>{value}</p>
      </div>
    </div>
  );
}
