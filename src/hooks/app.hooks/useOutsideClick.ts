import { useEffect, useRef, useState } from "react";

/**
 * Hook useOutsideClick - represents handle external click outside the current element
 * @param initialStateIsVisible :boolean
 * @returns ref: reference current element, isShow: boolean, setShow: func
 */

const useOutsideClick = (initialStateIsVisible: boolean) => {
  let timeout: any;
  const [isShow, setShow] = useState(initialStateIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      if (isShow) {
        timeout = setTimeout(() => setShow(false), 10);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isShow, setShow };
};

export default useOutsideClick;
