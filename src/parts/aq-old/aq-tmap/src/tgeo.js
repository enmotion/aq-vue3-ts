export default function TencentGeo(key,referer) {
    return new Promise(function (resolve, reject) {
        window.init = function () {
            this.console.log("der")
            resolve(qq)//注意这里
        }
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://apis.map.qq.com/tools/geolocation/min?key="+key+"&referer="+referer;
            script.onerror = reject;
            document.head.appendChild(script);
        }
    )
}