"use client";
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber'
import Sean from './Sean'
import { Environment, OrbitControls } from '@react-three/drei'

const Experience = () => {


    // কেমেরা পজিশন এবং রোটেশন ফিক্সিং ওয়ে মেথড
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
                // fov: 40 // Field of view (optional)
            }}
        >

            <Environment preset="city"  background={true} blur={1}/>

            {/*   মডেল পজিশন এবং রোটেশন ফিক্সিং ওয়ে */}
            <OrbitControls
                makeDefault
                target={[0, 0, 0]} // মডেলের ঠিক মাঝখানে ফোকাস
                // ১. স্মুথনেস (আপনি মাউস দিয়ে ঘুরিয়ে ছেড়ে দিলে, মডেলটি সাথে সাথে না থেমে একটু সময় নিয়ে ধীরে ধীরে থামবে)
                enableDamping={false}
                // 
                dampingFactor={0.05}
               enableRotate={false}
                // ২. মুভমেন্ট লিমিট
                enablePan={false} // ক্যামেরা ডানে-বামে সরানো বন্ধ
                // minDistance={5}   // জুম ইন লিমিট
                // maxDistance={15}  // জুম আউট লিমিট

                // ৩. রোটেশন লিমিট (যাতে মডেল উল্টে না যায়)
                maxPolarAngle={Math.PI / 1.8} // ৯০ ডিগ্রির একটু বেশি, যাতে নিচ থেকে দেখা না যায়
                minPolarAngle={Math.PI / 4}   // উপর থেকে দেখার লিমিট

                // ৪. অটো রোটেশন (ল্যান্ডিং পেজের জন্য ভালো)
                //   autoRotate={true}
                autoRotateSpeed={0.5}
            />
            <ambientLight intensity={0.5} />
            <Sean />
        </Canvas>
    )
}

export default Experience