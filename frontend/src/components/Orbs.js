import { useEffect, useRef } from 'react';

const Orbs = () => {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);

  useEffect(() => {
    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouse.x = x;
      mouse.y = y;
    };

    const animate = () => {
      const applyParallax = (ref, depth, center = false) => {
        if (ref.current) {
            let base = '';
            if (center) {
                base = 'translate(-50%, -50%) ';
            }
            ref.current.style.transform = `${base}translate(${mouse.x * depth}px, ${mouse.y * depth}px)`;
        } 
      };

      applyParallax(orb1Ref, 30, true);
      applyParallax(orb2Ref, 20);
      applyParallax(orb3Ref, 25);

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none fade-in-orbs">
      {/* Orb 1 - centered */}
      <div
        ref={orb1Ref}
        className="w-[40rem] h-[40rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 rounded-full blur-3xl animate-orb1 absolute top-1/2 left-1/2"
      />

      {/* Orb 2 */}
      <div
        ref={orb2Ref}
        className="w-[30rem] h-[30rem] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 opacity-20 rounded-full blur-2xl animate-orb2 absolute top-[20%] left-[70%]"
      />

      {/* Orb 3 */}
      <div
        ref={orb3Ref}
        className="w-[25rem] h-[25rem] bg-gradient-to-br from-yellow-300 via-pink-300 to-red-400 opacity-15 rounded-full blur-2xl animate-orb3 absolute top-[75%] left-[20%]"
      />
    </div>
  );
};

export default Orbs;
