import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);
}