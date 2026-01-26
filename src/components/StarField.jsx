import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function StarField({ count = 3000 }) {
    const points = useRef();

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 100;
            const y = (Math.random() - 0.5) * 100;
            const z = (Math.random() - 0.5) * 100;

            positions.set([x, y, z], i * 3);
        }

        return positions;
    }, [count]);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#ffffff"
                sizeAttenuation
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default StarField;
