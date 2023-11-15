import {Box, Text,Avatar, Container, Heading, Stack, VStack, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import introVideo from "..//..//assets/videos/vid.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri'
import termsAndCondition from '..//..//assets/docs/termsAndCondition'

const Founder = ()=>(
    <Stack
    direction={["column","row"]}
    spacing={["4","16"]}
    padding={"8"}
    >

<VStack>
    <Avatar
    src="https://cdn4.vectorstock.com/i/1000x1000/40/53/passport-photo-of-young-handsome-man-close-up-vector-21284053.jpg"
    boxSize={["40","48"]}
    />
    <Text children="Co-Founder" 
    opacity={0.7}
    />
</VStack>
<VStack
justifyContent={"center"}
alignItems={["center","flex-start"]}

>
    <Heading 
    children="Mayank Chauhan"
    size={["md","xl"]}/>
    <Text 
    textAlign={["center","left"]}
    children={"Hi, I am full stack dev"}/>

</VStack>
    </Stack>
)

const VideoPlayer =()=>(
    <Box>
<video
controls
    autoPlay={true}
    muted
    loop  
     src={introVideo}
    controlsList='nodownload nofullscreen noremoteplayback'
    disablePictureInPicture
    disableRemotePlayback
    >
 
    </video>
</Box>
)

const TandC=({termsAndCondition})=>(
    <Box>
        <Heading
        size={"md"}
        children="Terms & Condition"
        textAlign={["center","left"]}
        my={"4"}/>

        <Box
        overflowY={"scroll"}
        h={"sm"}
        p={"4"}>
            <Text
textAlign={["center","left"]}
letterSpacing={"widest"}
fontFamily={"heading"}
            >
                {termsAndCondition}
            </Text>
            <Heading 
            my={"4"}
            size={"xs"}
            children="Refund only applicable for cancellation within 7 days"/>
        </Box>
    </Box>
)

const About = () => {

    
  return <Container
  maxW={"container.lg"}
  padding={"16"}
  boxShadow={'lg'}
  >
    <Heading children="About Us"
    textAlign={["center",'left']}/>
    <Founder />

    <Stack
    m={"8"}
    direction={["column","row"]}
    alignItems={"center"}
>
<Text
fontFamily={"cursive"}
m={"8"}
textAlign={['center',"left"]}
>
    We are a video streaming platform with some premium courses available only for premium user
</Text>
<Link to="/subscribe">
    <Button variant={'ghost'}
    colorScheme='yellow'>
        Checkout for Plans
    </Button>
</Link>
</Stack>
<VideoPlayer/>
<TandC termsAndCondition={termsAndCondition}/>
<HStack
my={'4'}
p={"4"}
>
    <RiSecurePaymentFill/>
    <Heading
    children="Payment is secured by RazorPay"
    size={"xs"}
    fontFamily={"sans-serif"}
    textTransform={"uppercase"}


/>
</HStack>
  </Container>
}

export default About