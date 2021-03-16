<template>
    <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
</template>
<script>
// import ckeditor from '@/node_modules/ckeditor4/ckeditor.js';
// var CKEDITOR_BASEPATH = '@/node_modules/ckeditor4';
// window.CKEDITOR_BASEPATH = '@/node_modules/ckeditor4/ckeditor.js';
// CKEDITOR.replace('editor');
// CKEDITOR.replace( 'editor' );
import Vue from 'vue';
import CKEditor from 'ckeditor4-vue';
Vue.use( CKEditor );
export default {
   data() {
            return {
        editorData: '<p>Content of the editor.</p>',
        editorConfig: {
        language : 'en',
            uiColor : '#AADC6E',  
            autoGrow_minHeight : 200,
        autoGrow_maxHeight : 600,
        autoGrow_bottomSpace : 50,
        magicline_color : '#000', 
            }
        }
   },
}
//<script src="./node_modules/ckeditor/ckeditor.js"></script>
/*
<div id="editor">

</div>
*/
</script> 
