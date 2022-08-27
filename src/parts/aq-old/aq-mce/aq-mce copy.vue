<template>
	<div ref="container" class="mh100p xg1">
		<mce-editor v-if="ismounted" :init="init_" v-model="content" :disabled="disabled" class="mh200 w100p xg1"></mce-editor>
	</div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import mceEditor from '@tinymce/tinymce-vue';
import 'tinymce/plugins/image'
import 'tinymce/plugins/media'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/print'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/hr'
import {ax,apis} from '@/restful';
var R = require ("ramda");

require ("./static/plugins/lineheight");//引入杭高自定义插件

export default {
	props:{
        init:{//有关tinymce的配置信息
            type:Object,
            default:function(){
                return {}
            }
        },
        htmlContent:{
            type:String,
            default:"",
        },
        pastClean:{//粘贴时是否清楚格式
            type:Boolean,
            default:false,
        },
        allowBase64:{
            type:Boolean,
            default:true
        },
        updata:{//组装格式使用
            type:Object,
            default:function(){
                return{}
            }
        },
        disabled:{
            type:Boolean,
            default:false,
        },
        headers:{
            type:Object,
            default:function(){
                return{}
            }
        },
        languageUrl:{
            type:String,
            default:"/tinymce_static/language/zh_CN.js"
            //default:window.location.protocol+"//"+window.location.host+"/tinymce_static/language/zh_CN.js"
        },
        language:{
            type:String,
            default:'zh_CN'
        },
        skinUrl:{
            type:String,
            default:"/tinymce_static/skins/lightgray",
            // default:window.location.protocol+"//"+window.location.host+"/tinymce_static/skins/lightgray"
        },
        updateImgName:{//组装数据时，用于储存图片数据的属性名称
            type:String,
            required:true,
        },
        imagesUploadHandler:{
            type:Function,
        },
        baseUrl:{
            type:String,
            required:true
        },
        uploadApiUrl:{
            type:String,
            required:true,
        }
    },
	data:function(){
        var vm=this;
		return {
            ismounted:false,
			content:vm.htmlContent,
            init_: R.merge({
                //界面相关
                language_url: window.location.href.split("#")[0]+vm.languageUrl,//语言包位置
                language: vm.language,//语言包名称
                skin_url: window.location.href.split("#")[0]+vm.skinUrl,//皮肤库位置
                branding: false,//隐藏tinyMce的brand标示
                statusbar: true,//是否显示底部状态条
                //功能相关配置
                //插件
                plugins:'fullscreen hr print paste lists image media table textcolor code link colorpicker wordcount preview lineheight insertdatetime codesample',
                //菜单
                menubar: true,//是否显示菜单
                menu:{
                    file: {title: 'File', items: 'newdocument preview print'},
                    edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
                    insert: {title: 'Insert', items: 'link image media | hr | codeformat | charmap'},
                    view: {title: 'View', items: 'preview | fullscreen'},
                    format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
                    table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
                    tools: {title: 'Tools', items: 'spellchecker code'}
                },
                //工具条
                toolbar: 'code | bold italic underline strikethrough | fontsizeselect | lineheightselect | bullist numlist | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent blockquote | link unlink hr image media insertdatetime codesample | removeformat | fimg | cleanstyle',
                //工具条配置
                lineheight_formats: "14pt 16pt 18pt 20pt 22pt 24pt 26pt 36pt 40pt 60pt",
                fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 38pt 40pt',
                //自定义按钮
                setup: function (editor) {
                    editor.addButton('fimg', {
                        text: '|--|',
                        tooltip:"图屏等宽",
                        onclick: function () {
                            var el=tinymce.activeEditor.selection.getNode();
                            var allowEleTags=['IMG'];
                            if(allowEleTags.indexOf(el.tagName)>=0){
                                tinymce.activeEditor.dom.setStyles(tinymce.activeEditor.selection.getNode(), {
                                    'width':'100%',
                                    'height':'auto',
                                    'margin':'0px',
                                });
                            }
                        }
                    });
                },
                // 拷贝粘贴配置
                paste_as_text: vm.pastClean,//
                paste_data_images: vm.allowBase64,
                paste_remove_styles_if_webkit: vm.pastClean,

                //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler

                automatic_uploads: false,//关闭自动上传，启用自定义上传方法
                images_reuse_filename: true,

                // convert_urls:false,
                relative_urls : false,//仅对相对链接修改基链
                // remove_script_host : true,
                document_base_url : vm.baseUrl,//文件基链接，上传图片等文件操作时，上传后返回的线上地址，可在显示时添加该前置地址;

                images_upload_handler:vm.imagesUploadHandler || function (blobInfo, success, failure){
                    var xhr, formData,res;                   
                    xhr = new XMLHttpRequest();
                    xhr.withCredentials = false;                                     
                    xhr.open('POST', vm.baseUrl+vm.uploadApiUrl);
                    for(let i in vm.headers){
                        xhr.setRequestHeader(i, vm.headers[i]);
                    }  
                    xhr.onload = function() {
                        if (xhr.status != 200) {
                            failure('HTTP Error: ' + xhr.status);
                            return;
                        }
                        res = JSON.parse(xhr.responseText);
                        if (!res || res.err != 0) {
                            failure('Invalid JSON: ' + xhr.responseText);
                            return;
                        }   
                        success(res.data.src);
                    };

                    formData = new FormData();
                    formData.append(vm.updateImgName, blobInfo.blob());
                    for(let i in vm.updata){
                        formData.append(i, vm.updata[i]);
                    }
                    xhr.send(formData);
                }
            },vm.init),
		};
	},
	components:{
		mceEditor:mceEditor
	},
	mounted:function(){
        var vm = this;
        var height=vm.$refs.container.offsetHeight;
        
        vm.init_=R.merge(vm.init_,{
            min_height : 600,
            max_height: height,
        })
        vm.ismounted=true;
	},
	watch:{
		content:function(n,o){
            var vm = this;
            vm.$emit('input', n);
        }
	},
	methods:{
        base64to2:function (dataurl) {
            var arr = dataurl.split(',')
            var mime = arr[0].match(/:(.*?);/)[1]
            var bstr = atob(arr[1])
            var n = bstr.length
            var u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {type: mime});
        }
	}
}
</script>