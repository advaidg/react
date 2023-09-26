import Header from './Header';
import {
  Box, Image, Center, Heading, Text, Stack, Code, VStack, Square, List,SimpleGrid,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, useColorMode, Button, Flex, Spacer,Wrap,Avatar,WrapItem,AvatarBadge, HStack,ExternalLinkIcon,Link
} from '@chakra-ui/react';

import Linkedin from './LinkedIn';

const ArticleLayout = () => {

  const logo = require('./Timeline.png');
  const advaid= require('./Cropped.jpg');

  return (
    <Box
      width="100%"
      height="100% "
      bgImage="url('/checklist.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      
    >
      <Header></Header>
      <Center>
        <Box
          mt={10}
          mb={20}
          p={4}
          w={{ base: "333px", md: "500px", lg: "1000px" }}
      
          borderWidth="2px"
          rounded="lg"
          overflow="hidden"
        >

          <Center>
            <Box
              mt={10}
              w={{ base: "250px", md: "500px", lg: "800px" }}
              h={{ base: "100px", md: "150px", lg: "300px" }}
              borderWidth="2px"
              rounded="lg"
              overflow="hidden"
            >
              <Image src={logo} alt='Illustration' />

            </Box>
          </Center>
          <Stack spacing={6}>
            <Heading as='h1' mt="20" size={{ base: "sm", md: "xl", lg: "xl" }} noOfLines={1}>Lets Get Started !
            </Heading>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Docker enables you to separate an application from its infrastructure by providing the ability to package and run an application such as Kofax Total Agility in a loosely isolated environment called a Container. Multiple containers can run on the same machine and share the OS kernel with other containers, each running as isolated processes in user space.
            </Text>
            <Heading as='h1' mt="20" size={{ base: "sm", md: "xl", lg: "xl" }} noOfLines={{ base: 2, md: 1, lg: 1 }}>Kofax Total Agility and Docker Container
            </Heading>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              We can deploy Kofax Total Agility into any environment (Dev, Prod) as an independent container or set of containers. You do not need to use the Kofax Total Agility installation media every time you want a new transformation server/web server. Instead, Kofax Total Agility can be packaged to a docker image (App Server/ Web Server/ Transformation Server/ Standalone), and only the relevant configuration settings, such as database connection strings, are required when the container runs.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Note: The SQL Server runs on another machine, which cannot run on the same Kofax Total Agility container
            </Text>
            <Heading as='h1' mt="20" size={{ base: "sm", md: "xl", lg: "xl" }} noOfLines={{ base: 2, md: 2, lg: 2 }}> Below are the Steps to Install Kofax Total Agility in a Docker container
            </Heading>
            <Heading as='h3' mt="20" size={{ base: "sm", md: "md", lg: "md" }} noOfLines={1}> Initial Setup :
            </Heading>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Extract the Kofax Total Agility install media contents to a local directory on the Docker host machine.

            </Text>
            <Image pl={8} boxSize='400px' src={"https://media-exp1.licdn.com/dms/image/D5612AQHNnQMKTl1nuA/article-inline_image-shrink_1500_2232/0/1659039170383?e=1664409600&v=beta&t=lMMfzfagc3uWgofAdq5Sd3EbiwZc9fhBSR6STdhuYbs"} alt='Illustration' />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Note: The host machine must have at least 100 GB of disk space for the Kofax Total Agility Docker Installation.
            </Text>

            <Code
              display="block"
              whiteSpace="pre"
              children={`  Create a working directory
  C:\\Kofax Docker `}
            />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              From the Installation media, copy the contents of \Total Agility\Utilities\Docker folder to the local working directory created above.
            </Text>
            <Image pl={8} src={"https://media-exp1.licdn.com/dms/image/D5612AQE_dJbPQMrDOw/article-inline_image-shrink_1000_1488/0/1659039807648?e=1664409600&v=beta&t=tF_Gcy7TriOVSTdDrGcHbFpLbrRh4EVUOa5tQpKTCG4"} alt='Illustration' />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Copy the Kofax Total Agility installation media into your Container Files folder in the working directory.
            </Text>
            <Heading as='h3' mt="20" size={{ base: "sm", md: "md", lg: "md" }} noOfLines={1}>   Docker Installation :</Heading>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Next is installing Docker on the host machine before the Total Agility container. Open PowerShell and type the following command
            </Text>
            <Code
              display="block"
              whiteSpace="pre"
              children={`  Install-Package Docker -Provider Name DockerMsftProvider -Force`}
            />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Check whether a reboot is required or not using the command :
            </Text>
            <Code
              display="block"
              whiteSpace="pre"
              children={`  (Install-WindowsFeatures Containers). RestartNeeded`}
            />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              To Restart :
            </Text>
            <Code
              display="block"
              whiteSpace="pre"
              children={`  Restart-Computer`}
            />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              After the machine is up, your Docker installation should be complete and check whether the docker-engine service is running.
              To check the information about the installed docker instance, you can use the command
            </Text>
            <Code
              display="block"
              whiteSpace="pre"
              children={`  Docker info`}
            />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              The next activity is to check for the default max size of a container.
              We need to check the “daemon. json” file to do that. If not present, please create the same and append the storage criteria
            </Text>
            <Code
              display="block"
              whiteSpace="pre"
              children={` {
    "storage-opts": ["size=50GB"] 
    }`}
            />
            <Image pl={8} src={"https://media-exp1.licdn.com/dms/image/D5612AQF2COc-7u3Evw/article-inline_image-shrink_1000_1488/0/1659040551811?e=1664409600&v=beta&t=KrsbvXcTSDrdx1kbBaLpYJnGhBePPOslcuPf6or4lr0"} alt='Illustration' />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              After this, restart the Docker engine from the Service Console
            </Text>
            <Heading as='h3' mt="20" size={{ base: "sm", md: "md", lg: "md" }} noOfLines={1}> Creating a docker image: </Heading>

            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Note: Based on the type of installation required configure the silent-install configuration.xml
            </Text>

            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              To begin the process, execute the below command.
            </Text>

            <Code
              display="block"
              whiteSpace="pre"
              children={` {docker build -t AnyNameForyourContainer “C:\LocalWorkingDirectory”`}
            />

            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Leave it for 30 minutes or more until you see a message Successfully tagged "AnyNameForyourContainer: latest"
            </Text>

            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              This installs the KTA components as configured in the silent install config.
            </Text>

            <Heading as='h1' mt="20" size={{ base: "sm", md: "xl", lg: "xl" }} noOfLines={1}> Set up the KTA DB: </Heading>

            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              SQL Server can be installed either in a Windows Server, Azure Managed SQL instance, or the same machine.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Note: SQL Server login needs to be created
            </Text>
            <Heading as='h1' mt="20" size={{ base: "sm", md: "xl", lg: "xl" }} noOfLines={2}> Deploying kta-image to a docker container : </Heading>

            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Next up is the initialization of the Kofax Total Agility using environment variables (Configurations). For that, we need to generate “dockersettings.env” which will contain all the settings.
              Launch the KTAConfigurationUtility.exe from utilities, select the docker mode option in the editor tool, and then click OK.
            </Text>
            <Image pl={8} src={"https://media-exp1.licdn.com/dms/image/D5612AQGO15Dydbz9rQ/article-inline_image-shrink_1000_1488/0/1659041290930?e=1664409600&v=beta&t=wGdbG88h12MeCTiIT2OgJu3wZdRqm9j1bG1Mn3Mj7ps"} alt='Illustration' />

            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              On the Kofax Configuration Editor tool in the Common tab, mark the changes if required or leave it to default and click the “Save Docker Settings” button.
              You should be able to see the docker configuration file generated at the bottom in the Configuration Utility folder.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Now to spin up the container
            </Text>
            <Code
              display="block"
              whiteSpace="pre"
             
              children={` Docker run -d –name "ContainerNameHere " --env-file "Full-Path - Generated Env File" -p 5000:80 ImageName`}
            />
            <Heading as='h3' mt="20" size={{ base: "sm", md: "md", lg: "lg" }} noOfLines={{ base: 4, md: 2, lg: 2 }}> CONGRATS! , you successfully have built and deployed Kofax Total Agility inside a container
              Inspect the container: </Heading>

            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Execute the following command in your PowerShell window to check if the docker container is running successfully.
            </Text>
            <Code
              display="block"
              whiteSpace="pre"
              children={`  docker ps -a `}
              w="200px"
            />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              “Docker Inspect” command will give you the details of the running container.
            </Text>

            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              “Docker Inspect” command will give you the details of the running container.
            </Text>
            <Heading as='h3' mt="20" size={{ base: "sm", md: "md", lg: "lg" }} noOfLines={1}> Note : </Heading>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              You can SSH into your container and run various windows commands to see the status of the deployed Kofax services.
            </Text><Text fontSize={{ base: "sm", md: "md", lg: "lg" }} style={{ textIndent: 30 }} align="justify" margin={10}>
              Using the container IP we can access the Kofax designer.
            </Text>
            <Heading as='h3' mt="20" size={{ base: "sm", md: "md", lg: "lg" }} noOfLines={1}> Authors :  </Heading>
            <Wrap>
  <WrapItem>
    <Avatar size={{ base: "lg", md: "md", lg: "2xl" }} name='Advaid Gireesan' src={advaid} mr={{ base: "80px", md: "120px", lg: "120px" }} ml={7} />

  </WrapItem>
  
  <WrapItem>
  <Avatar size={{ base: "lg", md: "md", lg: "2xl" }}  name='Debosmita Chatterjee' src='https://bit.ly/dan-abramov' />
   
  </WrapItem>

  </Wrap>
  <HStack spacing={{ base: "20px", md: "45px", lg: "60px" }}>
  <Linkedin name="Advaid Gireesan" link="https://www.linkedin.com/in/advaidg/" ></Linkedin>
  <Linkedin name="Debosmita Chatterjee" link="https://www.linkedin.com/in/debosmita-c-b08918b5/" ></Linkedin>

  </HStack>

          </Stack>

        </Box>
      </Center>
    </Box>


  );
}

export default ArticleLayout;