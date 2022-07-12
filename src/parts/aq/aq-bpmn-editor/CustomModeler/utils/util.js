import startPng from '@src/assets/img/start.png'
import rulesPng from '@src/assets/img/rules.png'
const customElements = ['bpmn:Task', 'bpmn:StartEvent'] // 自定义元素的类型
const customConfig = { // 自定义元素的配置
    'bpmn:Task': {
        'url': '',
        // 'url': require('../../assets/rules.png'),
        // 'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png',
        'attr': { x: 0, y: 0, width: 200, height: 200 }
        
    },
    'bpmn:StartEvent': {
        // 'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/start.png',
        'url':'',
        'attr': { x: 0, y: 0, width: 40, height: 40 }
    }
}
const hasLabelElements = ['bpmn:StartEvent', 'bpmn:EndEvent'] // 一开始就有label标签的元素类型

export { customElements, customConfig, hasLabelElements }