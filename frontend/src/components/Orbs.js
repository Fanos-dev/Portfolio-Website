const orbConfigs = [
  {
    id: 1,
    mobile: { top: 'top-[10%]', left: 'left-[5%]', size: 'w-[14rem] h-[14rem]' },
    desktop: { top: 'lg:top-[5%]', left: 'lg:left-[5%]', size: 'lg:w-[30rem] lg:h-[30rem]' },
    animation: 'animate-orb1',
    gradient: 'from-blue-500 via-indigo-500 to-violet-500',
    opacity: 'opacity-30',
  },
  {
    id: 2,
    mobile: { top: 'top-[20%]', right: 'right-[5%]', size: 'w-[13rem] h-[13rem]' },
    desktop: { top: 'lg:top-[15%]', right: 'lg:right-[5%]', size: 'lg:w-[28rem] lg:h-[28rem]' },
    animation: 'animate-orb2',
    gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
    opacity: 'opacity-25',
  },
  {
    id: 3,
    mobile: { bottom: 'bottom-[5%]', left: 'left-[10%]', size: 'w-[12rem] h-[12rem]' },
    desktop: { bottom: 'lg:bottom-[5%]', left: 'lg:left-[10%]', size: 'lg:w-[25rem] lg:h-[25rem]' },
    animation: 'animate-orb3',
    gradient: 'from-sky-400 via-cyan-400 to-blue-400',
    opacity: 'opacity-20',
  },
  {
    id: 4,
    mobile: { bottom: 'bottom-[10%]', right: 'right-[10%]', size: 'w-[13rem] h-[13rem]' },
    desktop: { bottom: 'lg:bottom-[10%]', right: 'lg:right-[10%]', size: 'lg:w-[28rem] lg:h-[28rem]' },
    animation: 'animate-orb4',
    gradient: 'from-purple-400 via-violet-400 to-indigo-400',
    opacity: 'opacity-20',
  },
];

const Orbs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {orbConfigs.map((orb) => {
        const position = `${orb.mobile.top || ''} ${orb.mobile.bottom || ''} ${orb.mobile.left || ''} ${orb.mobile.right || ''} ${orb.desktop.top || ''} ${orb.desktop.bottom || ''} ${orb.desktop.left || ''} ${orb.desktop.right || ''}`;
        const size = `${orb.mobile.size} ${orb.desktop.size}`;
        return (
          <div key={orb.id} className={`absolute ${position} ${orb.animation} transform-gpu`}>
            <div className={`rounded-full bg-gradient-to-br ${orb.gradient} ${orb.opacity} ${size} animate-hueblur`} />
          </div>
        );
      })}
    </div>
  );
};

export default Orbs;
