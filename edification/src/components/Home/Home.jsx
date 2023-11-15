import React, { Fragment } from 'react';
import { Box, Heading, Stack, VStack, Text, Button, Image, HStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import "./aboutus.css";
import "./home.css";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { DiAws } from "react-icons/di";
import vg from "..//..//assets/images/placeholder.png";
import introVideo from "..//..//assets/videos/vid.mp4";
import AboutUs from '../AboutUs/AboutUs';
import { Container, Row, Col } from "reactstrap";
import aboutImg from "..//..//assets/images/placeholder.png";
import CountUp from "react-countup";

const Home = () => {
  return (
    <Fragment>
      <section className='home'>
        <div className="container">
          <Stack direction={["column", "row"]}
            height="100%"
            justifyContent={["center", "space-evenly"]}
            alignItems={"center"}
            spacing={["16", "56"]}
          >
            <VStack
              width={"full"}
              alignItems={["center", "flex-end"]}
              spacing={"8"}
            >
              <Heading
                children="LEARN FROM THE EXPERTS"
                size={'2xl'}
              />
              <Text
                fontSize={'2xl'}
                fontFamily={"cursive"}
                textAlign={["center", "left"]}
                children="Find Valuable Content At Reasonable Price"
              />
              <Link to="/courses">
                <Button size={'lg'} colorScheme='yellow'>
                  Explore Now
                </Button>
              </Link>
            </VStack>
            <Image
              className='vector-graphics'
              boxSize={"md"} src={vg} objectFit={"contain"} />
          </Stack>
        </div>
        <Box
          padding={"8"}
          bg="blackAlpha.800"
        >
          <Heading textAlign={"center"} fontFamily={"body"} color={"yellow.400"} children="OUR BRANDS" />
          <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={"4"}>
            <CgGoogle />
            <CgYoutube />
            <SiCoursera />
            <SiUdemy />
            <DiAws />
          </HStack>
        </Box>

        <section>
  <Container>
    <Row>
      <Col lg="6" md="6">
        <div className="about__img">
          <img src={vg} alt="" className="w-100" />
        </div>
      </Col>
      <Col lg="6" md="6">
        <div className="about__content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            cupiditate animi deserunt libero nesciunt corporis explicabo nobis ex
            quo molestiae!
          </p>
          <div className="about__counter">
            {/* CountUp components here */}
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>

        <div className="container2">
          <video
            autoPlay={true}
            controls
            src={introVideo}
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
          ></video>
        </div>
      </section>

      {/* Insert the code snippet you provided here */}
    
      {/* End of the code snippet */}
    </Fragment>
  );
}

export default Home;
