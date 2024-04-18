"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import '/public/css/reset.css';
import '/public/css/style.css';
import '/public/css/index-main.css';
import '/public/css/index-pagination.css';
import 'swiper/css'; // Import Swiper styles


const projects = [
  { title: "디자이프", color: "#dadedd", en: "dxif", image: "/growth/verbal-branding/001_BLUEEYE.png", thumb: "/assets/images/projects/thumb_dxif.svg" },
  { title: "snowbling", color: "#3caee4", en: "snowbling", image: "/growth/verbal-branding/001_BLUEEYE.png" },
  { title: "exlab", color: "#ced7f6", en: "exlab", image: "/growth/verbal-branding/001_BLUEEYE.png", thumb: "/growth/verbal-branding/001_BLUEEYE.png" },
  // Add other projects as needed
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectTitle, setProjectTitle] = useState(projects[0].title); // 초기 타이틀 설정

  const touchStartXRef = useRef<number | null>(null); // Use null for initial value

  // Function to handle animations
  const animateSlide = (direction: number) => {
    // You might add class-based animations or other effects here
    // console.log(`Animating slide ${direction > 0 ? 'up' : 'down'}`);
  };

  // Function to handle Swiper slide changes
  const handleSwiperChange = useCallback((swiper: any) => {
    setActiveIndex(swiper.realIndex);
    // Update visual styles or trigger animations here
    updateProjectDetails(swiper.realIndex);
  }, []);

  // Update project details visually
  const updateProjectDetails = (index: number) => {
    const project = projects[index];
    // 프로젝트 제목, 색상, 이미지 등의 상태를 설정하는 예
    setProjectTitle(project.title); // 제목을 상태로 저장
  };


  // Swiper instance
  useEffect(() => {
    const handleSwipe = (deltaY: number) => {
      animateSlide(deltaY);
      // Additional logic to change swiper's slide
    };

    // Event listeners for swipe gestures
    const handleTouchStart = (event: any) => {
      touchStartXRef.current = event.touches[0].pageX;
    };
    const handleTouchEnd = (event: any) => {
      const touchEndX = event.changedTouches[0].pageX;
      if (touchStartXRef.current !== null) { // Ensure the start touch is not null
        const deltaX = touchStartXRef.current - touchEndX;
        handleSwipe(deltaX);
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleSwiperChange]);

  return (
    <Swiper
      onSlideChange={handleSwiperChange}
      loop={true}
      pagination={{ clickable: true }}
      navigation
    >
      {projects.map((item, index) => (
        <SwiperSlide key={index} style={{ backgroundColor: item.color }}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
          {/* Add other details as per design */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
