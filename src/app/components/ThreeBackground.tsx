"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    const W = () => window.innerWidth;
    const H = () => window.innerHeight - 68;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" });
    renderer.setSize(W(), H());
    renderer.setPixelRatio(1);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W() / H(), 0.1, 200);
    camera.position.z = 28;

    const NODE_COUNT = 20;
    const CONNECT_DIST = 9;
    const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
    const MAX_EDGES = 70;

    const nodeGeo = new THREE.SphereGeometry(0.14, 8, 8);
    const nodeColors = [0x0ea5e9, 0x38bdf8, 0x7dd3fc, 0x60a5fa];

    interface NNode { mesh: THREE.Mesh; vx: number; vy: number; vz: number }
    const neuralNodes: NNode[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: nodeColors[i % nodeColors.length],
        transparent: true,
        opacity: 0.7 + Math.random() * 0.25,
      });
      const mesh = new THREE.Mesh(nodeGeo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 55,
        (Math.random() - 0.5) * 36,
        (Math.random() - 0.5) * 18
      );
      mesh.scale.setScalar(0.5 + Math.random() * 1.1);
      scene.add(mesh);
      neuralNodes.push({
        mesh,
        vx: (Math.random() - 0.5) * 0.012,
        vy: (Math.random() - 0.5) * 0.009,
        vz: (Math.random() - 0.5) * 0.006,
      });
    }

    const edgePositions = new Float32Array(MAX_EDGES * 2 * 3);
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute("position", new THREE.BufferAttribute(edgePositions, 3));
    edgeGeo.setDrawRange(0, 0);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.18 });
    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    scene.add(edgeLines);

    const brainGeo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(7, 1));
    const brainMesh = new THREE.LineSegments(brainGeo, new THREE.LineBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.07 }));
    brainMesh.position.set(14, 0, -14);
    scene.add(brainMesh);

    const rings: { mesh: THREE.Mesh; sx: number; sy: number; sz: number }[] = [];
    for (let i = 0; i < 2; i++) {
      const rGeo = new THREE.TorusGeometry(5 + i * 4, 0.045, 6, 48);
      const rMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.07 });
      const mesh = new THREE.Mesh(rGeo, rMat);
      mesh.rotation.set(i * 0.7, i * 0.4, i * 0.2);
      mesh.position.set((i % 2 === 0 ? 1 : -1) * i * 6, i * 1.5 - 3, -6);
      scene.add(mesh);
      rings.push({ mesh, sx: 0.002 + i * 0.001, sy: 0.003, sz: i % 2 === 0 ? 0.001 : -0.001 });
    }

    const PARTICLE_COUNT = 40;
    const pPos = new Float32Array(PARTICLE_COUNT * 3);
    const pVel: Float32Array = new Float32Array(PARTICLE_COUNT * 2);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 80;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 55;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      pVel[i * 2]     = (Math.random() - 0.5) * 0.015;
      pVel[i * 2 + 1] = (Math.random() - 0.5) * 0.01;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x7dd3fc, size: 0.22, transparent: true, opacity: 0.4, sizeAttenuation: true });
    scene.add(new THREE.Points(pGeo, pMat));

    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const onResize = () => {
      camera.aspect = W() / H();
      camera.updateProjectionMatrix();
      renderer.setSize(W(), H());
    };
    window.addEventListener("resize", onResize);

    let paused = document.hidden;
    const onVisibility = () => { paused = document.hidden; if (!paused) loop(); };
    document.addEventListener("visibilitychange", onVisibility);

    let frame = 0;
    let animId: number | null = null;
    let lastT = 0;
    const FRAME_INTERVAL = 1000 / 30; // cap at 30fps
    const pPosAttr = pGeo.attributes.position as THREE.BufferAttribute;

    const loop = (now?: number) => {
      if (paused) { animId = null; return; }
      animId = requestAnimationFrame(loop);
      const t = now ?? performance.now();
      if (t - lastT < FRAME_INTERVAL) return;
      lastT = t;
      frame++;

      for (let i = 0; i < neuralNodes.length; i++) {
        const n = neuralNodes[i];
        const p = n.mesh.position;
        p.x += n.vx; p.y += n.vy; p.z += n.vz;
        if (p.x > 28 || p.x < -28) n.vx = -n.vx;
        if (p.y > 18 || p.y < -18) n.vy = -n.vy;
        if (p.z > 11 || p.z < -11) n.vz = -n.vz;
      }

      if (frame % 60 === 0) {
        let edgeIdx = 0;
        for (let i = 0; i < neuralNodes.length && edgeIdx < MAX_EDGES; i++) {
          const a = neuralNodes[i].mesh.position;
          for (let j = i + 1; j < neuralNodes.length && edgeIdx < MAX_EDGES; j++) {
            const b = neuralNodes[j].mesh.position;
            const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
            if (dx * dx + dy * dy + dz * dz < CONNECT_DIST_SQ) {
              const o = edgeIdx * 6;
              edgePositions[o]     = a.x; edgePositions[o + 1] = a.y; edgePositions[o + 2] = a.z;
              edgePositions[o + 3] = b.x; edgePositions[o + 4] = b.y; edgePositions[o + 5] = b.z;
              edgeIdx++;
            }
          }
        }
        edgeGeo.setDrawRange(0, edgeIdx * 2);
        (edgeGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      }

      brainMesh.rotation.y += 0.003;
      brainMesh.rotation.x += 0.0015;
      for (let i = 0; i < rings.length; i++) {
        const r = rings[i];
        r.mesh.rotation.x += r.sx;
        r.mesh.rotation.y += r.sy;
        r.mesh.rotation.z += r.sz;
      }

      const parr = pPosAttr.array as Float32Array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3, i2 = i * 2;
        parr[i3]     += pVel[i2];
        parr[i3 + 1] += pVel[i2 + 1];
        if (parr[i3] > 40 || parr[i3] < -40) pVel[i2] = -pVel[i2];
        if (parr[i3 + 1] > 27 || parr[i3 + 1] < -27) pVel[i2 + 1] = -pVel[i2 + 1];
      }
      pPosAttr.needsUpdate = true;

      camera.position.x += (mx * 3.5 - camera.position.x) * 0.02;
      camera.position.y += (-my * 2.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    loop();

    return () => {
      if (animId !== null) cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      neuralNodes.forEach(n => (n.mesh.material as THREE.Material).dispose());
      nodeGeo.dispose();
      edgeGeo.dispose();
      edgeMat.dispose();
      brainGeo.dispose();
      (brainMesh.material as THREE.Material).dispose();
      rings.forEach(r => { r.mesh.geometry.dispose(); (r.mesh.material as THREE.Material).dispose(); });
      pGeo.dispose();
      pMat.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 68, left: 0, right: 0, bottom: 0,
        zIndex: 0, pointerEvents: "none", overflow: "hidden",
      }}
    />
  );
}
