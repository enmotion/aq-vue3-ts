import { defineComponent, ref, reactive } from 'vue';
import CTF from "@src/parts/aq-componets/aq-custome-el-form/types";
const size='small';
export const uiConfigA:CTF.UiConfig = {
  beforeUpdate:function(k,n,o,innerStateValue){
    if(k == 'name' && n == 'enmotion' && o == 'mod'){
      innerStateValue['name'] = 'mod.enmotion'
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
          size:size
        }
      }
      data.info.body.skin = 'blue'
      return ui
    }else{
      data.info.body.skin='yellow'
    }
    return ui
  },
  extra:{updata:true},
  elementGroup:{
    'name':{
      label:'姓名:',
      append:'px',
      outerClass:'w-full h-auto flex-grow-1 my-5 items-center',
      component:'ElInput',
      getter:(value)=>{if(value=='bad enmotion'){return 'enmotion'} return value},
      setter:(value)=>{if(value=='enmotion'){return 'bad enmotion'} return value},   
      binds:{
        class:"flex-grow-1 w-0",
        size:size,
      }
    },    
    'info.age':{
      label:'年龄:',
      append:'px',
      component:'ElInputNumber',
      outerClass:'w-5/12 flex-grow-1 items-center',
      binds:{
        size:size,
        controls:true,
        activeValue:18,
        inactiveValue:0,
        class:"flex-grow-1 w-0"
      }
    },
    'divider-01':{
      outerClass:'h-20 xrow justify-center mx-15 items-center',
      component:"ElDivider",
      binds:{
        class:"flex-grow-1 w-0",
        direction:'vertical',
      }
    },
    'info.body.size':{
      label:'尺寸:',
      append:'cm',
      component:'ElInputNumber',
      outerClass:'w-5/12 flex-grow-1 items-center',
      getter:(value)=>{ return parseFloat(value) },
      setter:(value)=>{ return value + 'cm' },
      binds:{
        size:size,
        controls:false,
        activeValue:10,
        inactiveValue:0,
        class:"flex-grow-1 w-0"
      }
    },
    'divider-02':{
      outerClass:'w-full my-10 justify-center',
      component:"ElDivider",
      binds:{
        class:"flex-grow-1 w-full",
      }
    },
    'info.link':{
      label:'链接:',
      append:'internet',
      outerClass:'w-5/12 flex-grow-1 items-center',
      component:'ElInput',
      binds:{
        size:size,
        class:'flex-grow-1 w-0'
      }
    },
    'divider-03':{
      outerClass:'h-20 xrow justify-center mx-15 items-center',
      component:"ElDivider",
      binds:{
        class:"flex-grow-1 w-0",
        direction:'vertical',
      }
    },
    'info.body.eye':{
      label:'瞳色:',
      outerClass:'w-5/12 flex-grow-1 items-center',
      component:'ElInput',
      binds:{
        size:size,
        class:'flex-grow-1 w-0'
      }
    },
    'info.body.skin':{
      label:'肤色:',
      outerClass:'w-5/12 flex-grow-1 items-center mt-10',
      component:'ElInput',
      binds:{
        size:size,
        class:'flex-grow-1 w-0'
      }
    },
    'divider-04':{
      outerClass:'h-20 xrow mt-10 justify-center mx-15 items-center',
      component:"ElDivider",
      binds:{
        class:"flex-grow-1 w-0",
        direction:'vertical',
      }
    },
    'info.body.skins':{
      label:'肤色:',
      outerClass:'w-5/12 flex-grow-1 items-center mt-10',
      component:'ElInput',
      append:'cm',
      binds:{
        size:size,
        class:'flex-grow-1 w-0'
      }
    },
  }
}
export const uiConfigB:CTF.UiConfig = {
  beforeUpdate:function(k,n,o,innerStateValue){
    if(k == 'name' && n.length > 5){
      // innerStateValue['name']=o
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
      outerClass:'w-4/12 h-auto flex-grow-1 my-5 items-center',
      component:'ElInput',
      getter:(value)=>{if(value=='bad enmotion'){return 'enmotion'} return value},
      setter:(value)=>{if(value=='enmotion'){return 'bad enmotion'} return value},   
      binds:{
        class:"flex-grow-1 w-0",
        size:size,
      }
    },    
    'divider-01':{
      outerClass:'w-10 h-20 justify-center my-5 mx-5 items-center',
      component:"ElDivider",
      binds:{
        class:"flex-grow-1 w-0 h-20",
        direction:'vertical',
      }
    },
    'info.body.size':{
      label:'尺寸:',
      append:'cm',
      outerClass:'w-4/12 h-auto flex-grow-1 my-5 items-center',
      component:'ElSlider',
      getter:(value)=>{ return parseFloat(value) },
      setter:(value)=>{ return value + 'cm' },
      binds:{
        size:size,
        step:100,
        max:1000,
        min:-1000,
        class:"flex-grow-1 w-0 mx-5"
      }
    },    
    'divider-02':{
      outerClass:'w-full h-auto justify-center h-5 my-5',
      component:"ElDivider",
      binds:{
      }
    },
    'info.link':{
      label:'链接:',
      append:'.com',
      outerClass:'w-full h-auto my-5 items-center',
      component:'ElInput',
      extra:{updata:true},
      binds:{
        appends:'.com',
        class:'w-0 flex-grow-1',
        size:size,
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
      outerClass:'w-full h-auto my-5 items-center',
      component:'ElInput',
      binds:{
        class:'w-0 flex-grow-1',
        size:size,
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
      outerClass:'w-full h-auto items-start',
      labelClass:'flex-shrink-0 xrow text-left h-30 xrow items-center w-full',
      component:'aqMonacoEditor',
      binds:{
        showAlpha:true,
      }
    }
  }
}