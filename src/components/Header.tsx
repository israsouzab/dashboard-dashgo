import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header () {
   return (
      <Flex
         as='header'
         width='100%'
         maxWidth={1180}
         height='20'
         marginX='auto'
         marginTop='4'
         paddingX='6'
         align='center'
      >
         <Text
            fontSize='3xl'
            fontWeight='bold'
            letterSpacing='tight'
            width='64'
         >
            dashGo
            <Text as='span' marginLeft='1' color='pink.500'>.</Text>
         </Text>
         <Flex
            as='label'
            flex='1'
            paddingY='4'
            paddingX='8'
            marginLeft='6'
            maxWidth={400}
            alignSelf='center'
            color='gray.200'
            position='relative'
            background='gray.800'
            borderRadius='full'
         >
            <Input
               color='gray.50'
               variant='unstyled'
               paddingX='4'
               marginRight='4'
               placeholder='Buscar na plataforma'
               _placeholder={{ color: 'gray.400' }}
            />
            <Icon as={RiSearchLine} fontSize='20' />
         </Flex>
         <Flex
            align='center'
            marginLeft='auto'
         >
            <HStack
               spacing='8'
               marginX='8'
               paddingRight='8'
               paddingY='1'
               color='gray.300'
               borderRightWidth={1}
               borderColor='gray.700'
            >
               <Icon as={RiNotificationLine} fontSize='20' />
               <Icon as={RiUserAddLine} fontSize='20' />
            </HStack>
            <Flex align='center'>
               <Box marginRight='4' textAlign='right'>
                  <Text>Israel de Souza</Text>
                  <Text color='gray.300' fontSize='small' >isra.souza@teste.com</Text>
               </Box>
               <Avatar size='md' name='Israel Souza' src='https://avatars.githubusercontent.com/u/53377728?s=400&u=ec6a7f54d680badcd86ef9ba9e15f658bc77f642&v=4' />
            </Flex>
         </Flex>
      </Flex>
   )
}