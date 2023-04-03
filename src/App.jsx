import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = id => {
    const PacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(PacientesActualizados)
  }

  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
