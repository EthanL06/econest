import React, { useEffect, useState, useRef, useMemo, Suspense } from "react";
import HomeModel from "./threejs/HomeModel";
import SolarPanelModel from "./threejs/SolarPanelModel";
import WindMillModel from "./threejs/WindMillModel";
import WindowModel from "./threejs/WindowModel";
import ForestModel from "./threejs/ForestModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import Loader from "./loader";
// window: https://sketchfab.com/3d-models/old-wooden-window-9cb47e9d4e8644efa4fa28c424253d79

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
  current: string;
};

type Props = {
  showSolarPanel: CustomizationDetails;
  showWindow: CustomizationDetails;
  showWindMill: CustomizationDetails;
};

interface CameraAnimatorProps {
  cameraRef: React.RefObject<THREE.PerspectiveCamera>;
  isSolarPanelVisible: boolean;
  isWindowVisible: boolean;
  isWindMillVisible: boolean;
  cameraAnimation: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
}

const ThreeJsEnvironment: React.FC<Props> = ({
  showSolarPanel,
  showWindMill,
  showWindow,
}) => {
  const [isWindMillVisible, setWindMillVisible] = useState(false);
  const [isWindowVisible, setWindowVisible] = useState(false);
  const [isSolarPanelVisible, setSolarPanelVisible] = useState(false);

  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const [cameraAnimation, setCameraAnimation] = useState<{
    position: [number, number, number];
    rotation: [number, number, number];
  }>({ position: [-6, 5, 4], rotation: [0, 0, 0] });

  const targetSolarPosition = useMemo(() => [2, 7, -0.1], []);
  const targetSolarRotation = useMemo(() => [0, 1.6, 0], []);

  const targetWindowPosition = useMemo(() => [-6, 1, -2], []);
  const targetWindowRotation = useMemo(() => [1.6, 0, 0], []);

  const targetWindmillPosition = useMemo(() => [-6, 5, 4], []);
  const targetWindmillRotation = useMemo(() => [0, 0, 0], []);

  useEffect(() => {
    if (isSolarPanelVisible) {
      setCameraAnimation({
        position: targetSolarPosition as [number, number, number],
        rotation: targetSolarRotation as [number, number, number],
      });
    }
    if (isWindowVisible) {
      setCameraAnimation({
        position: targetWindowPosition as [number, number, number],
        rotation: targetWindowRotation as [number, number, number],
      });
    }
    if (isWindMillVisible) {
      setCameraAnimation({
        position: targetWindmillPosition as [number, number, number],
        rotation: targetWindmillRotation as [number, number, number],
      });
    }
  }, [
    isSolarPanelVisible,
    isWindowVisible,
    isWindMillVisible,
    targetSolarPosition,
    targetSolarRotation,
    targetWindmillPosition,
    targetWindmillRotation,
    targetWindowPosition,
    targetWindowRotation,
  ]);

  const CameraAnimator = ({
    cameraRef,
    isSolarPanelVisible,
    isWindowVisible,
    isWindMillVisible,
    cameraAnimation,
  }: CameraAnimatorProps) => {
    useFrame(() => {
      if (
        cameraRef.current &&
        (isSolarPanelVisible || isWindowVisible || isWindMillVisible)
      ) {
        let speed = 0;
        if (isSolarPanelVisible) speed = 0.01;
        if (isWindowVisible) speed = 0.005;
        if (isWindMillVisible) speed = 0.01;
        cameraRef.current.position.set(
          cameraRef.current.position.x +
            (cameraAnimation.position[0] - cameraRef.current.position.x) *
              speed,
          cameraRef.current.position.y +
            (cameraAnimation.position[1] - cameraRef.current.position.y) *
              speed,
          cameraRef.current.position.z +
            (cameraAnimation.position[2] - cameraRef.current.position.z) *
              speed,
        );

        cameraRef.current.rotation.x +=
          (cameraAnimation.rotation[0] - cameraRef.current.rotation.x) * speed;
        cameraRef.current.rotation.y +=
          (cameraAnimation.rotation[1] - cameraRef.current.rotation.y) * speed;
        cameraRef.current.rotation.z +=
          (cameraAnimation.rotation[2] - cameraRef.current.rotation.z) * speed;

        cameraRef.current.rotation.x = Math.min(
          Math.max(cameraRef.current.rotation.x, -Math.PI),
          Math.PI,
        );
        cameraRef.current.rotation.y = Math.min(
          Math.max(cameraRef.current.rotation.y, -Math.PI),
          Math.PI,
        );
        cameraRef.current.rotation.z = Math.min(
          Math.max(cameraRef.current.rotation.z, -Math.PI),
          Math.PI,
        );
      }
    });

    return null;
  };

  useEffect(() => {
    if (showWindMill.title !== "") {
      setWindMillVisible(true);
    }
    if (showWindow.title !== "") {
      setWindowVisible(true);
    }
    if (showSolarPanel.title !== "") {
      setSolarPanelVisible(true);
    }
  }, [showSolarPanel, showWindMill, showWindow]);

  return (
    <main className="pointer-events-none flex h-screen items-center justify-center">
      <Canvas className="h-xl w-xl hover:cursor-grab active:cursor-grabbing">
        <Suspense fallback={<Loader />}>
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[-6, 5, 4]}
          />
          <OrbitControls target={[0, 0, 0]} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* <ForestModel /> */}
          <HomeModel />
          {isWindMillVisible && <WindMillModel />}
          {isWindowVisible && <WindowModel />}
          {isSolarPanelVisible && <SolarPanelModel />}
          <CameraAnimator
            cameraRef={cameraRef}
            isSolarPanelVisible={isSolarPanelVisible}
            isWindowVisible={isWindowVisible}
            isWindMillVisible={isWindMillVisible}
            cameraAnimation={cameraAnimation}
          />
        </Suspense>
      </Canvas>
    </main>
  );
};

export default ThreeJsEnvironment;
