import * as R from "ramda";
function pipe(pathPicker, keyPicker) {
  // pathPicker 路径查找正则, keyPicker 取键名的正则
  return async function (ctx, next) {
    ctx.axios.url = ctx.axios?.url.replace(pathPicker, function (str) {
      // 获取需要替换的地址段
      var key = str.match(keyPicker)[0]; // 过滤出键名
      var value = ctx.payload[key];
      // 如果组件的配置为清除匹配值，则需进行数据清洗;
      if(ctx.config?.removeMatchedPathValuesFromPayload) {
        delete ctx.payload[key];
      }
      return R.isNil(value) ? str : value // 如值不为空，则返回值
    });
    console.log(ctx,{ url: ctx.axios.url }, 'packDataToPath')
    await next()
  }
}
export default pipe;