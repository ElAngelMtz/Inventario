import { Routes, Route } from 'react-router-dom';
import { Configuracion, ErrorMolecula, Home, Login, ProtectedRoute, UserAuth, useEmpresaStore, useUsuariosStore, SpinnerLoader, Marca} from "../index";
import { useQuery } from "@tanstack/react-query"

export function  MyRoutes() {
    const {user} = UserAuth();
    const { mostrarUsuarios,idusuario } = useUsuariosStore();
    const { mostrarEmpresa } = useEmpresaStore();
    const {data:datausuarios, isLoading, error } = useQuery({
        queryKey:["mostrar usuarios"],
        queryFn: mostrarUsuarios,
    });
    const {data:dataempresa} = useQuery({queryKey:["mostrar empresa"],
        queryFn: ()=> mostrarEmpresa({ idusuario:idusuario}), enabled:!!datausuarios 
    });
    if(isLoading){
        return <SpinnerLoader/>
    }

    if(error){
        return <ErrorMolecula mensaje={error.message}/>
    }
    return (
        <Routes>
            <Route path="/login" element= {<Login/>} />
            <Route element={<ProtectedRoute user={user} redirectTo="/login"/>}>
                <Route path="/" element= {<Home/>} />
                <Route path="/configurar" element= {<Configuracion/>} />
                <Route path="/configurar/marca" element= {<Marca/>} />
            </Route>
        </Routes>
    );
}
