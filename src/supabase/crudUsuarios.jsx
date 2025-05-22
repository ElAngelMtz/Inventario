import Swal from "sweetalert2";
import { ObtenerIdAuthSupabase, supabase } from "../index"
export const InsertarUsuarios = async (p) =>{
    const {data, error} = await supabase.from("usuarios").insert(p).select().maybeSingle();
    if (error){
        Swal.fire({
            icon: "error",
            title: "Eeeeghr",
            text: "Esta mal... Esta mal en algo.. En algo... Ni modo" + error.message
        });
    }
    if (data) return data;
}

export const MostrarUsuarios = async () => {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    const {error,data} = await supabase.from("usuarios").select().eq("idauth",idAuthSupabase).maybeSingle();
        if(data){
            return data;
        }
}