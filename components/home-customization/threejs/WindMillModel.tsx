import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function WindMillModel() {
  const fileUrl = "/3dModels/windmill/scene.gltf";
  const { scene } = useGLTF(fileUrl);
  const initialY = 3;
  const targetY = 0.226;
  const speed = 0.01;

  const targetYs = [targetY, targetY]; // Two target Y positions for two windmills

  const initialPositions = [
    [-2.5, initialY, -0.1], // Initial position for the first windmill
    [2, initialY, -0.1]   // Initial position for the second windmill
  ];

  const rotations = [
    [0, -1.6, 0], // Rotation for the first windmill
    [0, 1.6, 0]   // Rotation for the second windmill (or any other rotation you want)
  ];

  const meshes = useRef(initialPositions.map(() => useRef<THREE.Object3D>(null)));

  useFrame(() => {
    meshes.current.forEach((mesh, index) => {
      if (mesh.current != null && mesh.current.position.y > targetYs[index]) {
        mesh.current.position.y -= speed;
        if (mesh.current.position.y < targetYs[index]) {
          mesh.current.position.y = targetYs[index];
        }
      }
    });
  });

  // Clone the scene for each initial position
  const clonedScenes = initialPositions.map(() => scene.clone());

  return (
    <>
      {clonedScenes.map((clonedScene, index) => (
        <mesh
          key={index}
          ref={meshes.current[index]}
          position={initialPositions[index]}
          scale={[0.001, 0.001, 0.001]}
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

export default WindMillModel;