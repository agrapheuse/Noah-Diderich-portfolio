"use client";

import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function Projects() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x6a5717,
          midtoneColor: 0xbd250d,
          lowlightColor: 0x3719b8,
          baseColor: 0x292929,
          blurFactor: 0.4,
          speed: 2,
          zoom: 3.0,
        })
      );
    }
    return () => {
      if (vantaEffect) setVantaEffect(0);
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="min-h-screen"></div>;
}
