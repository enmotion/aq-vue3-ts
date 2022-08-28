import type { RawEditorOptions } from "tinymce/tinymce";
/* --------- plugins ------- */ 
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
// import 'tinymce/plugins/autoresize'; 
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';
import './plugin/lineheightselect';

const option:RawEditorOptions = {
  placeholder:"文本内容....",//默认提示文本
  language_url:'./tinymce.lib/language', // 语言包位置
  language:'zh-Hans', // 语言包内的语种 对应文件名称

  /* -- css -- */
  content_css:'./tinymce.lib/',// 内容CSS
  skin_url:'./tinymce.lib/skins/tinymce-5', //皮肤库位置
  theme_url:'./tinymce.lib/themes',// 主题库位置

  /* -- ui -- */
  menubar: true,//是否显示菜单  
  resize:true,// 是否开启位置拖拽变更
  statusbar: true,//是否显示底部状态条
  branding: false,//隐藏tinyMce的brand标示

  /* -- past -- */
  paste_as_text: false,// 是否仅粘贴内容，粘贴时去除样式
  paste_data_images: true, // 允许粘贴base64文件
  paste_remove_styles_if_webkit: false, //是否去除webkit标准样式

  /* -- upload -- */
  automatic_uploads: false, // 是否 启用自定义上传方法 否则会开启默认上传方法

  images_upload_url: '/demo/upimg.php', // 指定上传图片的后端处理程序的URL。
  images_upload_base_path: '/demo', // 给返回的相对路径指定它所相对的基本路径。
  images_upload_credentials:false, // 对images_upload_url中指定的地址调用时是否传递cookie等跨域的凭据。值为布尔值，默认false。
  images_reuse_filename: true, // ??
  // convert_urls:false,
  relative_urls : false, // 仅对相对链接修改基链
  // remove_script_host : true,
  document_base_url :'', // 文件基链接，上传图片等文件操作时，上传后返回的线上地址，可在显示时添加该前置地址; 
  images_upload_handler:function (blobInfo, progress):Promise<string>{
    console.log('sssss')
    return new Promise((resolve,reject)=>{
      resolve('ssss')
    });
  },

  /* -- menu and toolbar -- */
  menu:{
      file:{title: 'File', items: 'newdocument preview print'},
      edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
      insert: {title: 'Insert', items: 'link image media | hr | codeformat | charmap'},
      view: {title: 'View', items: 'preview | fullscreen'},
      format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
      table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
      tools: {title: 'Tools', items: 'spellchecker code'}
  } as Record<string, {
      title: string;
      items: string;
  }>,
  line_height_formats: '1 1.2 1.4 1.6 1.8 2 3 4 5 6', // 行高设置配置
  plugins:'fullscreen lists image media table code link wordcount preview insertdatetime codesample',
  toolbar:'fullscreen | code | bold italic underline strikethrough | fontsize | lineheight | bullist numlist | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent blockquote | link unlink hr image media insertdatetime codesample | removeformat | fimg | cleanstyle',
}
export default option