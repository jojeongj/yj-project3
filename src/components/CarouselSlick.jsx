import Slider from "react-slick";
import { Box, HStack } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlick(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return <Box w="full" h="full">
        <Slider {...settings}>
            <HStack w="full" h="450px" backgroundImage={"url('https://avaazdo.s3.amazonaws.com/c4e5d064b2c717af6ae4703294ce0dc1.jpg')"} backgroundSize="cover">
            </HStack>
            <HStack w="full" h="450px" backgroundImage={"url('https://swaggrabber.com/wp-content/uploads/2022/09/marvel-header.jpg')"} backgroundSize="cover">
            </HStack>
            <HStack w="full" h="450px" backgroundImage={"url('https://loyaltyrewardco.com/wp-content/uploads/2022/08/DstLXtCXcAAPQPT.jpg')"} backgroundSize="cover">
            </HStack>
        </Slider>
    </Box>
}