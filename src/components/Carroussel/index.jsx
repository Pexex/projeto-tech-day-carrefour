import { Container, CategorieContainer, CategorieText, 
        HortiFrutiImg, MerceariaImg, BebidasImg, HigieneImg } from './styles';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




export default function Carroussel (){
    return (
        <Container>
           <Swiper
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}            
                className="mySwiper"
            >
                <SwiperSlide>
                    <CategorieContainer>
                        <HortiFrutiImg />
                        <CategorieText>Hortifruti</CategorieText>
                    </CategorieContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <CategorieContainer>
                        <MerceariaImg />
                        <CategorieText>Mercearia</CategorieText>
                    </CategorieContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <CategorieContainer>
                        <BebidasImg />
                        <CategorieText>Bebidas</CategorieText>
                    </CategorieContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <CategorieContainer>
                        <HigieneImg />
                        <CategorieText>Higiene</CategorieText>
                    </CategorieContainer>
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}