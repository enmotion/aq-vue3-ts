declare interface Window{
  [key:string]:any
}
export default function TencentMap(key:string,callback?:Function) {
  return new Promise((resolve,reject)=>{
    let script:HTMLScriptElement = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://map.qq.com/api/gljs?v=1.exp&key="+key;
    document.body.appendChild(script);
    script.onload = function(event){
      console.log(event,'腾讯地图加载完毕...')
      resolve((window as Window)['TMap']);
    }
    script.onerror = function(error){
      reject({event:error,msg:'腾讯地图加载失败...'});
    }
  })
}