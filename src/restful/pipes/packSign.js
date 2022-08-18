function pipe(){
    return async function(ctx){
        //解析地址为数组
        let aryURL=ctx.api.url.split('/');
        let sign={
            perfix:'##@**',
            create:($obj)=>{ //加密方法
                // let str= R.join('', R.pluck(1)(R.values(R.pickBy((v,k)=>v[0]!='sign',R.sortBy(R.prop(0))(R.toPairs($obj))))));
                // return md5(md5(str)+this.perfix);
                return $obj;
            },
        }
        //看是否需要添加签名情况
        if( aryURL.indexOf('test')<0 && aryURL.indexOf('upload')<0 ){
            ctx.request.data.sign=sign.create(ctx.request.data);
        }
        return ctx;
    }
}

export default pipe;