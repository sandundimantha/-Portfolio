import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.15;
            meshRef.current.rotation.z = time * 0.05;
        }
    });

    return (
        <Sphere args={[1, 64, 64]} scale={2.8} ref={meshRef}>
            <MeshDistortMaterial
                color="#007AFF"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.1}
                metalness={0.9}
                wireframe={true}
                opacity={0.8}
                transparent
            />
        </Sphere>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-full absolute inset-0 z-[1]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#007AFF" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
