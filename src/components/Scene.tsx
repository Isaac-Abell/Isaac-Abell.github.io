import { useRef, useEffect, useState } from 'react';
import { CameraControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

import { TitleBanner } from './title-banner';
import { Bio } from './bio';
import { Experience } from './experience';
import { Projects } from './projects';
import { socials, bioData, experiences, projects } from '../data';
import type { Section } from '../App';

interface SceneProps {
    activeSection: Section;
}

// Map the physical center of each HTML section in the 3D world
const POSITIONS: Record<Section, THREE.Vector3> = {
    home: new THREE.Vector3(0, 0, 0),
    bio: new THREE.Vector3(150, 0, -50),
    experience: new THREE.Vector3(50, 100, -150),
    projects: new THREE.Vector3(-100, -100, -100),
};

// Map where the camera should stand when looking at the section
const CAMERA_STAND: Record<Section, THREE.Vector3> = {
    home: new THREE.Vector3(0, 0, 40),      // Looking straight at home
    bio: new THREE.Vector3(120, 0, -20),     // Looking at bio from a slight angle
    experience: new THREE.Vector3(50, 90, 0),  // Pulled way back (delta 150), centered slightly lower
    projects: new THREE.Vector3(-100, -110, 100),   // Pulled extremely back (delta 200), centered slightly lower
};

export function Scene({ activeSection }: SceneProps) {
    const controlsRef = useRef<any>(null);
    const [focusedItem, setFocusedItem] = useState<{ type: 'experience' | 'projects', index: number } | null>(null);

    // Reset exact focus when swapping major sections
    useEffect(() => {
        setFocusedItem(null);
    }, [activeSection]);

    useEffect(() => {
        if (controlsRef.current) {
            const targetPos = CAMERA_STAND[activeSection].clone();
            const lookAtPos = POSITIONS[activeSection].clone();

            if (focusedItem) {
                // Determine how much closer to move
                const direction = new THREE.Vector3().subVectors(lookAtPos, targetPos).normalize();
                const distance = targetPos.distanceTo(lookAtPos);

                // Move camera 55% closer to the element to balance readability and navigation
                targetPos.add(direction.multiplyScalar(distance * 0.55));

                let panAmountY = 0;
                let panAmountX = 0;
                let centerIndex = 0;

                if (focusedItem.type === 'experience') {
                    // 4 items, center is 1.5
                    centerIndex = (experiences.length - 1) / 2;
                    panAmountY = 32; // Vertical adjustment per item

                    const rowOffset = focusedItem.index - centerIndex;
                    lookAtPos.y -= rowOffset * panAmountY;
                    targetPos.y -= rowOffset * panAmountY;

                } else if (focusedItem.type === 'projects') {
                    // Projects are in a 2-column grid. index 0,1 are row 0. 2,3 are row 1.
                    const row = Math.floor(focusedItem.index / 2);
                    const totalRows = Math.ceil(projects.length / 2);
                    centerIndex = (totalRows - 1) / 2;
                    panAmountY = 25;

                    const rowOffset = row - centerIndex;
                    lookAtPos.y -= rowOffset * panAmountY;
                    targetPos.y -= rowOffset * panAmountY;

                    // Pan X to center on the specific column
                    const col = focusedItem.index % 2;
                    panAmountX = col === 0 ? -18 : 18;
                    lookAtPos.x += panAmountX;
                    targetPos.x += panAmountX;
                }
            }

            controlsRef.current.setLookAt(
                targetPos.x, targetPos.y, targetPos.z,
                lookAtPos.x, lookAtPos.y, lookAtPos.z,
                true // Animate transition
            );
        }
    }, [activeSection, focusedItem]);

    return (
        <>
            <CameraControls
                ref={controlsRef}
                smoothTime={1.2}      // Makes the transition very cinematic and long
                minDistance={10}
                maxDistance={200}
                maxPolarAngle={Math.PI / 1.5}
                minPolarAngle={Math.PI / 3}
                // Disable interactions so user doesn't get lost, or keep them for exploration
                mouseButtons={{ left: 1, middle: 0, right: 0, wheel: 0 }}
                touches={{ one: 32, two: 512, three: 0 }}
            />

            {/* Infinite Void Fog */}
            <fog attach="fog" args={['#050505', 50, 250]} />

            <group position={POSITIONS.home}>
                <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
                    <Html transform wrapperClass="html-block" distanceFactor={15} center>
                        <div className="html-block-home">
                            <TitleBanner socials={socials} />
                        </div>
                    </Html>
                </Float>
            </group>

            {/* Angle bio slightly for architectural look */}
            <group position={POSITIONS.bio} rotation={[0, -Math.PI / 8, 0]}>
                <Float speed={1} rotationIntensity={0.05} floatIntensity={0.1}>
                    <Html transform wrapperClass="html-block" distanceFactor={20} center>
                        <div className="html-block-bio">
                            <Bio bioData={bioData} />
                        </div>
                    </Html>
                </Float>
            </group>

            <group position={POSITIONS.experience} rotation={[Math.PI / 16, 0, 0]}>
                <Float speed={1} rotationIntensity={0.05} floatIntensity={0.1}>
                    <Html transform wrapperClass="html-block" distanceFactor={25} center>
                        <div className="html-block-exp">
                            <Experience experiences={experiences} onFocusItem={activeSection === 'experience' ? (index) => setFocusedItem({ type: 'experience', index }) : undefined} />
                        </div>
                    </Html>
                </Float>
            </group>

            <group position={POSITIONS.projects} rotation={[-Math.PI / 16, Math.PI / 16, 0]}>
                <Float speed={1} rotationIntensity={0.05} floatIntensity={0.1}>
                    <Html transform wrapperClass="html-block" distanceFactor={28} center>
                        <div className="html-block-proj">
                            <Projects projects={projects} onFocusItem={activeSection === 'projects' ? (index) => setFocusedItem({ type: 'projects', index }) : undefined} />
                        </div>
                    </Html>
                </Float>
            </group>
        </>
    );
}
