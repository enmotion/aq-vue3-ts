export default function TencentMap(key,referer) {
    return new Promise(function (resolve, reject) {
            window.init = function () {
                resolve(qq)//注意这里
            }
            //腾讯地图有点恶心，地图api不带获取当前坐标的能力，所以需要在此引用两个不同JS库文件，有些麻烦，切记
            var scriptMap = document.createElement("script");
            scriptMap.type = "text/javascript";
            scriptMap.src = "http://map.qq.com/api/js?v=2.exp&callback=init&key="+key;
            scriptMap.onerror = reject;

            var scriptGeo = document.createElement("script");
            scriptGeo.type = "text/javascript";
            scriptGeo.src = "https://apis.map.qq.com/tools/geolocation/min?key="+key+"&referer="+referer||"";
            scriptGeo.onerror = reject;

            document.head.appendChild(scriptMap);
            document.head.appendChild(scriptGeo);
        }           
    )
}
