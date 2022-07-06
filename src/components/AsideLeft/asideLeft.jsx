import "./asideLeft.css";
import foto from"./lanhouse.jpg"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';



function Agendas() {
  const [value, onChange] = useState(new Date());
    return( 
        <div className="agenda_completa">
        <aside className="agenda_favoritos">   
        <h3 className="agenda_title">Agenda</h3>
            <div className="agenda">
            { <ScheduleComponent height={300}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
</ScheduleComponent>}
    </div>
        <div className="favoritos_usuario">
        <h3 className="favoritos_title">Favoritos</h3>
        <div className="comercios_grid">
        <div className="comercios" id="primeiro">
        <img src={foto} width={90} height={90} alt="" className="img_comercio" />
        <h3 className="comercio_name">Lan House do Emerson</h3>
        </div>
        <div className="comercios" id="primeiro">
        <img src={foto} width={90} height={90} alt="" className="img_comercio"/>
        <h3 className="comercio_name">Lan House do Emerson</h3>
        </div>
        <div className="comercios" id="primeiro">
        <img src={foto} width={90} height={90} alt="" className="img_comercio" />
        <h3 className="comercio_name">Lan House do Emerson</h3>
        </div>
    
        </div>
        <div className="comercios_grid">
        <div className="comercios" id="primeiro">
        <img src={foto} width={90} height={90} alt="" className="img_comercio"/>
        <h3 className="comercio_name">Lan House do Emerson</h3>
        </div>
        <div className="comercios" id="primeiro">
        <img src={foto} width={90} height={90} alt="" className="img_comercio"/>
        <h3 className="comercio_name">Lan House do Emerson</h3>
        </div>
        <div className="comercios" id="primeiro">
        <img src={foto} width={90} height={90} alt="" className="img_comercio"/>
        <h3 className="comercio_name">Lan House do Emerson</h3>
        </div>
    
        </div>
        <div className="comercios_grid">
        <div className="comercios" id="primeiro">
        <img src={foto} width={90} height={90} alt="" className="img_comercio"/>
        <h3 className="comercio_name">Lan House do Emerson</h3>
        </div>
        <div className="comercios" id="primeiro">
        <img src={foto} width={90} height={90} alt="" className="img_comercio"/>
        <h3 className="comercio_name">Lan House do Emerson</h3>
        </div>
        <div className="comercios" id="primeiro">
        <img src={foto} width={90} height={90} alt="" className="img_comercio"/>
        <h3 className="comercio_name">Lan House do Emerson</h3>
        </div>
    
        </div>
        </div>
        </aside>
        </div>
    )
}
export default Agendas;