import {Power1,gsap} from "gsap/all";

const ani={
    enter:function(el,done){
        var vm = this;
        var orgh=el.offsetHeight;
        var orgw=el.offsetWidth;
        // console.log(vm.lastHeight,1111)
        gsap.set(el,{rotationY:90,z:-100,opacity:0,height:vm.lastHeight,width:0,transformPerspective:1400});
        gsap.to(el,0.1,{rotationY:90,z:-50,opacity:0.5,height:orgh,width:orgw/1.5,ease:Power1.easeOut});
        gsap.to(el,0.15,{rotationY:-5,z:0,opacity:1,width:orgw,delay:0.1,ease:Power1.easeOut});
        gsap.to(el,0.3,{rotationY:0,z:0,opacity:1,width:orgw,delay:0.15,ease:Power1.easeOut,onComplete:complete});
        function complete(){
            el.style.height=""
            el.style.width=""
            vm.lastWidth = orgw;
            vm.lastHeight = orgh
            done()
        }
    },
    leave:function(el,done){
        var vm = this;
        var orgh=el.offsetHeight;
        var orgw=el.offsetWidth;
        // console.log(vm.lastHeight,el,3333)
        gsap.set(el,{rotationY:0,z:0,width:orgw,opacity:1,transformPerspective:1400});
        gsap.to(el,0.1,{rotationY:5,z:-10,width:orgw,opacity:1,delay:0.1,ease:Power1.easeOut});
        gsap.to(el,0.2,{rotationY:-90,z:-50,width:orgw,opacity:0.5,delay:0.1,ease:Power1.easeOut});  
        gsap.to(el,0.1,{rotationY:-90,z:-100,width:0,opacity:0,delay:0.3,ease:Power1.easeOut,onComplete:complete});
        function complete(){
            vm.lastWidth = orgw;
            vm.lastHeight = orgh
            done()
        }
    },
}
export default ani;