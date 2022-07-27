import * as R from 'ramda';
import { defineComponent, PropType, toRefs, reactive, watch ,onUpdated } from 'vue';
import { MenuItem } from 'types/bpmn-editor/controlDashBoradConfig'; // 引入流程菜单描述
import { ElButton, ElTooltip, ElPopover } from "element-plus"; // 引入 element 配置
import "./bpmn-menu.css";

export default defineComponent({
  components:{ ElButton, ElTooltip, ElPopover },
  props:{
    menu:{
      type:[Array,Boolean]as PropType<MenuItem[]|Boolean>,
      default:()=>[] as PropType<MenuItem[]>
    },
  },
  setup(props,{emit}:{emit:(event: string, ...args: unknown[]) => void}) {
    let MenuDatas:MenuItem[] = reactive(props.menu.constructor == Array ? props.menu : [] as MenuItem[]);
    onUpdated(function(){
      console.log(props,'updated')
    })
    function triggerClick(payload:{event?:Event,name?:string,params?:any}){
      emit('buttonClick',payload);
    }
    return () => (
      <div class='xrow'>
        {/* <div class=" absolute z-10 left-0 top-0 text-left">{JSON.stringify(props.menu)}</div> */}
        {MenuDatas.map((item:MenuItem) => {
          return (
            <div key={item.label}>
              {
                item.children ?
                  <ElPopover
                    placement="bottom"
                    width="50"
                    style="min-width:50px"
                    trigger="hover"
                    popper-class='bpmn-menu-el-popover'
                    v-slots={{
                      default:() => (
                        <div class="xcol">
                            {(item.children as MenuItem[]).map(it=>{
                              return (
                                <span 
                                  key={it.label+'-'+it.icon}
                                  class={[item.disabled?'cursor-not-allowed':'btn hover:text-s-10 hover:bg-s-1 ',"px-10 py-5 mb-5 last:mb-0 text-dark-32 text-xs rounded-sm transition-all duration-300"]}
                                  onClick={(e)=>{
                                    let payload:{event?:Event,name?:string,params?:any} = R.mergeAll([{event:e},it.method||{}]);
                                    !it.disabled && triggerClick(payload);
                                  }}>
                                  <span v-show={it.icon !=''&& it.icon != undefined} class={it.icon+" text-sm iconfont text-md"}></span>
                                  <span v-show={it.icon =='' || it.icon == undefined}>{it.label}</span>
                                </span>
                              )
                            })}
                        </div>
                      ),
                      reference:()=> (
                        <div
                          class="flex items-center justify-center btn border border-dark-2 rounded-sm bg-dark-1 text-dark-32 hover:bg-s-1 hover:text-s-10 transition-all duration-500"
                          style="margin:0px 1px 0px 1px;width:25px;height:25px">
                            <span v-show={item.icon !=''&& item.icon != undefined} class={item.icon+" text-sm iconfont text-md"}></span>
                            <span v-show={item.icon =='' || item.icon == undefined}>{item.label}</span>
                        </div>
                      )
                    }}>
                    
                  </ElPopover>
                  :
                  <ElTooltip
                    effect="light"
                    trigger="hover" 
                    disabled={item.tips == '' || item.tips == undefined}
                    content={item.tips}>
                      <div
                        class={[item.disabled?'cursor-not-allowed text-dark-12':'btn text-dark-32 font-bold',"flex items-center justify-center border border-dark-2 rounded-sm bg-dark-1"]}
                        style="margin:0px 1px 0px 1px;width:25px;height:25px"
                        onClick={(e)=>{
                          let payload:{event?:Event,name?:string,params?:any} = R.mergeAll([{event:e},item.method||{}]);
                          !item.disabled && triggerClick(payload);
                        }}>
                          <span v-show={item.icon !=''&& item.icon != undefined} class={item.icon+" text-sm iconfont text-md"}></span>
                          <span v-show={item.icon =='' || item.icon == undefined}>{item.label}</span>
                      </div>
                  </ElTooltip>
              }
            </div>
          )
        })}
      </div>
    )
  },
})
