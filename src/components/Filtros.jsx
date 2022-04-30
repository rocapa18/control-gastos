import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (

    <div className='filtros sombra contenedor'>
        <form>
            <div className="campo">
                <label>Filtrar Gastos</label>
                <select
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
                >
                    <option value="">-- Todas las Categorías --</option>
                    <option value="supermercado">Supermercado</option>
                    <option value="otros">Otros Gastos</option>
                    <option value="salud">Salud</option>
                    <option value="servicios">Servicios</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="impuestos">Impuestos</option>
                    <option value="ahorro">Ahorro</option>
                </select>
            </div>
        </form>
        
        
        
    </div>
  )
}

export default Filtros