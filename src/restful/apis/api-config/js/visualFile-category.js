const api = {
  // 新增或修改图片目录
  fileCategoryGetCategoryChildren: {
    tips: '新增或修改图片目录',
    url: '/visual-file/fileCategory/getCategoryChildren',
    headers: { 'Content-Type': 'application/json' },
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  }, // 删除图片目录
  fileDelete: {
    tips: '新增或修改图片目录', url: '/visual-file/file/delete/{id}', headers: { 'Content-Type': 'application/json' }, extra: {
      penetrate: false //模拟数据单点关闭
    }
  }, // 上传图片
  fileUpload: {
    tips: '上传图片',
    method: 'post',
    url: '/visual-file/file/upload',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    extra: {
      penetrate: false // 模拟数据单点关闭
    }
  }, // 用户上传
  uploadUser: {
    tips: '用户上传',
    method: 'post',
    url: '/blade-user/upload-user',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    extra: {
      penetrate: false // 模拟数据单点关闭
    }
  }, // 文件下载
  download: {
    tips: '文件下载', method: 'post', url: '/file/download', headers: { 'Content-Type': 'application/json' }, extra: {
      penetrate: false // 模拟数据单点关闭
    }
  }
}
export default api
