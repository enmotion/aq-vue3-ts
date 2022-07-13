
import { MenuItem } from 'types/project/bpmn-editor/controlDashBoradConfig'; // 引入流程菜单描述

const sysMenus:MenuItem[] = [
  {label:'打开',tooltips:'打开本地流程文件',icon:'icon-open',value:'open'},
  {label:'下载',icon:'icon-download',value:[
    {label:'下载XML',value:'downloadXml'},
    {label:'下载SVG',value:'downloadSvg'},
    {label:'下载Bpmn',value:'downloadBpmn'},
  ]},
  {label:'预览',icon:'icon-preview',value:[
    {label:'预览xml',value:'previewXML'},
    {label:'预览JSON',value:'previewJSON'},
  ]},
  {label:'模拟',tooltips:'模拟流程',icon:'icon-sumulate',value:'sumulate'},
];
const alignMenu:MenuItem[] = [
  {icon:'icon-align-t',value:[
    {tooltips:'靠左对齐',icon:'icon-align-l',value:'l'},
    {tooltips:'靠右对齐',icon:'icon-align-r',value:'r'},
    {tooltips:'靠上对齐',icon:'icon-align-t',value:'u'},
    {tooltips:'靠下对齐',icon:'icon-align-b',value:'d'},
    {tooltips:'水平居中',icon:'icon-align-h-c',value:'h'},
    {tooltips:'垂直居中',icon:'icon-align-v-c',value:'v'},
  ]},
  // {tooltips:'靠左对齐',icon:'icon-align-l',value:'l'},
  // {tooltips:'靠右对齐',icon:'icon-align-r',value:'r'},
  // {tooltips:'靠上对齐',icon:'icon-align-t',value:'u'},
  // {tooltips:'靠下对齐',icon:'icon-align-b',value:'d'},
  // {tooltips:'水平居中',icon:'icon-align-h-c',value:'h'},
  // {tooltips:'垂直居中',icon:'icon-align-v-c',value:'v'},
];
const zoomMenu:MenuItem[] = [
  {tooltips:'放大',icon:'icon-zoomin',value:'zoomin'},
  {tooltips:'缩小',icon:'icon-zoomout',value:'zoomout'},
];
const historyMenu:MenuItem[] = [
  {tooltips:'后退',icon:'icon-arrowL',value:'prev'},
  {tooltips:'前进',icon:'icon-arrowR',value:'next'},
  {tooltips:'重绘',icon:'icon-refresh',value:'reset'},
];
export default {
  sysMenus,
  alignMenu,
  zoomMenu,
  historyMenu
}