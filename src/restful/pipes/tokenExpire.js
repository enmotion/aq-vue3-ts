import store from '@src/store/';

function pipe(res){
    return async function(){
        if(res.data.err==2){
            store.state.rootVm.$message({
                message:"您的登录已过期，请重新登录！",
                type:"error",
            })
            store.getters.getRootVm.$router.push({name:"login"});
        }else{
            return res
        }    
    }
}

export default pipe