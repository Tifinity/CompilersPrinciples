import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PostPage from '@/components/PostPage'
import PostList from '@/components/PostList'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/',
			name: 'post-list',
			component: PostList
		},
		{
			path: '/signin',
			name: 'signin',
			component: Signin
		},
		{
			path: '/signup',
			name: 'signup',
			component: Signup
		},
		{
			path: '/post/:id',
			name: 'post-page',
			component: PostPage,
		}
  ]
})
