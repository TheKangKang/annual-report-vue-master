import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const createRouter = () => new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/view/home/new/index')
        },
        {
            path: '/girl/class/first',
            name: 'girlClassFirst',
            component: () => import('@/view/class/girl/index'),
            hidden: true
        },
        {
            path: '/girl/class/second',
            name: 'girlClassSecond',
            component: () => import('@/view/class/girl/second'),
            hidden: true
        },
        {
            path: '/girl/canteen/first',
            name: 'girlCanteenFirst',
            component: () => import('@/view/canteen/girl/index')
        },
        {
            path:'/girl/canteen/second',
            name:'girlCanteenSecond',
            component:()=>import('@/view/canteen/girl/second')
        },
        {
            path:'/girl/library/first',
            name:'girlLibraryFirst',
            component:()=>import('@/view/library/girl/index')
        },
        {
            path:'/girl/library/second',
            name:'girlLibrarySecond',
            component:()=>import('@/view/library/girl/second')
        },
        {
            path:'/girl/weschool/first',
            name:'girlWeschool/First',
            component:()=>import('@/view/weschool/girl/index')
        },
        {
            path:'/girl/weschool/second',
            name:'girlWeschoolSecond',
            component:()=>import('@/view/weschool/girl/second')
        },
        {
            path: '/girl/sports',
            name: 'girlSports',
            component: () => import('@/view/sports/girl/index')
        },
        {
            path: '/girl/figure',
            name: 'girlFigure',
            component: () => import('@/view/figure/girl/index')
        },
        {
            path: '/girl/figure1',
            name: 'girlFigure1',
            component: () => import('@/view/figure/girl/figure1')
        },
        {
            path: '/girl/figure2',
            name: 'girlFigure2',
            component: () => import('@/view/figure/girl/figure2')
        },
        {
            path: '/girl/figure3',
            name: 'girlFigure3',
            component: () => import('@/view/figure/girl/figure3')
        },
        {
            path: '/girl/figure4',
            name: 'girlFigure4',
            component: () => import('@/view/figure/girl/figure4')
        },
        {
            path: '/girl/figure5',
            name: 'girlFigure5',
            component: () => import('@/view/figure/girl/figure5')
        },

        //boy
        {
            path: '/boy/class/first',
            name: 'classFirst',
            component: () => import('@/view/class/boy/index'),
            hidden: true
        },
        {
            path: '/boy/class/second',
            name: 'classSecond',
            component: () => import('@/view/class/boy/second'),
            hidden: true
        },
        {
            path: '/boy/canteen/first',
            name: 'canteenFirst',
            component: () => import('@/view/canteen/boy/index')
        },
        {
            path:'/boy/canteen/second',
            name:'boyCanteenSecond',
            component:()=>import('@/view/canteen/boy/second')
        },
        {
            path:'/boy/library/first',
            name:'boyLibraryFirst',
            component:()=>import('@/view/library/boy/index')
        },
        {
            path:'/boy/library/second',
            name:'boyLibrarySecond',
            component:()=>import('@/view/library/boy/second')
        },
        {
            path:'/boy/weschool/first',
            name:'boyWeschool/First',
            component:()=>import('@/view/weschool/boy/index')
        },
        {
            path:'/boy/weschool/second',
            name:'boyWeschoolSecond',
            component:()=>import('@/view/weschool/boy/second')
        },
        {
            path: '/boy/sports',
            name: 'boySports',
            component: () => import('@/view/sports/boy/index')
        },
        {
            path: '/boy/figure',
            name: 'boyFigure',
            component: () => import('@/view/figure/boy/index')
        },
        {
            path: '/boy/figure1',
            name: 'boyFigure1',
            component: () => import('@/view/figure/boy/figure1')
        },
        {
            path: '/boy/figure2',
            name: 'boyFigure2',
            component: () => import('@/view/figure/boy/figure2')
        },
        {
            path: '/boy/figure3',
            name: 'boyFigure3',
            component: () => import('@/view/figure/boy/figure3')
        },
        {
            path: '/boy/figure4',
            name: 'boyFigure4',
            component: () => import('@/view/figure/boy/figure4')
        },
        {
            path: '/boy/figure5',
            name: 'boyFigure5',
            component: () => import('@/view/figure/boy/figure5')
        },
{
            path:'/end',
            name:'end',
            component:()=>import('@/view/end/index')
        },{
            path: '/noData/middle',
            name: 'noDataMiddle',
            component: () => import('@/view/noData/middle')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/view/login')
        },
        {
            path: '/cas/login',
            name: 'CasLogin',
            component: () => import('@/view/login/CasLogin'),
            hidden: true
        },

        {
            path: '/login/token',
            name: 'LoginByToken',
            component: () => import('@/view/login/LoginByToken'),
            hidden: true
        },
    ]
})

const router = createRouter()

export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
