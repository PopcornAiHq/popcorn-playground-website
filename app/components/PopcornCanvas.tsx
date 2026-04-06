"use client";

import { Suspense, useRef, Component, type ReactNode } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import type { Group } from "three";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: string | null }> {
  state = { error: null };
  static getDerivedStateFromError(e: Error) { return { error: e.message }; }
  render() {
    if (this.state.error) return <div style={{ color: "red", padding: 20 }}>3D Error: {this.state.error}</div>;
    return this.props.children;
  }
}

function PopcornModel() {
  const gltf = useLoader(GLTFLoader, "/popcorn.glb", (loader) => {
    const draco = new DRACOLoader();
    draco.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
    (loader as GLTFLoader).setDRACOLoader(draco);
  });
  const ref = useRef<Group>(null);

  // Log bounding box to figure out actual model size
  if (ref.current === null && gltf.scene) {
    const { Box3, Vector3 } = require("three");
    const box = new Box3().setFromObject(gltf.scene);
    const size = new Vector3();
    box.getSize(size);
    const center = new Vector3();
    box.getCenter(center);
    console.log(`model size: ${size.x.toFixed(2)} x ${size.y.toFixed(2)} x ${size.z.toFixed(2)}`);
    console.log(`model center: ${center.x.toFixed(2)}, ${center.y.toFixed(2)}, ${center.z.toFixed(2)}`);
  }

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 4;
  });
  return (
    <group ref={ref}>
      {/* Offset the scene inside so it rotates around its own center */}
      <primitive object={gltf.scene} scale={6} position={[2.62 * 6, -3.08 * 6, 0]} />
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
