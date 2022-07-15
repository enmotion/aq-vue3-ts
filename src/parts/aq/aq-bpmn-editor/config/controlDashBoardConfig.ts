
import { MenuItem } from 'types/project/bpmn-editor/controlDashBoradConfig'; // 引入流程菜单描述

const sysMenus:MenuItem[] = [
  {label:'打开',tips:'打开本地流程文件',icon:'icon-open',method:{name:'open'}},
  {label:'下载',icon:'icon-download',children:[
    {label:'下载XML',method:{name:'downloadProcess',params:'xml'}},
    {label:'下载SVG',method:{name:'downloadProcess',params:'svg'}},
    {label:'下载Bpmn',method:{name:'downloadProcess',params:'bpmn'}},
  ]},
  {label:'预览',icon:'icon-preview',children:[
    {label:'预览xml',method:{name:'preview',params:'xml'}},
    {label:'预览JSON',method:{name:'preview',params:'json'}},
  ]},
  {label:'模拟',tips:'模拟流程',icon:'icon-sumulate',method:{name:'processSimulation'}},
];
const alignMenu:MenuItem[] = [
  {icon:'icon-align-t',children:[
    {icon:'icon-align-l',method:{name:'elementsAlign',params:'left'}},
    {icon:'icon-align-r',method:{name:'elementsAlign',params:'right'}},
    {icon:'icon-align-t',method:{name:'elementsAlign',params:'top'}},
    {icon:'icon-align-b',method:{name:'elementsAlign',params:'bottom'}},
    {icon:'icon-align-h-c',method:{name:'elementsAlign',params:'middle'}},
    {icon:'icon-align-v-c',method:{name:'elementsAlign',params:'center'}},
  ]},
];
const zoomMenu:MenuItem[] = [
  {tips:'放大',icon:'icon-zoomin',method:{name:'processZoom',params:0.1}},
  {tips:'缩小',icon:'icon-zoomout',method:{name:'processZoom',params:-0.1}},
];
const historyMenu:MenuItem[] = [
  {tips:'后退',icon:'icon-arrowL',method:{name:'processEditJump',params:'undo'}},
  {tips:'前进',icon:'icon-arrowR',method:{name:'processEditJump',params:'redo'}},
  {tips:'重绘',icon:'icon-refresh',method:{name:'processRestart'}},
];
export default {
  sysMenus,
  alignMenu,
  zoomMenu,
  historyMenu
}