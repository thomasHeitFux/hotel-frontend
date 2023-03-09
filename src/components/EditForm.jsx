import { useState } from "react";
import { useDispatch } from 'react-redux';
import { sendDataAction } from "../redux/actions/sendDataAction";
import swal from "sweetalert";

const tipos = ["Costo Variable", "Costo Fijo", "Ingresos"]
const estructuras = ["Via Villafranca 2 ( Rome station Rooms)", "Vía Goito 17 B&B Relax", "Vía Degli Ammiragli 67"]
const metodos = ["Cash", "Bonifico", "Carta", "PayPal", "Revoult"]
const responsable = ["Ana Vasquez Castillo", "Grabiel Nuñez", "Otros"]


export const EditForm = ({ active,e }) => {
    console.log(e);
    const dispatch = useDispatch();

    const [data, setData] = useState({
        // importe: e.importe, fecha: e.fecha, metodo: e.metodo, tipo: e.tipos, detalle: e.detalle, estructura: e.estructura, responsable: e.responsable
    });


    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    function handleSend() {
        if (!data.importe || !data.fecha || !data.tipo || !data.metodo || !data.detalle || !data.estructura || !data.responsable) {
            swal({ text: 'Necesitas rellenar todos los campos', icon: "error" })
        }
        else {
            swal({ text: 'El registro se ha creado exitosamente!', icon: 'success' })
            dispatch(sendDataAction(data))
        }
    }

    return (<>
        {active &&
            <div  className=" flex justify-between gap-1 p-4 items-center  ">
                    <div className="">
                    <select defaultValue={e.tipo} onChange={(e) => handleChange(e)} className="" name="tipo" id="">
                        {tipos.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>
                <div className="">

                    <select onChange={(e) => handleChange(e)} className="" name="estructura" id="">
                        {estructuras.map((e) => (
                            <option value={e}>{e}</option>
                        ))}
                    </select>
                </div>
                <div className="">

                    <input onChange={(e) => handleChange(e)} className="" name="importe" type="number" />
                </div>
                <div className="">
                    <input type="text" onChange={(e) => handleChange(e)} className="" name="detalle" id="">
                    </input>
                </div>
                <div className="">

                    <select onChange={(e) => handleChange(e)} className="" name="metodo" id="">
                        {metodos.map((m) => (
                            <option value={m}>{m}</option>
                        ))}
                    </select>
                </div>
                <select onChange={(e) => handleChange(e)} className="" name="responsable" id="">
                    {responsable.map((e) => (
                        <option value={e}>{e}</option>
                    ))}
                </select>
                <div className="">
                    <input onChange={(e) => handleChange(e)} className=" " name="fecha" type="date" />
                </div>
                <input onClick={(e) => { console.log('hola'); }} className="" type="button" value="N" />

                <input onClick={(e) => { console.log('hola'); }} className="" type="button" value="Y" />
            </div>
        }
    </>
    )
}