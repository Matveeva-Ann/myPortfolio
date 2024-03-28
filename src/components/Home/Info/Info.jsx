import { useEffect, useState } from 'react';
import './Info.scss';

export default function Info () {
  const [displayText, setDisplayText] = useState('');
  const text = 'Hello, I’m Anna and I’m a front-end developer. Since I’m not a designer and have never been involved in design, my website may seem a bit unconventional, but I’ve tried to make it interesting and user-friendly for you to learn more about me. I invite you to check out my latest projects on the Projects page of my web portfolio.';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="info__text">
      {displayText}
    </p>
  )
}