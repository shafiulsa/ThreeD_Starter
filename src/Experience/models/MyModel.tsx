
"use client";

import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

// --- 1. Type definition add kora holo (Eta miss hoyechilo) ---
type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Object3D } // Generic nodes type
  materials: { [key: string]: THREE.Material }
}

export default function Model(props: any) {
  // --- 2. Ekhon GLTFResult pabe ---
  const { nodes } = useGLTF('/models/MyModel.glb') as unknown as GLTFResult;

  const wireMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#0a0a0aff', 
    wireframe: true,
    opacity: 0.5,
    transparent: true,
  }), []);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {Object.entries(nodes).map(([name, node]) => {
          // Shudhu Mesh gulo ke wireframe material dibo
          if (node instanceof THREE.Mesh) {
            return (
              <mesh 
                key={name} 
                geometry={node.geometry} 
                material={wireMaterial} 
              />
            )
          }
          return null;
        })}
      </group>
    </group>
  )
}

useGLTF.preload('/models/MyModel.glb')