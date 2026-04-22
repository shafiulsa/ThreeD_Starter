"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber'
import Sean from './Sean'
import { OrbitControls } from '@react-three/drei'

const Experience = () => {

    const handleCameraChange = (e: any) => {
        const { position, rotation } = e.target.object;

        console.log("--- Camera Update ---");
        console.log(
            `Position: x: ${position.x.toFixed(2)}, y: ${position.y.toFixed(2)}, z: ${position.z.toFixed(2)}`
        );
        console.log(
            `Rotation: x: ${rotation.x.toFixed(2)}, y: ${rotation.y.toFixed(2)}, z: ${rotation.z.toFixed(2)}`
        );
    };

    return (
        <Canvas
            camera={{
                position: [90.98, 15.52, 51.24],
                rotation: [-0.67, 1.26, 0.64],
                // fov: 50 // Field of view (optional)
            }}
        >
            {/* Camera position and rotation  fixing way*/}
            <OrbitControls onChange={handleCameraChange} />

            <ambientLight intensity={0.5} />
            <Sean />
        </Canvas>
    )
}

export default Experience