import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function WindMillModel() {
  const fileUrl = "/3dModels/windmill/scene.gltf";
  const { scene } = useGLTF(fileUrl);
  const initialY = 3;
  const targetY = 0.226;
  const speed = 0.01;

  const targetYs = [targetY, targetY]; 

  const initialPositions = [
    [-2.5, initialY, -0.1],
    [2, initialY, -0.1]  
  ];

  const rotations = [
    [0, -1.6, 0],
    [0, 1.6, 0]  
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