import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FloatingGrid() {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      backgroundPosition: '200px 200px',
      duration: 20,
      repeat: -1,
      ease: 'none',
    });
  }, []);

  return (
    <div
      ref={ref}
      className='grid-bg fixed inset-0 opacity-10 pointer-events-none -z-50'
    />
  );
}
