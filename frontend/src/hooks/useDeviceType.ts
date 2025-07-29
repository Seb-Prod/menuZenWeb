import { useState, useEffect } from 'react';

// Définissez vos breakpoints (ajustez-les selon vos besoins)
const BREAKPOINTS = {
  mobile: 768,    // Tout ce qui est en dessous de 768px est considéré comme mobile
  tablet: 1024,   // Entre 768px et 1024px est tablette
  desktop: Infinity // Au-dessus de 1024px est desktop
};

type DeviceType = 'mobile' | 'tablet' | 'desktop';

function getDeviceType(width: number): DeviceType {
  if (width < BREAKPOINTS.mobile) {
    return 'mobile';
  } else if (width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
}