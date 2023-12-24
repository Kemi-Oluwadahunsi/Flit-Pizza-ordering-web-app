// import React from "react";
// import $ from "jquery";
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import dynamic from "next/dynamic";

// const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });


// import React, { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";

// // Dynamically import jQuery and Owl Carousel CSS
// const importJQueryAndOwlCarousel = async () => {
//   if (typeof window !== "undefined") {
//     window.$ = window.jQuery = await import("jquery");
//     await import("owl.carousel/dist/assets/owl.carousel.css");
//     await import("owl.carousel/dist/assets/owl.theme.default.css");
//   }
// };

// const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

// const Slider = () => {
//   const owlRef = useRef(null);

//   useEffect(() => {
//     const initializeCarousel = async () => {
//       await importJQueryAndOwlCarousel();

//       if (typeof window !== "undefined" && owlRef.current) {
//         $(owlRef.current).owlCarousel({
//           items: 3,
//           loop: true,
//           margin: 10,
//           autoplay: true,
//         });
//       }
//     };

//     initializeCarousel();

//     return () => {
//       if (typeof window !== "undefined" && owlRef.current) {
//         $(owlRef.current)
//           .trigger("destroy.owl.carousel")
//           .removeClass("owl-loaded");
//         $(owlRef.current).find(".owl-stage-outer").children().unwrap();
//       }
//     };
//   }, []);
// };

// export default Slider;