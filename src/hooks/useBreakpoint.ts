import { useEffect, useState } from "react";

interface IBreakpoints {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
}

export const useBreakpoints = (): IBreakpoints => {
  const [breakpoints, setBreakpoints] = useState<IBreakpoints>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      setBreakpoints({
        xs: innerWidth < 576,
        sm: innerWidth >= 576 && innerWidth < 768,
        md: innerWidth >= 768 && innerWidth < 992,
        lg: innerWidth >= 992 && innerWidth < 1200,
        xl: innerWidth >= 1200 && innerWidth < 1536,
        xxl: innerWidth >= 1536
      });
    };


    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoints;
};