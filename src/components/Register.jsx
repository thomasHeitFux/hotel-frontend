import { useState } from "react";
import { useDispatch } from 'react-redux';
import { sendDataAction } from "../redux/actions/sendDataAction";
import swal from "sweetalert";

export const Register = ({activeRegister, toggleRegister}) => {

    const dispatch = useDispatch();



    const tipos = ["Costo Variable", "Costo Fijo", "Ingresos"]
    const estructuras = ["Via Villafranca 2 ( Rome station Rooms)", "Vía Goito 17 B&B Relax", "Vía Degli Ammiragli 67"]
    const metodos = ["Cash", "Bonifico", "Carta", "PayPal", "Revoult"]
    const responsable = ["Ana Vasquez Castillo", "Grabiel Nuñez", "Otros"]

    const [data, setData] = useState({
        importe: null, fecha: null, metodo: metodos[0], tipo: tipos[0], detalle: "", estructura: estructuras[0], responsable: responsable[0]
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
    return (<>{
        activeRegister &&
        <div className="backdrop-blur-sm transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
            <div className="flex justify-center w-full p-10 ">
                <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2  " action="">

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
                                {tipos.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Metodo</label>
                            <select onChange={(e) => handleChange(e)} className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="metodo" id="">
                                {metodos.map((m) => (
                                    <option value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Detalle</label>
                            <input type="text" onChange={(e) => handleChange(e)} className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="detalle" id="">
                            </input>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Estructura</label>
                            <select onChange={(e) => handleChange(e)} className="appearance-none block w-full bg-gray-200 cursor-pointer text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="estructura" id="">
                                {estructuras.map((e) => (
                                    <option value={e}>{e}</option>
                                    ))}
                            </select>
                        </div>
                    </div>

                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Responsable</label>
                    <select onChange={(e) => handleChange(e)} className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="responsable" id="">
                        {responsable.map((e) => (
                            <option value={e}>{e}</option>
                            ))}
                    </select>
                    <section className="flex justify-end gap-4 pt-4">
                    <input onClick={(e) => { toggleRegister() }} className="duration-300 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" type="button" value="Cancelar" />
                        <input onClick={(e) => { handleSend() }} className="duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" type="button" value="Crear" />
                    </section>
                </form>
            </div>
        </div>
                        }
                            </>
    )
}