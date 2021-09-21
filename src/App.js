import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/finalface.glb");
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas style={{height:"800px", marginTop:'200px', backgroundColor:"black"}} pixelRatio={[1, 2]} camera={{ position: [-2, 0, 5], fov: 50 }}>
      <ambientLight intensity={1} color={"lightyellow"} />
      {/* <pointLight intensity={0.2} position={[1000, 10000, 10000]} /> */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}