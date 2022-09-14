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
        binds:{
          size:'small'
        }
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
      outerClass:'w-3/12 flex-grow-1',
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
      outerClass:'w-3/12 flex-grow-1',
      getter:(value)=>{ return parseFloat(value) },
      setter:(value)=>{ return value + 'cm' },
      binds:{
        size:'small',
        activeValue:10,
        inactiveValue:0,
        class:"flex-grow-1"
      }
    },
    'info.link':{
      label:'链接:',
      append:'internet',
      outerClass:'w-6/12 flex-grow-1',
      component:'ElInput',
      binds:{
        size:'small'
      }
    },
    'info.body.eye':{
      label:'瞳色:',
      outerClass:'mt-10 mr-20',
      outerStyle:{width:'200px'},
      component:'ElInput',
      binds:{
        size:'small'
      }
    },
    'info.body.skin':{
      label:'肤色:',
      outerClass:'mt-10 mr-20',
      outerStyle:{width:'200px'},
      component:'ElInput',
      binds:{
        size:'small'
      }
    },
    'info.body.skins':{
      label:'肤色:',
      outerClass:'mt-10',
      outerStyle:{width:'300px'},
      component:'ElInput',
      append:'cm',
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
    if(data.info.age>40){
      data.info.body.skin=data.info.age+'pink'
      ui['info.body.size']={
        label:'尺寸',
        outerClass:'w-5/12 flex-grow-1 mb-5',
        component:'ElSwitch',
        binds:{
          activeValue:10,
          inactiveValue:0,
        }
      }
      data.info.body.size = '18cm'
      ui['info.body.skin']={
        label:'肤色:',
        component:'ElInput',
        binds:{
          // size:'small'
        }
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
      outerClass:'w-5/12 h-20 flex-grow-1 my-5',
      component:'ElInput',
      getter:(value)=>{if(value=='enmotion'){return 'bad enmotion'} return value},
      setter:(value)=>{if(value=='enmotion'){return 'bad enmotion'} return value},   
      binds:{
        size:'small'
      }
    },
    'divider-01':{
      outerClass:'w-10 h-20 justify-center my-5 mx-5',
      component:"ElDivider",
      binds:{
        direction:'vertical',
      }
    },
    'info.body.size':{
      label:'尺寸:',
      append:'cm',
      outerClass:'w-5/12 h-20 flex-grow-1 my-5',
      component:'ElSlider',
      getter:(value)=>{ return parseFloat(value) },
      setter:(value)=>{ return value + 'cm' },
      binds:{
        size:'large',
        step:100,
        max:1000,
        min:-1000,
        class:"flex-grow-1 mx-5"
      }
    },
    'divider-02':{
      outerClass:'w-full h-10 justify-center h-5 my-5',
      component:"ElDivider",
      binds:{
      }
    },
    'info.link':{
      label:'链接:',
      append:'.com',
      outerClass:'w-full h-20 my-5',
      component:'ElInput',
      binds:{
        appends:'.com',
        size:'small'
      }
    },
    // 'divider-03':{
    //   outerClass:'w-full justify-center h-5',
    //   component:"ElDivider",
    //   binds:{
    //   }
    // },
    'info.body.eye':{
      label:'瞳色:',
      outerClass:'w-full h-20 my-5',
      component:'ElInput',
      binds:{
        size:'small'
      }
    },
    'info.body.eyes':{
      label:'瞳色:',
      outerClass:'w-full h-20 my-5',
      component:'ElColorPicker',
      binds:{
        showAlpha:true,
      }
    },
  }
}