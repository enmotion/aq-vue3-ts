const api = {
  // 新增或修改图片目录
  fileDownload: {
    tips: '文件下载',
    url: '/visual-file/file/download',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    method: 'get',
    responseType:'blob',
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  }, // 删除图片目录
  exportChartExcel: {
    tips: '导出图表数据',
    url: '/visual-file/export/chart/excel',
    headers: { 'Content-Type': 'application/json' },
    responseType:'blob',
    timeout: 180000,
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  }, // 删除图片目录
}
export default api
