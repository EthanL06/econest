import { useRef } from "react";
import { useGLTF } from '@react-three/drei'


function ForestModel() {
  const fileUrl = "/3dModels/forest/scene.gltf";
  const mesh = useRef();
  const model = useGLTF(fileUrl);
  
  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={[0.2, 0.2, 0.2]} >
      <primitive object={model.scene} />
    </mesh>
  );
}

export default ForestModel;