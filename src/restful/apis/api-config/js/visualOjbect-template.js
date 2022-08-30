// 数据模型目录接口
const api = {
  // 大屏或报表目录管理
  visualTemplateList: {
    tips: '模板分页',
    url: '/visual-object/template/list',
    method: 'get'
  },
  visualTemplateDetail: {
    tips: '模板详情',
    url: '/visual-object/template/detail',
    method: 'get'
  },
  visualTemplateSaveOrUpdate: {
    tips: '模板新增',
    url: '/visual-object/template/saveOrUpdate',
    method: 'post'
  },
  visualTemplateRemove: {
    tips: '模板删除',
    url: '/visual-object/template/remove',
    method: 'post'
  },
  visualTemplateSaveConfig: {
    tips: '保存大屏幕模板配置',
    url: '/visual-object/template/saveConfig',
    method: 'post'
  },
  visualTemplatePutViewPicture: {
    tips: 'putViewPicture',
    url: '/visual-file/file/putViewPicture/{spaceHash}',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  },
  visualCategory2Template: {
    tips: '大屏保存为模板',
    url: '/visual-object/template/saveTemplate/{objectHash}',
    method: 'post'
  }
}
export default api
