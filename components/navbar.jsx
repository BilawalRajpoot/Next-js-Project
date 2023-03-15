import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue ,
  Image, 
  Stack
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "About", "Services", "Contact"];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const [activeLink, setActiveLink] = useState(Links[0]);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} style={{justifyContent:'space-between'}} align={"center"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            
            onClick={handleToggle}
          />
          <Text
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            <Image
              borderRadius='full'
              boxSize='80px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />
          </Text>
        </Flex>

        <Flex
          flex={{ base: 1, md: "auto" }}
          justify={{ base: "center", md: "flex-start" }}
          align={"center"}
          color={useColorModeValue("gray.800", "gray.200")}
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize={{ base: "xs", md: "md" }}
          textTransform="uppercase"
          display={{ base: "none", md: "flex" }}
        >
          {Links.map((link) => (
            <Button
              key={link}
              variant="ghost"
              isActive={activeLink === link}
              onClick={() => setActiveLink(link)}
              _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
            >
              {link}
            </Button>
          ))}
        </Flex>

        <Box
          flex={{ base: 1, md: 0 }}
          ml={{ base: 0, md: 4 }}
          justify={{ base: "center", md: "flex-end" }}
          align={"center"}
          display={{ base: "none", md: "flex" }}
        >
       <Stack direction='row' spacing={4} >
       <Button variant={"outline"} colorScheme={"red"}>
            Sign Up
          </Button>
          <Button variant={"outline"} colorScheme={"blue"}>
            Login
          </Button>
       </Stack>
        </Box>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Flex
            direction="column"
            bg={useColorModeValue("gray.100", "gray.900")}
            p={2}
          >
            {Links.map((link) => (
              <Button
                key={link}
                variant="ghost"
                isActive={activeLink === link}
                onClick={() => {
                  setActiveLink(link);
                  onClose();
                }}
                _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
                mb={2}
              >
                {link}
              </Button>
            ))}
            <Button variant={"solid"} colorScheme={"blue"} mb={2}>
              Sign Up
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
}


