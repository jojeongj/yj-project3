import { Box, Button, HStack, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"
import { Link } from "react-router-dom";

export default function Header() {
    const [scroll, setScroll] = useState(true)
    useEffect(() => {
        document.addEventListener("wheel",(event) => {
            if(event.deltaY < 0) {
                //휠 스크롤 올림
                setScroll(true);
            } else if(event.deltaY > 0) {
                //휠 스크롤 내림
                setScroll(false);
            }
        }
            // console.log(event.deltaY)
        )
    })
    const GNB = [
        {title: "home", href: "/"},
        {title: "characters", href: "/characters"},
        {title: "comics", href: "/comics"},
        {title: "events", href: "/events"}
    ]
    const {colorMode, toggleColorMode} = useColorMode();
    return <Stack zIndex="99" transform={scroll ? "translateY(0px)" : "translateY(-60px)"} transition="0.4s" bg="gray.800" w="full" h="60px" color="white" fontWeight={600} fontSize="20px" alignItems="center" justifycontent="center" boxShadow="sm" position="fixed">
        <HStack w="7xl" h="full" justifyContent="space-between">
            <HStack spacing="8">
                <Box w="24">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" alt="Main logo" w="180px"/>
                </Box>
                <HStack spacing="4" textTransform="uppercase">
                        {
                            GNB.map((item)=>(
                                <Link to={item.href} key={item.title} aria-label={item.title}>
                                    <Text>{item.title}</Text>
                                </Link>
                            ))
                        }
                        {/* <Link to="/characters"><Text>Character</Text></Link>
                        <Link to="/comics"><Text>Comics</Text></Link>
                        <Link to="/events"><Text>events</Text></Link> */}
                </HStack>
            </HStack>
            <Button onClick={toggleColorMode}>
                {
                    colorMode === "light" ? <BsFillSunFill /> : <BsMoonFill />  
                }
            </Button>
        </HStack>
    </Stack>
}