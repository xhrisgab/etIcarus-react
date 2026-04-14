import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage} from '@react-three/drei';
import { useRef } from 'react';


function CanSat({ speed = 2, ...props }) {
    const ref = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        ref.current.rotation.set(0 , Math.sin(t), 0)
        //ref.current.position.set();
    })
    return (
        <group {...props}>

            <mesh ref={ref}>
                <boxGeometry args={[1, 2, 1]} />
                <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                <mesh position={[1, 1, 0]} >
                    <boxGeometry args={[2, 0.05, 0.4]} />
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                </mesh>
                <mesh position={[0, 1, 1]} rotation={[0,Math.PI/2,0]}>
                    <boxGeometry args={[2, 0.05, 0.4]} />
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                </mesh>
                <mesh position={[0, 1, -1]} rotation={[0,Math.PI/2,0]}>
                    <boxGeometry args={[2, 0.05, 0.4]} />
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={true} />
                </mesh>
                <mesh position={[-1, 1, 0]} >
                    <boxGeometry args={[2, 0.05, 0.4]} />
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                </mesh>
            </mesh>

        </group>
    )
}
const Scene3D = () => {

    return (
        <div className="h-[400px] md:h-[600px] w-full bg-cosmic-800/50 rounded-xl overflow-hidden border border-white/10 relative">
            <div className="absolute top-4 left-4 z-10 bg-black/50 px-3 py-1 rounded text-xs text-neon-cyan border border-neon-cyan/30">
                Modelo: CanSat V1
            </div>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Stage adjustCamera={false} environment="city" intensity={0.6}>
                    <CanSat></CanSat>
                </Stage>
                <OrbitControls />
            </Canvas>
        </div>
    )
}
export default Scene3D;