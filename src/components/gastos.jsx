import { useEffect, useState } from "react";
import { getGastosAction } from "../redux/actions/getGastosAction";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { deleteGastoAction } from "../redux/actions/deleteGastoAction";
import { utils, writeFile } from "xlsx";
import { EditForm } from "./EditForm";
import { Register } from "./Register";
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai' 
import { filterGastos } from "../redux/actions/filterGastos";


export const Gastos = () => {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const [e, setE] = useState()
    const toggle = () => setActive(!active);
    const [activeRegister, setActiveRegister] = useState(false)
    const toggleRegister = () => setActiveRegister(!activeRegister);
    const [filter, setFilter] = useState(false)
    const toggleFilter = () => {setFilter(!filter)};

    useEffect(() => {
        dispatch(getGastosAction());
    }, [dispatch]);

    const gastos = useSelector(state => state.filtered);
    const filtered = useSelector(state => state.filtered);
   
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
                    .then(r => dispatch(getGastosAction()))
            }
        })
    }

    const handleExport = () => {
        let wb = utils.book_new(),
            ws = utils.json_to_sheet(gastos.gastos);
        utils.book_append_sheet(wb, ws, "gastos");
        writeFile(wb, "MyExcel.xlsx")
    }

    const edit = (e) => {
        setE(e)
        setActive(!active)
    }
    const sendFilter=()=>{
        console.log(filter);
        toggleFilter()
        dispatch(filterGastos(filter))
        // dispatch(getGastosAction())
    }
   
    return (
        <div className="p-8">
           <section className="flex justify-between m-3">
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => handleExport(e)}>Exportar</button>
            <button onClick={()=>setActiveRegister(!activeRegister)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Registrar</button>
           </section>
            <div className="m-3 uppercase text-black font-bold flex p-2 justify-between"> <h1>tipo</h1><h1>estructura</h1><button onClick={()=>{sendFilter()}}>importe</button><h1>detalle</h1><h1>metodo</h1><h1>responsable</h1><h1>fecha</h1><button className="bg-gray-200 text-gray-200 font-bold py-2 px-4 rounded">X</button></div>
            <table className="w-full" id="tabla">

                {gastos.gastos.map((e) => {


                    return (<tr key={e.id} className="m-3 items-center bg-gray-100 flex p-2 justify-between gap-4">


                        <div className="">
                            <h1>{e.tipo}</h1>
                        </div>
                        <div className="">
                            <h1 className="w-40 overflow-hidden">{e.estructura}</h1>
                        </div>
                        <div>

                            <h1>{e.importe.toLocaleString('es-ES', {
                                style: 'currency', currency: 'EUR'
                            })}</h1>

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
                   <section className="flex gap-4">
                   <button onClick={() => edit(e)} className="bg-blue-500 duration-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><AiOutlineEdit/></button>
                            <button onClick={() => show(e.id)} className="bg-red-500 duration-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"><AiOutlineDelete/></button>
                   </section>
                
                    </tr>
                    )
                })}

            </table>
                <EditForm active={active} toggle={toggle} e={e} />
                <Register activeRegister={activeRegister} toggleRegister={toggleRegister}/>
        </div>
    )
}