import store from '@src/store/';
function pipe(){
    return async function (err){
        store.state.rootVm.$message({
            message: process.env.NODE_ENV==='development'? err :"请求数据异常，请稍后再次尝试!",
            type:"error",
        })
        return err
    }
}

export default pipe