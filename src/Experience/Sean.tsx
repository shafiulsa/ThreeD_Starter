import React, { Suspense, useRef } from 'react'
import Model from './models/MyModel'
import { AmbientLight } from 'three'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Sean = () => {
  const groupRef = useRef<any>(null);
const groupRotationRef=useRef(0);


useFrame((state, delta) => {
  const targetRotation = state.pointer.x * Math.PI * 0.25;
  
  // মাউস পজিশন অনুযায়ী মডেল ঘোরানোর জন্য
  groupRotationRef.current = THREE.MathUtils.lerp(
    groupRotationRef.current,
    targetRotation,
    0.5 
  );
  
// 1. Horizontal rotation (Active)
  groupRef.current.rotation.y = groupRotationRef.current;

  // 2. Lock other axes (Strictly off)
  groupRef.current.rotation.x = 0;
  groupRef.current.rotation.z = 0;

  // ৫. অতিরিক্ত নিরাপত্তা: অর্ডার সেট করে দিন যাতে রোটেশন ক্যালকুলেশন ফিক্সড থাকে
  groupRef.current.rotation.order = 'YXZ';
});

  return (
    <>
      <Suspense>
        <group ref={groupRef}>
          <ambientLight intensity={0.01} />
          <Model />
        </group>

      </Suspense>

    </>
  )
}

export default Sean