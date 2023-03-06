import { useEffect, useState } from "react";
import { getGastosAction } from "../redux/actions/getGastosAction";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { deleteGastoAction } from "../redux/actions/deleteGastoAction";
import { utils,writeFile } from "xlsx";


export const Gastos = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getGastosAction());
    }, [dispatch]);

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
                .then(r=> dispatch(getGastosAction()))
            }
        })
    }
    const handleExport = () => {
        let wb =utils.book_new(),
        ws=utils.json_to_sheet(gastos.gastos);
        utils.book_append_sheet(wb,ws,"gastos");
        writeFile(wb,"MyExcel.xlsx")
    }
    function formatNumber (number){
        return number.toLocalString('es-ES',{
            style:'currency',
            currency:'EUR'
        })
    }
    return (
        <div className="p-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => handleExport(e)}>Exportar</button>
            <div className="m-3 uppercase text-black font-bold flex p-2 justify-between"> <h1>tipo</h1><h1>estructura</h1><h1>importe</h1><h1>detalle</h1><h1>metodo</h1><h1>responsable</h1><h1>fecha</h1><button className="bg-gray-200 text-gray-200 font-bold py-2 px-4 rounded">X</button></div>
            <table className="w-full" id="tabla">

                {gastos.gastos.map((e) => {


                    return (<tr key={e.id} className="m-3 bg-gray-100 flex p-2 justify-between">


                        <div className="">
                            <h1>{e.tipo}</h1>
                        </div>
                        <div>
                            <h1>{e.estructura}</h1>
                        </div>
                        <div>

                            <h1>{formatNumber(e.importe)}</h1>

                        </div>
                        <div>

                            <h1>{e.detalle}</h1>
                        </div>
                        <div>
                            <h1>{e.metodo}</h1>
                        </div>
                        <div>
                            <h1>{e.responsable}</h1>
                        </div>
                        <div>
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