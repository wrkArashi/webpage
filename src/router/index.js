import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout.vue'

Vue.use(Router)

let router = new Router({
	routes: [
		// {
		// 	path: '/Login',
		// 	alias: '/',
		// 	name: 'Login',
		// 	component: () => import('../views/Login.vue')
		// },
		{
			path: '/',
			name: 'Layout',
			component: Layout,
			children: [{
				path: 'index-old',
				// alias: '/',
				name: 'Index',
				component: () => import('../views/Index.vue'),
			}, {
				path: 'index',
				alias: '/',
				name: 'RheinIndex',
				component: () => import('../views/RheinIndex.vue'),
			}]
		}, {
			path: '/training/',
			name: 'Training',
			component: Layout,
			children: [{
				path: 'index',
				name: 'TrainingIndex',
				component: () => import('../views/training/index.vue'),
			}, {
				path: 'server',
				name: 'TrainingSever',
				component: () => import('../views/training/server.vue'),
			}]
		}
	]
})

export default router
