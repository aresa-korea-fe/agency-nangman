'use client';

import React, { useEffect, useRef } from 'react';
import { BufferGeometry, Camera, Float32BufferAttribute, Mesh, RepeatWrapping, Scene, ShaderMaterial, TextureLoader, WebGLRenderer } from 'three';
import dynamic from 'next/dynamic';

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let camera: Camera;
    let scene: Scene;
    let renderer: WebGLRenderer;
    let uniforms: { [uniform: string]: { type: string; value: any; } };

    // Shader 코드는 동일하게 사용합니다.
    const vertexShader = `void main() { gl_Position = vec4(position, 1.0); }`;
    const fragmentShader = `/* 여기에 fragment shader 코드를 붙여넣으세요 */`;

    // TextureLoader를 사용하여 텍스처를 로드합니다.
    const loader = new TextureLoader();
    loader.setCrossOrigin("anonymous");
    let texture, bg;
    loader.load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png",
      function (tex) {
        texture = tex;
        texture.wrapS = texture.wrapT = RepeatWrapping;
        loader.load(
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/clouds-1-tile.jpg",
          function (tex) {
            bg = tex;
            bg.wrapS = bg.wrapT = RepeatWrapping;
            init();
            animate();
          }
        );
      }
    );

    function createCustomPlaneGeometry(width: number, height: number) {
      const geometry = new BufferGeometry();
      const vertices = new Float32Array([
        -width / 2, -height / 2, 0, // Bottom Left
        width / 2, -height / 2, 0, // Bottom Right
        width / 2, height / 2, 0, // Top Right
        -width / 2, -height / 2, 0, // Bottom Left
        width / 2, height / 2, 0, // Top Right
        -width / 2, height / 2, 0  // Top Left
      ]);
      geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
      return geometry;
    }

    function init() {
      // 컨테이너 설정
      const container = containerRef.current;

      // 카메라, 장면, 렌더러 초기화
      camera = new Camera();
      camera.position.z = 1;

      scene = new Scene();

      // Use the custom function to create geometry
      const geometry = createCustomPlaneGeometry(2, 2);
      uniforms = {
        // Uniforms 설정
      };
      const material = new ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      const mesh = new Mesh(geometry, material);
      scene.add(mesh);

      renderer = new WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (container) container.appendChild(renderer.domElement);


      // Resize 이벤트 리스너 등록
      window.addEventListener('resize', onWindowResize, false);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      // 렌더링 로직
      renderer.render(scene, camera);
    }

    function onWindowResize() {
      // 창 크기 조절시 렌더러 및 카메라 설정 업데이트
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // 클린업 함수
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div className='fixed h-screen w-screen touch-none' ref={containerRef} />;
};

export default dynamic(() => Promise.resolve(Page), {
  ssr: false
});
