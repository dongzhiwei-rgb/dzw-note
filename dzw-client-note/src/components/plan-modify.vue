<template>
  <div class="modify">
    <a href="javascript:void(0);" class="card add-card">
      <span class="glyphicon glyphicon-pencil">
        <span v-show="aORm === 1">正在修改</span>
        <span v-show="aORm === 0">添加计划</span>
      </span>
    </a>
    <div class="card">
      <div class="card-header">
        <input
          type="text"
          v-model="newPlan.title"
          class="form-control my-form-control"
          name="title"
          id="save_plan_title"
          placeholder="请输入计划标题"
        />
      </div>
      <div class="card-body">
        <div class="card-body-bottom">
          开始时间:
          <input
            type="date"
            v-model="newPlan.starttime"
            class="form-control my-form-add-control"
            name="starttime"
            id="save_plan_starttime"
          />
          <br />
          结束时间:
          <input
            type="date"
            v-model="newPlan.finishtime"
            class="form-control my-form-add-control"
            name="finishtime"
            id="save_plan_finishtime"
          />
          <select
            v-model="newPlan.importance"
            class="form-control my-form-add-control"
            id="save_plan_importance"
          >
            <option disabled selected>优先级</option>
            <option value="3">优先级-紧迫</option>
            <option value="2">优先级-正常</option>
            <option value="1">优先级-可不做</option>
          </select>
          <div class="btn-group card-btn-group">
            <button class="btn card-btn btn-success" @click="savePlan">
              <span class="glyphicon glyphicon-saved"></span>保存
            </button>
            <button class="btn card-btn btn-warning" @click="cancelSave">
              <span class="glyphicon glyphicon-minus"></span>取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { planApi } from "@/utils/api";
import { planData } from "@/utils/getData";

export default {
  props: {
    //判断是修改还是添加 0 --> 添加，1 --> 修改
    aORm: {
      type: Number,
      default: 0,
    },
    // 需要修改的计划
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      defaultList: {
        title: '',
        starttime:'',
        finishtime:'',
        importance:0,
        state:0
      },

    };
  },
  computed: {
    // 初始化新计划内容
    newPlan: {
      get() {
        if (this.aORm === 1) {
          return this.item;
        } else {
          return this.defaultList;
        }
      },
      set(value) {
        console.log(value);
      },
    },
  },
  methods: {
    async savePlan() {
      //TODO保存
      let data;
      //添加
      if (this.aORm === 0) {
        console.log("添加");
        data = await planApi.addplan(this.newPlan).then((res) => res.data);
      }
      //修改
      if (this.aORm === 1) {
        console.log("修改");
        this.newPlan.id = this.item.id;
        data = await planApi
          .modifyplan(this.newPlan)
          .then((res) => res.data);
      }
      if (
        data.message === "modify-success" ||
        data.message === "save-success"
      ) {
        //TODO初始化 输入状态

        // 重新获取列表
        // 关闭面板
        this.cancelSave();
        planData.getPlans(this);
      } else {
        alert(data.message);
      }
    },
    cancelSave() {
      //TOD取消，关闭界面
      this.$emit("cancel");
    },
  },
};
</script>


<style scoped>
</style>