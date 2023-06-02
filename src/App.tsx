import { MetamaskProvider } from '@rarimo/providers-evm'
import { useProvider } from '@rarimo/react-provider'
import { useEffect } from 'react'

function App() {
  const { provider } = useProvider(MetamaskProvider)
  console.log(provider)

  useEffect(() => {
    if (provider) provider.connect()
  }, [provider])
  console.log(provider?.address)

  return <div className="App">Wallet address: {provider?.address}</div>
}

export default App