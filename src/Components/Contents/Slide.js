import React from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.scss"
import "swiper/components/thumbs/thumbs.scss"

// const SwiperWrapper = styled.div`
//     width: 100%;
//     height: 300px;
// `
// const SwiperSlide = styled.div`
//     background-size: cover;
//     background-position: center;
// `
// const GalleryTop = styled.div`
//     height: 80%;
//     width: 100%;
// `
// const GalleryThumbs = styled.div`
//     height: 20%;
//     box-sizing: border-box;
//     padding: 10px 0;

//     & > div {
//         height: 100%;
//         opacity: 0.4;
//     }
// `
// const ThumbActive = styled.div`
//     opacity: 1;
// `

const slide = () => (
    <Swiper
        spaceBetween = {10}
        slidesPerView = {4}
        loop = {true}
        freeMode = {true}
        loopedSlides = {5}
        watchSlidesVisibility = {true}
        watchSlidesProgress = {true}
    >

    </Swiper>
)

export default slide;