import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTipos } from "../redux/actions/tiposActions";
import { getMetodos } from "../redux/actions/metodosActions";
import { getDetalles } from "../redux/actions/detallesActions";
import { getEstructuras } from "../redux/actions/estructurasActions";
import { sendDataAction } from "../redux/actions/sendDataAction";
import { Gastos } from "../components/gastos";
import swal from "sweetalert";

export const Registrar = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTipos());
        dispatch(getMetodos());
        dispatch(getDetalles());
        dispatch(getEstructuras());
    }, []);

    const tipos = useSelector(state => state.tipos);
    const detalles = useSelector(state => state.detalles);
    const estructuras = useSelector(state => state.estructuras);
    const metodos = useSelector(state => state.metodos);

    const [data, setData] = useState({
        importe:null,fecha:null,metodo:null,tipo:null,detalle:null,estructura:null,responsable:null
    });


    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

  

    function handleSend() {
        if (  !data.importe || !data.fecha || !data.tipo || !data.metodo || !data.detalle || !data.estructura || !data.responsable) {
            swal({ text: 'Necesitas rellenar todos los campos', icon: "error" })
        }
        else {swal({ text: 'El registro se ha creado exitosamente!', icon: 'success' })
        dispatch(sendDataAction(data))
        setData()}
    }

    return (
        <div>
            <div className="flex justify-center w-full p-10">
                <form className="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2  " action="">

                    <div className="flex flex-wrap -mx-3 mb-2">

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Fecha</label>
                            <input onChange={(e) => handleChange(e)} className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="fecha" type="date" />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">importe</label>
                            <input onChange={(e) => handleChange(e)} className="w-full appearance-none block bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="importe" type="number" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Tipo</label>
                            <select onChange={(e) => handleChange(e)} className="appearance-none block w-full cursor-pointer bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="tipo" id="">
                            <option value="otro">...</option>
                                {tipos.tipos.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Metodo</label>
                            <select defaultValue={metodos.metodos[0]} onChange={(e) => handleChange(e)} className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="metodo" id="">
                            <option value="otro">...</option>
                                {metodos.metodos.map((m) => (
                                    <option value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Detalle</label>
                            <select onChange={(e) => handleChange(e)} className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="detalle" id="">
                            <option value="otro">...</option>
                                {detalles.detalles.map((d) => (
                                    <option value={d}>{d}</option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Estructura</label>
                            <select onChange={(e) => handleChange(e)} className="appearance-none block w-full bg-gray-200 cursor-pointer text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="estructura" id="">
                            <option value="otro">...</option>
                                {estructuras.estructuras.map((e) => (
                                    <option value={e}>{e}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Responsable</label>
                    <select onChange={(e) => handleChange(e)} className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="responsable" id="">
                        <option value="otro">...</option>
                        <option value="otro">otro</option>
                        <option value="ana vasquez">ana vasquez</option>
                    </select>
                    <section className="flex justify-end">

                    <input onClick={(e) => { handleSend() }} className="duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" type="button" value="Send" />
                    </section>
                </form>
            </div>
        </div>
    )
}