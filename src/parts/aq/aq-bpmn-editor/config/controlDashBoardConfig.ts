
import { MenuItem } from 'types/project/bpmn-editor/controlDashBoradConfig'; // 引入流程菜单描述
export const elementsMenu:MenuItem[]=[
  {label:'打开',icon:'bpmn-icon-hand-tool',children:[
    {icon:'bpmn-icon-hand-tool',method:{name:'startTool',params:'handTool'},disabled:false},   
    {icon:'bpmn-icon-lasso-tool',method:{name:'startTool',params:'lassoTool'},disabled:false},
    {icon:'bpmn-icon-connection-multi',method:{name:'startTool',params:'connectTool'},disabled:false},
    // {icon:'bpmn-icon-space-tool',method:{name:'startTool',params:'connectTool'},disabled:false},
    {icon:'bpmn-icon-start-event-none',method:{name:'processCreateElement',params:{type:'StartEvent'}},disabled:false},
    {icon:'bpmn-icon-intermediate-event-none',method:{name:'processCreateElement',params:{type:'IntermediateThrowEvent'}},disabled:false},
    {icon:'bpmn-icon-end-event-none',method:{name:'processCreateElement',params:{type:'EndEvent'}},disabled:false},
    {icon:'bpmn-icon-gateway-none',method:{name:'processCreateElement',params:{type:'ExclusiveGateway'}},disabled:false},
    {icon:'bpmn-icon-task',method:{name:'processCreateElement',params:{type:'Task'}},disabled:false},
    {icon:'bpmn-icon-subprocess-expanded',method:{name:'processCreateElement',params:{type:'SubProcess'}},disabled:false},
    {icon:'bpmn-icon-data-object',method:{name:'processCreateElement',params:{type:'DataObjectReference'}},disabled:false},
    {icon:'bpmn-icon-data-store',method:{name:'processCreateElement',params:{type:'DataStoreReference'}},disabled:false},
    {icon:'bpmn-icon-participant',method:{name:'processCreateElement',params:{type:'Participant'}},disabled:false},
    {icon:'bpmn-icon-group',method:{name:'processCreateElement',params:{type:'Group'}},disabled:false},
  ],disabled:false},
];
export const sysMenus:MenuItem[] = [
  {label:'打开',tips:'打开本地流程文件',icon:'icon-open',method:{name:'open'},disabled:false},
  {label:'下载',icon:'icon-download',children:[
    {label:'下载XML',method:{name:'downloadProcess',params:{type:'xml'}},disabled:false},
    {label:'下载SVG',method:{name:'downloadProcess',params:{type:'svg'}},disabled:false},
    {label:'下载Bpmn',method:{name:'downloadProcess',params:{type:'bpmn'}},disabled:false},
  ],disabled:false},
  {label:'预览',icon:'icon-preview',children:[
    {label:'预览xml',method:{name:'previewProcess',params:'xml'},disabled:false},
    {label:'预览JSON',method:{name:'previewProcess',params:'json'},disabled:false},
  ],disabled:false},
  {label:'模拟',tips:'模拟流程',icon:'icon-sumulate',method:{name:'processSimulation'},disabled:false},
];
export const alignMenu:MenuItem[] = [
  {icon:'icon-align-t',children:[
    {icon:'icon-align-l',method:{name:'elementsAlign',params:'left'},disabled:false},
    {icon:'icon-align-r',method:{name:'elementsAlign',params:'right'},disabled:false},
    {icon:'icon-align-t',method:{name:'elementsAlign',params:'top'},disabled:false},
    {icon:'icon-align-b',method:{name:'elementsAlign',params:'bottom'},disabled:false},
    {icon:'icon-align-h-c',method:{name:'elementsAlign',params:'middle'},disabled:false},
    {icon:'icon-align-v-c',method:{name:'elementsAlign',params:'center'},disabled:false},
  ],disabled:false},
];
export const zoomMenu:MenuItem[] = [
  {tips:'放大',icon:'icon-zoomin',method:{name:'processZoom',params:0.1},disabled:false},
  {tips:'缩小',icon:'icon-zoomout',method:{name:'processZoom',params:-0.1},disabled:false},
];
export const historyMenu:MenuItem[] = [
  {tips:'后退',icon:'icon-arrowL',method:{name:'processEditJump',params:'undo'},disabled:true},
  {tips:'前进',icon:'icon-arrowR',method:{name:'processEditJump',params:'redo'},disabled:true},
  {tips:'重绘',icon:'icon-refresh',method:{name:'processRestart'},disabled:false},
];