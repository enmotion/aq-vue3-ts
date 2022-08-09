import {Power1,gsap} from "gsap/all";
const ani={
    enter:function(el,done){
        var vm = this;
        var orgh=el.offsetHeight;
        var orgw=el.offsetWidth;
        gsap.set(el,{transformPerspective:2000,height:0,width:orgw,opacity:1});
        gsap.to(el, 0.3, {height:orgh,width:orgw,opacity:1,ease:Power1.easeOut,onComplete:complete})
        function complete(){
            el.style.height=""
            el.style.width=""
            vm.lastWidth = orgw
            done()
        }
    },
    leave:function(el,done){
        var vm = this;
        var orgh=el.offsetHeight;
        var orgw=el.offsetWidth;
        gsap.set(el,{transformPerspective:2000,height:el.offsetHeight});
        gsap.to(el, 0.2, {height:0,width:orgw,opacity:1,ease:Power1.easeOut});
        gsap.to(el, 0.1, {width:0,opacity:0,delay:0.2,ease:Power1.easeOut,onComplete:complete});
        function complete(){
            vm.lastWidth = orgw
            done()
        }
    },
}
export default ani;