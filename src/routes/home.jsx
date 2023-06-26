import { Box, Grid, HStack, Image, Skeleton, Text, VStack } from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import Carditems from "../components/Carditems";
import TitleImageSkew from "../components/TitleImageSkew";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { charactersList, comicsList, eventsList } from "../api";
import SkeletonList from "../components/SkeletonList";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 7,
    slidesToScroll: 1
};

const featuresLists = [
    {title: "스마트웹3기", description : "영진직업전문학교 스마트웹앱 3기 리액트 수업", buttonText : "자세히 보기"},
    {title: "API 요청량 하루 3000번 리미트", description : "하루 API요청 횟수가 3,000회로 제한되어 있어 컨텐츠가 보이지 않을 수 있습니다.", buttonText : "자세히 보기"},
    {title: "React", description : "React + Typescript + Chakra UI를 활용한 마블페이지 제작", buttonText : "자세히 보기"}
]

export default function Home(){
    useEffect(() => {
        AOS.init();
    }, [])
    console.log(process.env.REACT_APP_PUBLICK_KEY)
    const { isLoading, data } = useQuery('repoData', comicsList);

    const { data: eventsData, isLoarding: eventsIsLoading } = useQuery('eventsData', eventsList)

    const { data: charactersData, isLoarding: charactersIsLoading} = useQuery('charactersData', charactersList)

    return <>
        <HelmetProvider>
            <Helmet>
                <title>마블 홈페이지 입니다</title>
            </Helmet>
            {/* 캐러셀 */}
            <Box>
                <CarouselSlick></CarouselSlick>
            </Box>

            {/* 특장점 */}
            <HStack w="full" justifyContent="center" py="16" bg="gray.100" data-aos="fade-up">
                <Grid w="7xl" templateColumns={"repeat(3, 1fr)"} gap="4">
                    {
                        featuresLists.map((item, i) => (
                            <Carditems key={i} item={item} />
                        ))
                    }
                </Grid>
            </HStack>

            {/* 기울어진 이미지 타이틀 */}
            <div data-aos="fade-up">
            <TitleImageSkew
                title="comics"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus sunt cumque in enim unde doloremque fugiat, odit aspernatur quaerat quae culpa non consectetur autem labore quis. Optio, fugiat odio?"
                imgUrl="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
            />
            </div>
            {/* Comics 컨텐츠 리스트 */}
            <VStack w="full" position="relative" h="400px">
                {/* 흰박스 위로 올라오게 하는 범위 지정*/}
                <Box position="absolute" w="7xl" h="420px" top={-16} bg="white" py="8" px="2">
                    {isLoading ? <SkeletonList /> : ""}
                    <Slider {...settings}>
                    {data?.data?.results?.map((item, i) => (
                        <Link to={`/Comics/${item.id}?type=comics`}>
                            <VStack ksy={i} w="full" h="full" role="group" cursor="pointer">
                                <Box overflow="hidden" w="170px" h="240px" _groupHover={{transform: "scale(1.1)"}} transition={"0.4s"}>
                                    <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`}
                                    w="full" h="full" objectFit="cover"
                                    />
                                </Box>
                                <Text transition={"0.4s"} _groupHover={{color: "red.500", fontWeight: "600"}} mt="2" px="2">{item.title.substr(0, 36)}</Text>
                            </VStack>
                        </Link>
                    ))}
                    </Slider>
                </Box>
            </VStack>
            {/* 이벤트 타이틀 */}
            {/* 기울어진 이미지 타이틀 */}
            <TitleImageSkew
                title="events"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus sunt cumque in enim unde doloremque fugiat, odit aspernatur quaerat quae culpa non consectetur autem labore quis. Optio, fugiat odio?"
                imgUrl="https://terrigen-cdn-dev.marvel.com/content/prod/1x/sre7000_trl_comp_wta_v0265.1061_r_0.jpg"
            />

            {/* Events 컨텐츠 리스트 */}
            <VStack w="full" position="relative" h="400px">
                {/* 흰박스 위로 올라오게 하는 범위 지정*/}
                <Box position="absolute" w="7xl" h="420px" top={-16} bg="white" py="8" px="2">
                    {isLoading ? <SkeletonList /> : ""}
                    <Slider {...settings}>
                    {eventsData?.data?.results?.map((item, i) => (
                        <Link to={`/events/${item.id}?type=events`}>
                            <VStack ksy={i} w="full" h="full" role="group" cursor="pointer">
                                <Box overflow="hidden" w="170px" h="240px" _groupHover={{transform: "scale(1.1)"}} transition={"0.4s"}>
                                    <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`}
                                    w="full" h="full" objectFit="cover"
                                    />
                                </Box>
                                <Text transition={"0.4s"} _groupHover={{color: "red.500", fontWeight: "600"}} mt="2" px="2">{item.title.substr(0, 36)}</Text>
                            </VStack>
                        </Link>
                    ))}
                    </Slider>
                </Box>
            </VStack>
            {/* 캐릭터 타이틀 */}
            {/* 기울어진 이미지 타이틀 */}
            <TitleImageSkew
                title="characters"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus sunt cumque in enim unde doloremque fugiat, odit aspernatur quaerat quae culpa non consectetur autem labore quis. Optio, fugiat odio?"
                imgUrl="https://terrigen-cdn-dev.marvel.com/content/prod/1x/sre7000_trl_comp_wta_v0265.1061_r_0.jpg"
            />
            {/* Events 컨텐츠 리스트 */}
            <VStack w="full" position="relative" h="400px">
                {/* 흰박스 위로 올라오게 하는 범위 지정*/}
                <Box position="absolute" w="7xl" h="420px" top={-16} bg="white" py="8" px="2">
                    {isLoading ? <SkeletonList /> : ""}
                    <Slider {...settings}>
                    {charactersData?.data?.results?.map((item, i) => (
                        <Link to={`/characters/${item.id}?type=characters`}>
                            <VStack ksy={i} w="full" h="full" role="group" cursor="pointer">
                                <Box overflow="hidden" w="170px" h="240px" _groupHover={{transform: "scale(1.1)"}} transition={"0.4s"}>
                                    <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`}
                                    w="full" h="full" objectFit="cover"
                                    />
                                </Box>
                                <Text transition={"0.4s"} _groupHover={{color: "red.500", fontWeight: "600"}} mt="2" px="2">{item.title}</Text>
                            </VStack>
                        </Link>
                    ))}
                    </Slider>
                </Box>
            </VStack>
        </HelmetProvider>
    </>
}