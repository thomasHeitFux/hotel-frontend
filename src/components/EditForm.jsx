import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { sendDataAction } from "../redux/actions/sendDataAction";
import swal from "sweetalert";
import { updateDataAction } from "../redux/actions/updateDataAction";
import { getGastosAction } from "../redux/actions/getGastosAction";

const tipos = ["Costo Variable", "Costo Fijo", "Ingresos"]
const estructuras = ["Via Villafranca 2 ( Rome station Rooms)", "Vía Goito 17 B&B Relax", "Vía Degli Ammiragli 67"]
const metodos = ["Cash", "Bonifico", "Carta", "PayPal", "Revoult"]
const responsable = ["Ana Vasquez Castillo", "Grabiel Nuñez", "Otros"]


export const EditForm = ({ active,e, toggle}) => {
    
    const dispatch = useDispatch();

    const [data, setData] = useState({});

    useEffect(() => {
        setData(e);
    }, [e]);


    function handleChange(i) {
        setData({
            ...data,
            [i.target.name]: i.target.value
        })
    }


    function handleSend() {
        if (!data.importe || !data.fecha || !data.tipo || !data.metodo || !data.detalle || !data.estructura || !data.responsable) {
            swal({ text: 'Necesitas rellenar todos los campos', icon: "error" })
        }
        else {
            console.log(data);
            dispatch(updateDataAction(data))
            toggle()
            swal({ text: 'El registro se ha actualizado exitosamente!', icon: 'success' })
            .then(r => dispatch(getGastosAction()))
        }
    }

    return (<>
        {active &&
            <div  className="flex justify-center w-full p-12 backdrop-blur-sm transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
                <section className="shadow-md rounded px-8 pt-6 pb-8 mb-4  bg-gray-100 w-1/2 h-max">

                
                    <div className="w-full ">
                    <select defaultValue={e.tipo} onChange={(e) => handleChange(e)} className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="tipo" id="">
                        {tipos.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>
                <div className="">

                    <select defaultValue={e.estructura} onChange={(e) => handleChange(e)} className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="estructura" id="">
                        {estructuras.map((e) => (
                            <option value={e}>{e}</option>
                        ))}
                    </select>
                </div>
                <div className="">

                    <input defaultValue={e.importe} onChange={(e) => handleChange(e)} className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="importe" type="number" />
                </div>
                <div className="">
                    <input type="text" defaultValue={e.detalle} onChange={(e) => handleChange(e)} className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="detalle" id="">
                    </input>
                </div>
                <div className="">

                    <select defaultValue={e.metodo} onChange={(e) => handleChange(e)} className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="metodo" id="">
                        {metodos.map((m) => (
                            <option value={m}>{m}</option>
                        ))}
                    </select>
                </div>
                <select defaultValue={e.responsable} onChange={(e) => handleChange(e)} className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="responsable" id="">
                    {responsable.map((e) => (
                        <option value={e}>{e}</option>
                    ))}
                </select>
                <div className="">
                    <input defaultValue={e.fecha} onChange={(e) => handleChange(e)} className=" w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="fecha" type="date" />
                </div>
              
                <section className="flex gap-4 justify-end">
                <button className="bg-red-500 duration-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={toggle}>Cancelar</button>
                <input onClick={(e) => { handleSend(); }} className="bg-green-500 duration-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="button" value="Guardar" />
                </section>
                </section>
            </div>
        }
    </>
    )
}