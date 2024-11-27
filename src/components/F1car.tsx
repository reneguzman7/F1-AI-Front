import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface F1Car3DProps {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

const F1CarModel: React.FC<F1Car3DProps> = ({ 
  position = [0, 0, 0], 
  scale = 0.25,
  rotation = [0, 0, 0]
}) => {
  const { scene } = useGLTF("/assets/compressed_1732676606295_generic_f1.glb");
  
  // Clonar la escena para evitar problemas con la referencia
  const clonedScene = React.useMemo(() => scene.clone(), [scene]);

  return (
    <primitive 
      object={clonedScene} 
      position={position} 
      scale={scale} 
      rotation={rotation}
    />
  );
};

const F1Car3D: React.FC<F1Car3DProps> = (props) => {
  return (
    <Canvas 
      style={{ width: '300px', height: '300px' }} 
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <F1CarModel {...props} />
      </Suspense>
    </Canvas>
  );
};

export default F1Car3D;