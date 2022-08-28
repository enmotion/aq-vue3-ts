/*
 图文等宽 自定义插件 设置
*/
import { Editor } from "tinymce/tinymce";
function useFullWidth(editor:Editor):void{
  editor.ui.registry.addButton('fimg', {
    text: '|100%|',
    tooltip:"图屏等宽",
    onAction: function () {
      var el=editor.selection.getNode();
      console.log(el,2222)
      var allowEleTags=['IMG'];
      if(allowEleTags.indexOf(el.tagName)>=0){
        editor.dom.setStyles(editor.selection.getNode(), {
          'width':'100%',
          'height':'auto',
          'margin':'0px',
          'display':'block'
        });
      }
    }
  });
}
export default useFullWidth