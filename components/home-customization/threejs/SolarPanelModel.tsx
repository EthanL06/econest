import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function SolarPanelModel() {
  const fileUrl = "/3dModels/solarpanel/scene.gltf";
  const { scene } = useGLTF(fileUrl);
  const initialY = 3;
  const targetY = 1.2;
  const speed = 0.01;
  
  const targetYs = [1.2, 1.2, 1.35, 1.35];

  const initialPositions = [
    [0.9, initialY, -0.1],
    [-1.5, initialY, -0.1],
    [0.9, initialY, -1.5],
    [-1.5, initialY, -1.5],
  ];

  const rotations = [
    [-0.3, 0, 0],
    [-0.3, 0, 0],
    [0.1, 3.14, 0],
    [0.1, 3.14, 0],
  ];

  const meshes = useRef<(THREE.Mesh | null)[]>(initialPositions.map(() => null));

  useFrame(() => {
    meshes.current.forEach((mesh, index) => {
      if (mesh && mesh.position.y > targetYs[index]) {
        mesh.position.y -= speed;
        if (mesh.position.y < targetYs[index]) {
          mesh.position.y = targetYs[index];
        }
      }
    });
  });

  const clonedScenes = initialPositions.map(() => scene.clone());

  return (
    <>
      {clonedScenes.map((clonedScene, index) => (
        <mesh
          key={index}
            ref={(el: THREE.Mesh) => (meshes.current[index] = el)}
          position={initialPositions[index]}
          scale={[0.2, 0.2, 0.2]}
          rotation={rotations[index]}
        >
          {Array.from(clonedScene.children).map((child, i) => (
            <primitive key={i} object={child as object} />
          ))}
        </mesh>
      ))}
    </>
  );
}

export default SolarPanelModel;
