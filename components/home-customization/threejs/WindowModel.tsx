import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function WindowModel() {
  const fileUrl = "/3dModels/window/scene.gltf"; // Update the file URL to point to your window model
  const { scene } = useGLTF(fileUrl);
  const initialX = -2.5;
  const targetX = -2.13;
  const speed = 0.0005;

  const targetXs = [targetX, targetX, targetX, targetX, targetX, targetX]; // Three target X positions for three windows

  const initialPositions = [
    [initialX, 0.9, -0.1],
    [initialX, 0.9, -0.7],
    [initialX, 0.9, -1.07],
    [initialX, 0.9, -1.76],
    [initialX, 0.3, -0.1],
    [initialX, 0.3, -0.7],
  ];

  const rotations = [
    [0, -1.6, 0],
    [0, 1.6, 0],   
    [0, 1.6, 0],
    [0, 1.6, 0],
    [0, 1.6, 0],
    [0, 1.6, 0],
  ];

  const meshes = useRef<(THREE.Mesh | null)[]>(initialPositions.map(() => null));

  useFrame(() => {
    meshes.current.forEach((mesh, index) => {
      if (mesh && mesh.position.x < targetXs[index]) {
        mesh.position.x += speed;
        if (mesh.position.x > targetXs[index]) {
          mesh.position.x = targetXs[index];
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
          scale={[0.002, 0.003, 0.002]}
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

export default WindowModel;