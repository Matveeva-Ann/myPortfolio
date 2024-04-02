import { useEffect } from 'react';

const useHeaderStyles = (location) => {
  useEffect(() => {
    const root = document.documentElement;
    if (location.pathname === '/') {
      root.style.setProperty('--textColor', '#fff');
      root.style.setProperty('--BGColor', 'rgb(2, 63, 81)');
    } else if (location.pathname === '/projects') {
      root.style.setProperty('--textColor', 'rgb(247 244 116)');
      root.style.setProperty('--BGColor', 'rgb(253 45 120)');
    } else if (location.pathname === '/contacts') {
      root.style.setProperty('--textColor', '#fff');
      root.style.setProperty('--BGColor', '	#9370DB');
    } else {
      root.style.setProperty('--textColor', '#000');
      root.style.setProperty('--BGColor', 'rgb(247 244 116)');
    }
    return () => {
      root.style.removeProperty('--textColor');
      root.style.removeProperty('--BGColor');
    };
  }, [location]);
};

export default useHeaderStyles;
