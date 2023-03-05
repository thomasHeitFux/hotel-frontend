import { useEffect, useState } from "react";
import { getGastosAction } from "../redux/actions/getGastosAction";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { deleteGastoAction } from "../redux/actions/deleteGastoAction";


export const Gastos = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getGastosAction());
    }, []);

    const gastos = useSelector(state => state.gastos);

    const show = (id) => {
        swal({
            title: "ELIMINAR",
            text: "Estas seguro?",
            icon: "error",
            buttons: ["NO", "SI"]
        }).then(respuesta => {
            if (respuesta) {

                dispatch(deleteGastoAction(id))
                swal({ text: 'El registro se ha eliminado exitosamente!', icon: 'success' })
                dispatch(getGastosAction());
            }
        })
    }
    const handleExport = () => {
        console.log(data);
    }
    return (
        <div className="p-8">
            <button onClick={(e) => handleExport(e)}>Export</button>
            <div className="m-3 uppercase text-black font-bold flex p-2 justify-between"> <h1>tipo</h1><h1>estructura</h1><h1>importe</h1><h1>detalle</h1><h1>metodo</h1><h1>responsable</h1><h1>fecha</h1><button  className="bg-gray-200 text-gray-200 font-bold py-2 px-4 rounded">X</button></div>
            <table className="w-full" id="tabla">

                {gastos.map((e) => {


                    return (<tr key={e.id} className="m-3 bg-gray-100 flex p-2 justify-between">


                        <div className="">
                            {/* <h1 className="font-bold uppercase">Tipo:</h1> */}
                            <h1>{e.tipo}</h1>
                        </div>
                        <div>
                            {/* <h1 className="font-bold uppercase">Estructura:</h1> */}
                            <h1>{e.estructura}</h1>
                        </div>
                        <div>
                            {/* <h1 className="font-bold uppercase">importe:</h1> */}
                            <h1>{e.importe}€</h1>

                        </div>
                        <div>
                            {/* <h1 className="font-bold uppercase">detalle:</h1> */}
                            <h1>{e.detalles}</h1>
                        </div>
                        <div>
                            {/* <h1 className="font-bold uppercase">metodo:</h1> */}
                            <h1>{e.metodo}</h1>
                        </div>
                        <div>
                            {/* <h1 className="font-bold uppercase">responsable:</h1> */}
                            <h1>{e.responsable}</h1>
                        </div>
                        <div>
                            {/* <h1 className="font-bold uppercase">Fecha:</h1> */}
                            <h1>{e.fecha}</h1>
                        </div>
                        <button onClick={() => show(e.id)} className="bg-red-500 duration-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">X</button>
                    </tr>
                    )
                })}

            </table>
        </div>
    )
}