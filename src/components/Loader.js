import { useEffect, useState } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader fixed top-0 left-0 w-full h-full bg-slate-900 flex justify-center items-center z-[1000] transition-opacity duration-500">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;