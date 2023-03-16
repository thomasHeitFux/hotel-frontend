import { useState } from "react";
import { useDispatch } from 'react-redux';
import { sendDataAction } from "../redux/actions/sendDataAction";
import swal from "sweetalert";

const tipos = ["Costo Variable", "Costo Fijo", "Ingresos"]
const estructuras = ["Via Villafranca 2 ( Rome station Rooms)", "Vía Goito 17 B&B Relax", "Vía Degli Ammiragli 67"]
const metodos = ["Cash", "Bonifico", "Carta", "PayPal", "Revoult"]
const responsable = ["Ana Vasquez Castillo", "Grabiel Nuñez", "Otros"]


export const EditForm = ({ active,e, toggle}) => {
    console.log(e);
    const dispatch = useDispatch();

    const [data, setData] = useState(e);


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
            <div  className="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2  flex justify-between gap-1 items-center p-12 backdrop-blur-sm transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
                    <div className="">
                    <select defaultValue={e.tipo} onChange={(e) => handleChange(e)} className="" name="tipo" id="">
                        {tipos.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>
                <div className="">

                    <select defaultValue={e.estructura} onChange={(e) => handleChange(e)} className="" name="estructura" id="">
                        {estructuras.map((e) => (
                            <option value={e}>{e}</option>
                        ))}
                    </select>
                </div>
                <div className="">

                    <input defaultValue={e.importe} onChange={(e) => handleChange(e)} className="" name="importe" type="number" />
                </div>
                <div className="">
                    <input type="text" defaultValue={e.detalle} onChange={(e) => handleChange(e)} className="" name="detalle" id="">
                    </input>
                </div>
                <div className="">

                    <select defaultValue={e.metodo} onChange={(e) => handleChange(e)} className="" name="metodo" id="">
                        {metodos.map((m) => (
                            <option value={m}>{m}</option>
                        ))}
                    </select>
                </div>
                <select defaultValue={e.responsable} onChange={(e) => handleChange(e)} className="" name="responsable" id="">
                    {responsable.map((e) => (
                        <option value={e}>{e}</option>
                    ))}
                </select>
                <div className="">
                    <input defaultValue={e.fecha} onChange={(e) => handleChange(e)} className=" " name="fecha" type="date" />
                </div>
                <input onClick={(e) => { console.log('hola'); }} className="" type="button" value="N" />
                <input onClick={(e) => { console.log('hola'); }} className="" type="button" value="Y" />
                <button className="bg-red-500 duration-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={toggle}>X</button>
            </div>
        }
    </>
    )
}