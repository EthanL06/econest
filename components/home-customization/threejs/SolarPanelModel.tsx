// SolarPanelModel.tsx
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei';

function SolarPanelModel() {
  const fileUrl = "/3dModels/solarpanel/scene.gltf";
  const mesh = useRef();
  const { scene } = useGLTF(fileUrl);
  const targetY = 10; 
  const speed = 0.02; 

  useEffect(() => {
    if (mesh.current) {
      mesh.current.position.y = 15; 
    }
  }, []);

  useFrame(() => {
    if (mesh.current && mesh.current.position.y > targetY) {
      mesh.current.position.y -= speed;
      if (mesh.current.position.y < targetY) {
        mesh.current.position.y = targetY; 
      }
    }
  });

  return (
    <mesh ref={mesh} position={[0, 15, 0]} scale={[0.2, 0.2, 0.2]} rotation={[-0.3,0,0]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default SolarPanelModel;