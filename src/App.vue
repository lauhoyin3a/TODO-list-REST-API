<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const name = ref('')

const input_name=ref('')
const input_content = ref('')
const input_due = ref('')
const input_status = ref(null)

const todos_asc = computed(() => todos.value.sort((a,b) =>{
	return a.createdAt - b.createdAt
}))

watch(name, (newVal) => {
	localStorage.setItem('name', newVal)
})

watch(todos, (newVal) => {
	localStorage.setItem('todos', JSON.stringify(newVal))
}, {
	deep: true
})

const addTodo = () => {
	if (input_content.value.trim() === '' || input_status.value === null || input_name.value === ''|| input_due==='') {
		
		return
	}

	todos.value.push({
		due:input_due.value,
		name: input_name.value,
		content: input_content.value,
		status: input_status.value,
		done: false,
		editable: false,
		createdAt: new Date().getTime()
	})
}

const removeTodo = (todo) => {
	todos.value = todos.value.filter((t) => t !== todo)
}

onMounted(() => {
	name.value = localStorage.getItem('name') || ''
	todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>

<template>
	<main class="app">
		
		<section class="greeting">
			<h2 class="title">
			TODO list Rest API application
			</h2>
		</section>

		<section class="create-todo">
			

			<form id="new-todo-form" @submit.prevent="addTodo">
				<h4>Task name</h4>
				<input 
					type="text" 
					name="name" 
					id="name" 
					placeholder="Name of Task"
					v-model="input_name" />
				<h4>Description</h4>	
				<input 
					type="text" 
					name="content" 
					id="content" 
					placeholder="Description of Task"
					v-model="input_content" />
				<h4>What is the Due date of the task?</h4>
				<input 
					type="text" 
					name="due" 
					id="due" 
					placeholder="Year/Month/Day"
					v-model="input_due" />	
				
				<h4>Status</h4>
				<div class="options">

					<label>
						<input 
							type="radio" 
							name="status" 
							id="status1" 
							value="TODO"
							v-model="input_status" />
						<span class="bubble TODO"></span>
						<div>TODO</div>
					</label>

					<label>
						<input 
							type="radio" 
							name="status" 
							id="status2" 
							value="DONE"
							v-model="input_status" />
						<span class="bubble DONE"></span>
						<div>Done</div>
					</label>

				</div>

				<input type="submit" value="Add todo" />
			</form>
		</section>

		<section class="todo-list">
			<h3>TODO LIST</h3>
			<div class="list" id="todo-list">

				<div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">
					<label>
						<input type="checkbox" v-model="todo.done" />
						<span :class="`bubble ${
							todo.status
						}`"></span>
					</label>
                    
					<div class="todo-content">
					    
					<input type="text" v-model="todo.name"/>
					
						<input type="text" v-model="todo.content" />
						<input type="text" v-model="todo.due"/>
						
					</div>

					<div class="actions">
						<button class="delete" @click="removeTodo(todo)">Delete</button>
					</div>
				</div>

			</div>
		</section>

	</main>
</template>
