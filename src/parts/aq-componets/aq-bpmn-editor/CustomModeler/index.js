import CustomPalette from './modeler-01/CustomPalette'
import CustomRenderer from './modeler-01/CustomRenderer'
import CustomContextPad from './modeler-01/CustomContextPad'

export default {
    __init__: ['customPalette', 'customRenderer', 'customContextPad'],
    customPalette: ['type', CustomPalette], // 工具面板配置
    customRenderer: ['type', CustomRenderer], // 流程节点渲染显示配置
    customContextPad: ['type', CustomContextPad] // 上下文展开面板配置
}