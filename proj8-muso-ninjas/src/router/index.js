import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import SignupView from '@/views/auth/SignupView.vue'
import CreatePlaylistView from '@/views/playlists/CreatePlaylistView.vue'
import { projectAuth } from '@/firebase/config'
import PlaylistDetailsView from '@/views/playlists/PlaylistDetailsView.vue'
import UserPlaylistsView from '@/views/playlists/UserPlaylistsView.vue'

// route guards
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if(!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView
  },
  {
    path: '/playlists/create',
    name: 'CreatePlaylist',
    component: CreatePlaylistView,
    beforeEnter: requireAuth
  },
  {
    path: '/playlists/:id',
    name: 'PlaylistDetails',
    component: PlaylistDetailsView,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/playlists/user',
    name: 'UserPlaylists',
    component: UserPlaylistsView,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
