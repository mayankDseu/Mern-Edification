import React from 'react'
import { ColorModeSwitcher } from './/..//..//./ColorModeSwitcher';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri";
import { Link } from 'react-router-dom';


const LinkButton = ({url="/", title="Home",onClose})=>(
    <Link onClick={onClose} to={url}>
                    <Button variant={'ghost'} >{title}</Button>
                </Link>
)



const AdminSidebar = () => {
 
    const {isOpen, onOpen,onClose}= useDisclosure();
  
   
  return <>

  <ColorModeSwitcher />

  <Button 
  onClick={onOpen}
  
  colorScheme='yellow'
   width={"12"}
    height={"12"} 
    rounded={"full"}
     
      top={"6"} 
      left={"6"} 
      position={"fixed"}
      zIndex={'overlay'}
      >

<RiMenu5Fill/>
  </Button>

  <Drawer placement='right' onClose={onClose} isOpen={isOpen} >

    <DrawerOverlay backdropFilter={"blur(3px)"} />
    <DrawerContent>
        <DrawerHeader borderBottomWidth={'1px'} >EDIFICATION</DrawerHeader>
        <DrawerBody>
            <VStack 
            spacing={"4"}
            alignItems={"flex-start"} 
            
            >
                <LinkButton onClose={onClose}  url="/admin/dashboard" title="Dashboard"/>
                <LinkButton onClose={onClose} url="/admin/createcourse" title="Create Course"/>
                <LinkButton onClose={onClose} url="/admin/courses" title="Courses"/>
                <LinkButton onClose={onClose} url="/admin/users" title="Users"/>
                <LinkButton onClose={onClose} url="/" title="Home"/>
                <LinkButton onClose={onClose} url="/courses" title="Browse All Courses"/>
               
            <HStack
            justifyContent={"space-evenly"}
            position={"absolute"}
            bottom={"2rem"}
            width={"80%"}

            >

                
            </HStack>
            </VStack>



        </DrawerBody>
    
    </DrawerContent>
  </Drawer>
  
  </>;
  
}
export default AdminSidebar