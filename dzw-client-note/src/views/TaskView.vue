<template>

<!-- 任务页面开始 -->
			<div id="tasks" :style="menu===1?'':'display:none;'">
				<a href="javascript:void(0);" class="card add-card" :style="taskState===2?'display:none;':''" @click="addTask">
					<span class="glyphicon glyphicon-plus">添加</span>
				</a>
				<a href="javascript:void(0);" class="card add-card" :style="taskState===2?'':'display:none;'" >
					<span class="glyphicon glyphicon-pencil">正在修改</span>
				</a>
				<div class="card" :style="taskState===1||taskState===2?'':'display:none;'">
					<div class="card-header">
						<input type="text" v-model="newTask.title"class="form-control my-form-control" name="title" id="save_task_title" placeholder="请输入备忘录标题">
					</div>
					<div class="card-body">
						<textarea v-model="newTask.content" class="form-control my-form-control" rows="3" id="save_task_content" placeholder="请输入备忘录内容"></textarea>
						<div class="card-body-bottom">
							<input type="text" v-model="newTask.finishtime" class="form-control my-form-add-control" name="finishtime" id="save_task_finishtime" placeholder="完成时间">
							<select v-model="newTask.importance" class="form-control my-form-add-control" id="save_task_importance">
								<option disabled selected>优先级</option>
								<option value="3">优先级-紧迫</option>
								<option value="2">优先级-正常</option>
								<option value="1">优先级-可不做</option>
							</select>
							<div class="btn-group card-btn-group">
								<button class="btn card-btn btn-success" id="saveTask" @click="saveTask">
									<span class="glyphicon glyphicon-saved"></span>保存
								</button>
								<button class="btn card-btn btn-warning" @click="cancelSave">
									<span class="glyphicon glyphicon-minus"></span>取消
								</button>
							</div>
						</div>
					</div>
				</div>

				<li class="tasks-title">正在完成</li>
				<div class="card" v-for="task in sortTasks" v-if="task.state===0">
					<div class="card-header" :class="cardColor(task.importance)">
						{{task.title}}
						<a href="javascript:void(0);" class="card-done" @click="finishTask(task)">
							<span class="glyphicon glyphicon-ok"></span>完成
						</a>
					</div>
					<div class="card-body">
						{{task.content}}
						<div class="card-body-bottom">
							时间:{{task.finishtime}}
							<div class="btn-group card-btn-group">
								<button class='btn card-btn btn-info' @click="modifyTask(task)">
									<span class="glyphicon glyphicon-pencil"></span>修改
								</button>
								<button class="btn card-btn btn-danger" @click="deleteTask(task)">
									<span class="glyphicon glyphicon-trash"></span>删除
								</button>
							</div>
						</div>
					</div>
				</div>
				<li class="tasks-title">已完成</li>
				<div class="card" v-for="task in sortTasks" v-if="task.state===1">
					<div class="card-header" :class="cardColor(task.importance)" style="text-decoration:line-through">
						{{task.title}}
						<a href="javascript:void(0);" class="card-done" @click="recoverTask(task)">
							<span class="glyphicon glyphicon-repeat"></span>恢复
						</a>
					</div>
					<div class="card-body" style="text-decoration:line-through">
						{{task.content}}
						<div class="card-body-bottom" style="text-decoration:line-through">
							时间:{{task.finishtime}}
							<div class="btn-group card-btn-group">
								<button class="btn card-btn btn-danger" @click="deleteTask(task)">
									<span class="glyphicon glyphicon-trash"></span>删除
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 任务页面结束 -->

</template>

<script>
import noteItem from '@/components/note-item.vue'
export default {
    components: {
        noteItem
    }
}
</script>


<style scoped>


</style>