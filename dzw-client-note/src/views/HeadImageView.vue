<template>
  <div id="setting">
    <form id="form" @submit.prevent="setImg" method="post" enctype="multipart/form-data">
      <div class="form-group" style="height: 80px">
        <div class="setting-font">设置头像：</div>
        <input
          class="form-control"
          style="margin-left: 10%"
          type="file"
          id="headimg"
          name="headimg"
          accept="image/*"
          @input="getFile"
        />
        <input type="submit" style="float: right" value="点击上传" />
      </div>
    </form>
  </div>
</template>


<script>
import { userApi } from '@/utils/api';
export default {
    data(){
        return{
            file:""
        }
    },
    methods:{
        getFile(e){
            this.file = e.target.files[0]
        },
        async setImg(){
            if(this.file){
                // 头像以formData数据提交
                let fileFormData = new FormData();
                fileFormData.append("headimg",this.file)
                const res =  await userApi.sethead(fileFormData).then(res => res.data)
                if(res.message === 'upload-success'){
                    this.$store.commit('user/setImgHead',res.imgUrl)
                    location.reload()
                }
            }else{
                alert('请选择头像!')
            }

        }
    }
};
</script>

<style>
</style>