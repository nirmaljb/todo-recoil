import { useState } from 'react'
import { InputSection } from "./components/InputSection"
import { FilterSection } from './components/FilterSection'
import { Todos } from './components/Todos'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <RecoilRoot>
      <InputSection />
      <FilterSection />
      <Todos />
    </RecoilRoot>
  )
}

export default App
