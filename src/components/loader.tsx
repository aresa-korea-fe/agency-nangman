"use client";

import { useEffect } from "react";
import "./loader.css";

export default function Loader() {
	useEffect(() => {
		const fadeOutLoader = () => {
			setTimeout(() => {
				// 로더를 페이드 아웃하는데 3초를 줌
				const loader = document.querySelector(".page-loader") as HTMLElement;
				if (loader) {
					loader.style.transition = "opacity 1s";
					loader.style.opacity = "0";
					setTimeout(() => {
						loader.style.display = "none";
					}, 1000);
				}
			}, 3500); // 3500 밀리초 (3.5초)
		};

		window.addEventListener("load", fadeOutLoader);

		return () => window.removeEventListener("load", fadeOutLoader);
	}, []); // 빈 배열을 전달하여 한 번만 실행되도록 함

	return (
		<div className="page-loader">
			<div className="spinner"></div>
			<div className="txt">studio<br />NANGMAN</div>
		</div>
	);
}