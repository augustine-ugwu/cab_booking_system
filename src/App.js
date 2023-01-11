
// `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// Login
import Login from './components/Login';


function App() {
  return (
    <ChakraProvider>
      <>
      <Login />
      </>
    </ChakraProvider>
  );
}

export default App;
