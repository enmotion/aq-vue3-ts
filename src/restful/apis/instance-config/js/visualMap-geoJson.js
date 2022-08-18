// import ecu from "easy-code-url";
import * as R from "ramda";

const api={
    getGeoJson:{
        tips:"获取地理数据",
        url:"",
        baseURL:import.meta.env.VITE_APP_GEO_BASE_URL,
        method:'get', 
        timeout:60000,
        extra:{
            penetrate:true //模拟数据单点关闭
        }
    },
}
export default api;
