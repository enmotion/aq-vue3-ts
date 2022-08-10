import {Power1,gsap} from "gsap/all";
const ani={
    enter:function(el,done){
        var vm = this;
        var orgh=el.offsetHeight;
        var orgw=el.offsetWidth;
        gsap.set(el,{transformPerspective:2000,opacity:0,width:0,height:vm.lastHeight,transformOrigin:"0% 0%"});
        gsap.to(el, 0.3, {width:orgw,height:orgh,opacity:1,ease:Power1.easeOut,onComplete:complete})
        function complete(){
            el.style.width="";
            el.style.height="";
            vm.lastHeight = orgh
            done()
        }
    },
    leave:function(el,done){
        var vm = this;
        var orgh=el.offsetHeight;
        var orgw=el.offsetWidth;
        gsap.set(el,{transformPerspective:2000,width:orgw,transformOrigin:"0% 0%"});
        gsap.to(el, 0.3, {width:0,opacity:0,ease:Power1.easeOut,onComplete:complete});
        function complete(){
            vm.lastHeight = orgh
            done()
        }
    },
}
export default ani;