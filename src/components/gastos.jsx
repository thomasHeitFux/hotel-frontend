import { useEffect } from "react";
import { getGastosAction } from "../redux/actions/getGastosAction";
import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
import swal from "sweetalert";
import { deleteGastoAction } from "../redux/actions/deleteGastoAction";

export const Gastos = () => {
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
        }).then(respuesta=>{
            if (respuesta) {

                dispatch(deleteGastoAction(id))
                swal({text:'El registro se ha eliminado exitosamente!',icon:'success'})
                dispatch(getGastosAction());
            }
        })
    }
    return (
        <div className="p-8">
            {gastos.gastos.map((e) => {
                
                return (<div key={e.id} className="m-3 bg-gray-100 flex p-2 justify-between">

                    <div className="">
                        <h1 className="font-bold uppercase">Tipo:</h1>
                        <h1>{e.Tipos[0].name}</h1>
                    </div>
                    <div>
                        <h1 className="font-bold uppercase">Estructura:</h1>
                        <h1>{e.Estructuras[0].name}</h1>
                    </div>
                    <div>
                        <h1 className="font-bold uppercase">importe:</h1>
                        <h1>{e.importe}€</h1>

                    </div>
                    <div>
                        <h1 className="font-bold uppercase">detalle:</h1>
                        <h1>{e.Detalles[0].name}</h1>
                    </div>
                    <div>
                        <h1 className="font-bold uppercase">metodo:</h1>
                        <h1>{e.Metodos[0].name}</h1>
                    </div>
                    <div>
                        <h1 className="font-bold uppercase">responsable:</h1>
                        <h1>{e.Responsables[0] ? e.Responsables[0].name : 'ana'}</h1>
                    </div>
                    <div>
                        <h1 className="font-bold uppercase">Fecha:</h1>
                        <h1>{e.fecha}</h1>
                    </div>
                    <button onClick={() => show(e.id)} className="bg-red-500 duration-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">X</button>
                </div>
                )
            })}
        </div>
    )
}