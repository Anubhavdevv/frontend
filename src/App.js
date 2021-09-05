import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import { Link } from "@chakra-ui/react"


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
 
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml = "8" size = "md" fontweight="bold" color="blue">
           Anubhav-Portfolio
        </Heading>  
        <Spacer></Spacer>
        <Link href="https://www.linkedin.com/in/anubhav-gupta-09b2401b6/">
           <IconButton icon={<FaLinkedin />} isRound='true'></IconButton>
        </Link>
        <Link href="https://twitter.com/Anubhav43591222">
           <IconButton ml={2} icon={<FaTwitter />} isRound='true' ></IconButton>
        </Link>
        <Link href="https://github.com/anubhav201241">
           <IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton>
        </Link>
        <Link href="https://www.instagram.com/anubhav__1_2_3/">
           <IconButton ml={2} icon={<FaInstagram />} isRound='true' ></IconButton>
        </Link>
      
        
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
