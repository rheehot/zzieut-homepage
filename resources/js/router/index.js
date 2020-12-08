import Vue from 'vue'
import Router from 'vue-router'

import { scrollBehavior } from './utils'
import routes from './routes'
import { auth, checkAppToken, dispatchAction } from './hooks'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    scrollBehavior,
    routes: [
        {
            path: '/bulletin',
            name: 'Read',
            component: Read
        }
    ]
})
router.beforeEach(dispatchAction)

export default router