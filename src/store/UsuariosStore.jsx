import { create } from "zustand";
import { InsertarUsuarios, MostrarUsuarios, supabase } from "../index";

export const useUsuariosStore = create((set,get) => ({
    insertarUsuarioAdmin: async (p) => {
        const { data,error } = await supabase.auth.signUp({
            email: p.correo,
            password: p.pass,
        });
        console.log ("data del registo del user auth", data);
        if (error) return null;
        const datauser = await InsertarUsuarios({idauth: data.user.id, fecharegistro: new Date(), tipouser: "admin",
        });
        return datauser;
    },
    idusuario: 0, 
    mostrarUsuarios: async()=>{
        const response = await MostrarUsuarios();
        if (response && response.id !== undefined) {
            set({idusuario: response.id});
            return response;
        } else {
            set({idusuario: null});
            return null;
        }
    }
}));