import {Power1,gsap} from "gsap/all";
const ani={
    enter:function(el,done){
        gsap.set(el,{scale:0.96,opacity:0,transformPerspective:1000});
        gsap.to(el, 0.3, {scale:1,opacity:1,ease:Power1.easeOut,onComplete:done});
    },
    leave:function(el,done){
        gsap.set(el,{scale:1,opacity:1,transformPerspective:1000});
        gsap.to(el, 0.2, {scale:1.04,opacity:0,ease:Power1.easeOut,onComplete:done});
    },
}
export default ani