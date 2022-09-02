import { defineComponent, ref, reactive } from 'vue';
import CTF from "@src/parts/aq-componets/aq-custome-el-form/types";
export const uiConfigA:CTF.UiConfig = {
  beforeUpdate:function(k,n,o,innerState){
    if(k == 'name' && n == 'enmotion' && o == 'mod'){
      innerState.value['info.age'] = o
    }
    return innerState
  },
  uiGuardian:function(ui,data){
    if(data.info.age>20){
      data.info.body.skin=data.info.age+'pink'
      ui['info.body.size'].component='ElSwitch'
      data.info.body.size = '18cm'
      ui['info.body.skin']={
        label:'肤色:',
        component:'ElInput',
        binds:{}
      }
      data.info.body.skin = 'blue'
      return ui
    }else{
      data.info.body.skin='yellow'
    }
    return ui
  },
  elementGroup:{
    'info.age':{
      label:'年龄:',
      append:'px',
      component:'ElInputNumber',
      binds:{
        size:'small',
        activeValue:18,
        inactiveValue:0,
        class:"flex-grow-1"
      }
    },
    'info.body.size':{
      label:'尺寸:',
      append:'cm',
      component:'ElInputNumber',
      getter:(value)=>{ return parseFloat(value) },
      setter:(value)=>{ return value + 'cm' },
      binds:{
        size:'small',
        activeValue:18,
        inactiveValue:0,
        class:"flex-grow-1"
      }
    },
    'info.link':{
      label:'链接:',
      append:'internet',
      component:'ElInput',
      binds:{
        size:'small'
      }
    },
    'info.body.eye':{
      label:'瞳色:',
      component:'ElInput',
      binds:{
        size:'small'
      }
    },
  }
}
export const uiConfigB:CTF.UiConfig = {
  beforeUpdate:function(k,n,o,innerState){
    if(k == 'name' && n == 'enmotion' && o == 'mod'){
      innerState.value['info.age'] = 0
      innerState.value['info.body.size'] = 0
    }
    return innerState
  },
  uiGuardian:function(ui,data){
    if(data.info.age>20){
      data.info.body.skin=data.info.age+'pink'
      ui['info.body.size'].component='ElSwitch'
      data.info.body.size = '18cm'
      ui['info.body.skin']={
        label:'肤色:',
        component:'ElInput',
        binds:{}
      }
      data.info.body.skin = 'blue'
      return ui
    }else{
      data.info.body.skin='yellow'
    }
    return ui
  },
  elementGroup:{
    'name':{
      label:'姓名:',
      append:'px',
      outerClass:'w-5/12 flex-grow-1 mb-5',
      component:'ElInput',
      getter:(value)=>{if(value=='enmotion'){return 'bad enmotion'} return value},
      setter:(value)=>{if(value=='enmotion'){return 'bad enmotion'} return value},   
      binds:{
        size:'small'
      }
    },
    'info.body.size':{
      label:'尺寸:',
      append:'cm',
      outerClass:'w-5/12 flex-grow-1 mb-5',
      component:'ElSlider',
      getter:(value)=>{ return parseFloat(value) },
      setter:(value)=>{ return value + 'cm' },
      binds:{
        size:'large',
        step:100,
        max:1000,
        min:-1000,
        class:"flex-grow-1 mx-10"
      }
    },
    'info.link':{
      label:'链接:',
      append:'internet',
      outerClass:'w-full mb-5',
      component:'ElInput',
      binds:{
        size:'small'
      }
    },
    'info.body.eye':{
      label:'瞳色:',
      outerClass:'w-full mb-5',
      component:'ElInput',
      binds:{
        size:'small'
      }
    },
  }
}