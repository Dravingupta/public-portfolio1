import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';

function FloatingText({ text, position = [0, 0, 0] }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            // Floating animation
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
            // Subtle rotation
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <Center position={position}>
            <Text3D
                ref={meshRef}
                font="/fonts/helvetiker_regular.typeface.json"
                size={0.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                {text}
                <meshStandardMaterial
                    color="#00d4ff"
                    emissive="#00d4ff"
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                />
            </Text3D>
        </Center>
    );
}

export default FloatingText;
