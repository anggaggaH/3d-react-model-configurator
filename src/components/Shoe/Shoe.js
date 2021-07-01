import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from "valtio"
import state from "../../state"

export const Shoe = (props) => {
  const [hovered, setHovered] = useState(null);
  const group = useRef();
  const snap = useSnapshot(state);
  // const { nodes, materials } = useGLTF("GlamVelvetSofa.glb");
  // const { nodes, materials } = useGLTF("MaterialsVariantsShoe.glb");
  // const { nodes, materials } = useGLTF("WaterBottle.glb");
  let item = props.item ? props.item : "shoe-draco.glb"
  const { nodes, materials } = useGLTF(item);

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    group.current.rotation.x = Math.cos(t / 4) / 8;
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      hovered ? cursor : auto
    )}'), auto`;
  }, [hovered, snap.items]);

  // console.log(snap)
  // console.log(nodes)
  // console.log(materials)

  return (
    <group
      ref={group}
      dispose={null}
      onPointerOver={(e) => (
        e.stopPropagation(), setHovered(e.object.material.name)
      )}
      onPointerOut={(e) => e.intersections.length === 0 && setHovered(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      {/* <mesh
        material-color={snap.items.BottleMat}
        material={materials.BottleMat}
        geometry={nodes.WaterBottle.geometry}
      /> */}
      {/* <mesh
        material-color={snap.items.GlamVelvetSofa_fabric_navy}
        material={materials.GlamVelvetSofa_fabric_navy}
        geometry={nodes.GlamVelvetSofa_fabric.geometry}
      />
      <mesh
        material-color={snap.items.GlamVelvetSofa_feet}
        material={materials.GlamVelvetSofa_feet}
        geometry={nodes.GlamVelvetSofa_feet.geometry}
      />
      <mesh
        material-color={snap.items.GlamVelvetSofa_legs}
        material={materials.GlamVelvetSofa_legs}
        geometry={nodes.GlamVelvetSofa_legs.geometry}
      /> */}

      {/* Fox */}
      {/* <mesh
        material-color={snap.items.fox_material}
        material={materials.fox_material}
        geometry={nodes.fox.geometry}
      /> */}

      {/* MilkTruck */}
      {/* <mesh
        material-color={snap.items.truck}
        material={materials.truck}
        geometry={nodes.Cesium_Milk_Truck_2.geometry}
      />
      <mesh
        material-color={snap.items.truck}
        material={materials.truck}
        geometry={nodes.Cesium_Milk_Truck_3.geometry}
      />
      <mesh
        material-color={snap.items.truck}
        material={materials.truck}
        geometry={nodes.Cesium_Milk_Truck_1.geometry}
      />
      <mesh
        material-color={snap.items.wheels}
        material={materials.wheels}
        geometry={nodes.Wheels.geometry}
      />
      <mesh
        material-color={snap.items.wheels}
        material={materials.wheels}
        geometry={nodes.Wheels001.geometry}
      /> */}
      {/* <mesh
        material-color={snap.items.window_trim}
        material={materials.window_trim}
        geometry={nodes.Shoe.geometry}
      /> */}

      {/* this for shoe-draco */}
      <mesh
        material-color={snap.items.laces}
        material={materials.laces}
        geometry={nodes.shoe.geometry}
      />
      <mesh
        material-color={snap.items.mesh}
        material={materials.mesh}
        geometry={nodes.shoe_1.geometry}
      />
      <mesh
        material-color={snap.items.caps}
        material={materials.caps}
        geometry={nodes.shoe_2.geometry}
      />
      <mesh
        material-color={snap.items.inner}
        material={materials.inner}
        geometry={nodes.shoe_3.geometry}
      />
      <mesh
        material-color={snap.items.sole}
        material={materials.sole}
        geometry={nodes.shoe_4.geometry}
      />
      <mesh
        material-color={snap.items.stripes}
        material={materials.stripes}
        geometry={nodes.shoe_5.geometry}
      />
      <mesh
        material-color={snap.items.band}
        material={materials.band}
        geometry={nodes.shoe_6.geometry}
      />
      <mesh
        material-color={snap.items.patch}
        material={materials.patch}
        geometry={nodes.shoe_7.geometry}
      />
    </group>
  );
}
