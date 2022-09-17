import { defineComponent, ref, reactive } from 'vue';
import CTF from "@src/parts/aq-componets/aq-custome-el-form/types";
export const uiConfigA:CTF.UiConfig = {
  beforeUpdate:function(k,n,o,innerStateValue){
    if(k == 'name' && n == 'enmotion' && o == 'mod'){
      innerStateValue['info.age'] = o
    }
    return innerStateValue
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
      outerClass:'w-3/12 flex-grow-1 items-center',
      binds:{
        size:'small',
        controls:true,
        activeValue:18,
        inactiveValue:0,
        class:"flex-grow-1 w-0"
      }
    },
    'info.body.size':{
      label:'尺寸:',
      append:'cm',
      component:'ElInputNumber',
      outerClass:'w-3/12 flex-grow-1 items-center',
      getter:(value)=>{ return parseFloat(value) },
      setter:(value)=>{ return value + 'cm' },
      binds:{
        size:'small',
        controls:false,
        activeValue:10,
        inactiveValue:0,
        class:"flex-grow-1 w-0"
      }
    },
    'info.link':{
      label:'链接:',
      append:'internet',
      outerClass:'w-6/12 flex-grow-1 items-center',
      component:'ElInput',
      binds:{
        size:'small',
        class:'flex-grow-1 w-0'
      }
    },
    'info.body.eye':{
      label:'瞳色:',
      outerClass:'mt-10 mr-20 flex-grow-1 items-center',
      outerStyle:{width:'200px'},
      component:'ElInput',
      binds:{
        size:'small',
        class:'flex-grow-1 w-0'
      }
    },
    'info.body.skin':{
      label:'肤色:',
      outerClass:'mt-10 mr-20 items-center',
      outerStyle:{width:'200px'},
      component:'ElInput',
      binds:{
        size:'small',
        class:'flex-grow-1 w-0'
      }
    },
    'info.body.skins':{
      label:'肤色:',
      outerClass:'mt-10 items-center',
      outerStyle:{width:'300px'},
      component:'ElInput',
      append:'cm',
      binds:{
        size:'small',
        class:'flex-grow-1 w-0'
      }
    },
  }
}
export const uiConfigB:CTF.UiConfig = {
  beforeUpdate:function(k,n,o,innerStateValue){
    if(k == 'name' && n == 'enmotion' && o == 'mod'){
      innerStateValue['info.age'] = 0
      innerStateValue['info.body.size'] = 0
    }
    return innerStateValue
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
        class:"flex-grow-1 w-0",
        size:'small'
      }
    },    
    'divider-01':{
      outerClass:'w-10 h-20 justify-center my-5 mx-5',
      component:"ElDivider",
      binds:{
        class:"flex-grow-1 w-0",
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
        size:'small',
        step:100,
        max:1000,
        min:-1000,
        class:"flex-grow-1 w-0 mx-5"
      }
    },    
    'divider-02':{
      outerClass:'w-full h-0 justify-center h-5 my-5',
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
        class:'w-0 flex-grow-1',
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
        class:'w-0 flex-grow-1',
        size:'small'
      }
    },
    'info.body.eyes':{
      label:'瞳色:',
      outerClass:'w-full h-auto my-5 items-center',
      component:'ElColorPicker',
      binds:{
        class:'flex-grow-1 w-0 flex-grow-1',
        showAlpha:true,
      }
    },
    'info.dy':{
      label:'颜色:',
      outerClass:'w-full h-auto items-start',
      labelClass:'flex-shrink-0 xrow text-left h-30 xrow items-center w-full',
      component:'aqMonacoEditor',
      binds:{
        showAlpha:true,
      }
    }
  }
}