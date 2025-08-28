import { Canvas, useLoader } from "@react-three/fiber";
import { Stars, OrbitControls, Environment, Cloud } from "@react-three/drei";
import * as THREE from "three";

function NebulaBackground() {
  const texture = useLoader(THREE.TextureLoader, "nebula-background.jpg");

  return (
    <mesh scale={[50, 30, 1]} position={[0, 0, -20]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-gray-950">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <fog attach="fog" args={["#0a0015", 25, 120]} />

        <ambientLight intensity={0.05} color="#8899ff" />
        <pointLight position={[20, 20, 20]} intensity={0.8} color="#88ccff" />

        <Environment preset="night" />

        {/* PNG nebula texture */}
        <NebulaBackground />

        {/* Clouds for extra depth */}
        <Cloud opacity={0.3} speed={0.4} segments={30} color="#a855f7" />
        <Cloud opacity={0.25} speed={0.2} segments={40} color="#06b6d4" />

        {/* Stars */}
        <Stars
          radius={300}
          depth={80}
          count={8000}
          factor={6}
          saturation={0}
          fade
          speed={0.2}
        />
        <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={10}
          saturation={0}
          fade
          speed={1.5}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.15}
        />
      </Canvas>
    </div>
  );
}
