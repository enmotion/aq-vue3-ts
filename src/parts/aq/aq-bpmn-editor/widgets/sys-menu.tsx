import { defineComponent, PropType } from 'vue';
import { MenuItem } from "types/project/bpmn-editor/controlDashBoradConfig";
import { ElButton, ElTooltip, ElPopover } from "element-plus"; // 引入 element 配置

export default defineComponent({
  components:{ ElButton, ElTooltip, ElPopover },
  props:{
    menu:{
      type:Array as PropType<MenuItem[]>,
      default:()=>[] as PropType<MenuItem[]>
    }
  },
  setup(props,{emit}:{emit:(event: string, ...args: unknown[]) => void}) {
    const MenuDatas:MenuItem[] = props.menu;
    function triggerClick(payload:string){
      emit('buttonClick',payload);
    }
    return () => (
      <div class='xrow'>
        {MenuDatas.map((item:MenuItem) => {
          return (
            <div key={item.label}>
              {
                !item.tooltips?
                  <ElPopover
                    placement="bottom"
                    width="50"
                    style="min-width:50px"
                    trigger="hover"
                    v-slots={{
                      default:() => (
                        <div class="xcol">
                            {(item.value as MenuItem[]).map(item=>{
                              return (
                                <span 
                                  key={item.label} 
                                  class="iconfont btn text-dark-12 text-xs p-10 rounded-md hover:text-s-10 hover:bg-s-1 transition-all duration-300"
                                  onClick={(e)=>{
                                    triggerClick(item.value as string);
                                  }}>
                                  <span v-show={item.icon !=''&& item.icon != undefined} class={item.icon+" iconfont text-md"}></span>
                                  <span v-show={item.icon =='' || item.icon == undefined}>{item.label}</span>
                                </span>
                              )
                            })}
                        </div>
                      ),
                      reference:()=> (
                        <ElButton
                          size="small"
                          class="p-5 text-xs border border-dar-2 bg-dark-1 text-dark-12 hover:bg-s-1 hover:text-s-10 transition-all duration-500"
                          style="margin:0px 1px 0px 1px">
                            <span v-show={item.icon !=''&& item.icon != undefined} class={item.icon+" iconfont text-md"}></span>
                            <span v-show={item.icon =='' || item.icon == undefined}>{item.label}</span>
                        </ElButton>
                      )
                    }}>
                  </ElPopover>:
                  <ElTooltip
                    effect="light"
                    trigger="hover" 
                    disabled={item.tooltips==''}
                    content={item.tooltips}>
                      <ElButton
                        size="small"
                        class="p-5 text-xs border border-dar-2 bg-dark-1 text-dark-12 hover:bg-s-1 hover:text-s-10 transition-all duration-500"
                        style="margin:0px 1px 0px 1px"
                        onClick={(e)=>{
                          triggerClick(item.value as string);
                        }}>
                          <span v-show={item.icon !=''&& item.icon != undefined} class={item.icon+" iconfont text-md"}></span>
                          <span v-show={item.icon =='' || item.icon == undefined}>{item.label}</span>
                      </ElButton>
                  </ElTooltip>
              }
            </div>
          )
        })}
      </div>
    )
  },
})
