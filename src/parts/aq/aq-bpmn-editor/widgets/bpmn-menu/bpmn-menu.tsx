import { defineComponent, PropType } from 'vue';
import { MenuItem } from "types/project/bpmn-editor/controlDashBoradConfig";
import { ElButton, ElTooltip, ElPopover } from "element-plus"; // 引入 element 配置
import "./bpmn-menu.css";

export default defineComponent({
  components:{ ElButton, ElTooltip, ElPopover },
  props:{
    menu:{
      type:Array as PropType<MenuItem[]>,
      default:()=>[] as PropType<MenuItem[]>
    },

  },
  setup(props,{emit}:{emit:(event: string, ...args: unknown[]) => void}) {
    const MenuDatas:MenuItem[] = props.menu;
    function triggerClick(payload:{name:string,params?:any}|undefined){
      emit('buttonClick',payload);
    }
    return () => (
      <div class='xrow'>
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
                            {(item.children as MenuItem[]).map(item=>{
                              return (
                                <span 
                                  key={item.label} 
                                  class="iconfont btn px-10 py-5 mb-5 last:mb-0 text-dark-12 text-xs rounded-sm hover:text-s-10 hover:bg-s-1 transition-all duration-300"
                                  onClick={(e)=>{
                                    triggerClick(item.method);
                                  }}>
                                  <span v-show={item.icon !=''&& item.icon != undefined} class={item.icon+" text-sm iconfont text-md"}></span>
                                  <span v-show={item.icon =='' || item.icon == undefined}>{item.label}</span>
                                </span>
                              )
                            })}
                        </div>
                      ),
                      reference:()=> (
                        <div
                          class="flex items-center justify-center btn border border-dark-2 rounded-sm bg-dark-1 text-dark-18 hover:bg-s-1 hover:text-s-10 transition-all duration-500"
                          style="margin:0px 1px 0px 1px;width:25px;height:25px">
                            <span v-show={item.icon !=''&& item.icon != undefined} class={item.icon+" text-sm iconfont text-md"}></span>
                            <span v-show={item.icon =='' || item.icon == undefined}>{item.label}</span>
                        </div>
                      )
                    }}>
                  </ElPopover>:
                  <ElTooltip
                    effect="light"
                    trigger="hover" 
                    disabled={item.tips == '' || item.tips == undefined}
                    content={item.tips}>
                      <div
                        class="flex items-center justify-center btn border border-dark-2 rounded-sm bg-dark-1 text-dark-12 hover:bg-s-1 hover:text-s-10 transition-all duration-500"
                        style="margin:0px 1px 0px 1px;width:25px;height:25px"
                        onClick={(e)=>{
                          triggerClick(item.method);
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
