import {Power1,gsap} from "gsap/all";
const ani={
    enter:function(el,done){
        var vm = this;
        var orgh=el.offsetHeight;
        var orgw=el.offsetWidth;
        console.log(vm.lastHeight,vm.lastWidth,orgh,orgw,'enter')
        gsap.set(el,{
            rotationX:90,
            z:-300,
            opacity:0,
            height:vm.lastHeight,
            width:vm.lastWidth,
            transformPerspective:1000
        });
        gsap.to(el,0.15,{
            rotationX:90,
            z:-30,
            opacity:0,
            height:orgh,
            width:orgw,
            ease:Power1.easeOut
        });
        gsap.to(el,0.1,{
            rotationX:-5,
            z:5,
            opacity:1,
            height:orgh,
            delay:0.1,
            ease:Power1.easeOut
        });
        gsap.to(el,0.1,{
            rotationX:0,
            z:0,
            opacity:1,
            height:orgh,
            zIndex:0,
            delay:0.25,
            ease:Power1.easeOut,
            onComplete:complete
        });
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
        console.log(vm.lastHeight,vm.lastWidth,orgh,orgw,'leave')
        gsap.set(el,{rotationX:0,z:0,height:orgh,opacity:1,transformPerspective:1000});
        gsap.to(el,0.1,{rotationX:5,z:5,height:orgh,opacity:1,delay:0.1,ease:Power1.easeOut});
        gsap.to(el,0.15,{rotationX:-90,z:-30,height:orgh,opacity:0.2,delay:0.1,ease:Power1.easeOut});  
        gsap.to(el,0.1,{rotationX:-90,z:-300,height:orgh,opacity:0,delay:0.25,ease:Power1.easeOut,onComplete:complete});
        function complete(){
            vm.lastWidth = orgw;
            vm.lastHeight = orgh
            done()
        }    
    },
}
export default ani;