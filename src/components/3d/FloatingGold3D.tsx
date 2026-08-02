"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function FloatingGold3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xfbb505, 4, 30);
    goldPointLight.position.set(5, 5, 5);
    scene.add(goldPointLight);

    const redPointLight = new THREE.PointLight(0xda151f, 3, 30);
    redPointLight.position.set(-5, -5, 5);
    scene.add(redPointLight);

    // 3. Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xfbb505,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x332200,
    });

    const redMaterial = new THREE.MeshStandardMaterial({
      color: 0xda151f,
      metalness: 0.8,
      roughness: 0.3,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 1.2,
    });

    // 4. Create 3D Meshes (Coins, Dice, Diamonds)
    const objects: THREE.Mesh[] = [];

    // Coins (Cylinders)
    const coinGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.25, 32);
    for (let i = 0; i < 4; i++) {
      const coin = new THREE.Mesh(coinGeo, goldMaterial);
      coin.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      );
      coin.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(coin);
      objects.push(coin);
    }

    // Golden Dice (Rounded Cubes)
    const cubeGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const dice1 = new THREE.Mesh(cubeGeo, goldMaterial);
    dice1.position.set(-4, 2, -1);
    scene.add(dice1);
    objects.push(dice1);

    const dice2 = new THREE.Mesh(cubeGeo, redMaterial);
    dice2.position.set(4.5, -1.8, 1);
    scene.add(dice2);
    objects.push(dice2);

    // 3D Diamond Octahedrons
    const diamondGeo = new THREE.OctahedronGeometry(1.4);
    const diamond = new THREE.Mesh(diamondGeo, glassMaterial);
    diamond.position.set(0, 2.5, -2);
    scene.add(diamond);
    objects.push(diamond);

    // 5. Mouse tracking
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate objects gently
      objects.forEach((obj, idx) => {
        obj.rotation.x += 0.008 * (idx % 2 === 0 ? 1 : -1);
        obj.rotation.y += 0.012 * (idx % 3 === 0 ? 1 : -1);
        obj.position.y += Math.sin(Date.now() * 0.002 + idx) * 0.003;
      });

      // Smooth camera parallax
      camera.position.x += (targetX * 1.5 - camera.position.x) * 0.05;
      camera.position.y += (targetY * 1.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full overflow-hidden"
    />
  );
}
