"use client";

import { Suspense, useRef, useEffect, Component, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3, type Group } from "three";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: string | null }> {
  state = { error: null };
  static getDerivedStateFromError(e: Error) { return { error: e.message }; }
  render() {
    if (this.state.error) return <div style={{ color: "red", padding: 20 }}>3D Error: {this.state.error}</div>;
    return this.props.children;
  }
}

function PopcornModel() {
  const gltf = useGLTF("/popcorn.glb");
  const ref = useRef<Group>(null);

  useEffect(() => {
    if (!gltf.scene) return;
    const box = new Box3().setFromObject(gltf.scene);
    const center = new Vector3();
    box.getCenter(center);
    gltf.scene.position.sub(center);
  }, [gltf.scene]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 4;
  });
  return (
    <group ref={ref}>
      <primitive object={gltf.scene} scale={6} />
    </group>
  );
}

export default function PopcornCanvas() {
  return (
    <ErrorBoundary>
      <Canvas camera={{ position: [0, 0, 18], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={2} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <PopcornModel />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
}
