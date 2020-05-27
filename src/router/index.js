import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import CommandLeft from '../views/page/p0/CommandLeft'
import CommandRight from '../views/page/p0/CommandRight'
import EntityLeft from '../views/page/p1/EntityLeft'
import EntityRight from '../views/page/p1/EntityRight'
import SupervisionLeft from '../views/page/p2/SupervisionLeft'
import SupervisionRight from '../views/page/p2/SupervisionRight'
import ComplaintLeft from '../views/page/p5/ComplaintLeft'
import ComplaintRight from '../views/page/p5/ComplaintRight'
import AuditLeft from '../views/page/p6/AuditLeft'
import AuditRight from '../views/page/p6/AuditRight'
import AnalysisLeft from '../views/page/p7/AnalysisLeft'
import AnalysisCenter from '../views/page/p7/AnalysisCenter'
import AnalysisRight from '../views/page/p7/AnalysisRight'
// import EffectivenessLeft from '../views/page/p8/EffectivenessLeft'
// import EffectivenessRight from '../views/page/p8/EffectivenessRight'
import SociologyLeft from '../views/page/p9/SociologyLeft'
import SociologyCenter from '../views/page/p9/SociologyCenter'
import SociologyRight from '../views/page/p9/SociologyRight'
import WarningLeft from '../views/page/p4/WarningLeft'
import WarningRight from '../views/page/p4/WarningRight'
import MonitorLeft from '../views/page/p3/MonitorLeft'
import MonitorCenter from '../views/page/p3/MonitorCenter'
import MonitorRight from '../views/page/p3/MonitorRight'
import KeepOnRecordLeft from '../views/page/p10/KeepOnRecordLeft'
import KeepOnRecordRight from '../views/page/p10/KeepOnRecordRight'
// import headOfficeLeft from '../views/page/p11/headOfficeLeft'
// import headOfficeRight from '../views/page/p11/headOfficeRight'
import DispatchLeft from '../views/page/p0-1/DispatchLeft'
import DispatchCenter from '../views/page/p0-1/DispatchCenter'
import DispatchRight from '../views/page/p0-1/DispatchRight'

Vue.use(VueRouter)
/**
 *
 * index下面的路由name不可随意修改，会影响地图上方的tab切换显示名称，和地图左下方的“选择组”的内容，如果确定修改，要对应的修改src/data/mapTab.js里面的东西
 */
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/command',
    children: [
      {
        path: 'command',
        name: '综合指挥',
        components: {
          left: CommandLeft,
          right: CommandRight
        }
      },
      {
        path: 'entity',
        name: '主体服务',
        components: {
          left: EntityLeft,
          right: EntityRight
        }
      },
      {
        path: 'keepOnRecord',
        name: '备案许可',
        components: {
          left: KeepOnRecordLeft,
          right: KeepOnRecordRight
        }
      },
      {
        path: 'supervision',
        name: '综合监管',
        components: {
          left: SupervisionLeft,
          right: SupervisionRight
        }
      },
      {
        path: 'monitor',
        name: '远程监控',
        components: {
          left: MonitorLeft,
          center: MonitorCenter,
          right: MonitorRight
        }
      },
      {
        path: 'warning',
        name: '智能预警',
        components: {
          left: WarningLeft,
          right: WarningRight
        }
      },
      {
        path: 'complaint',
        name: '投诉举报',
        components: {
          left: ComplaintLeft,
          right: ComplaintRight
        }
      },
      {
        path: 'audit',
        name: '稽查办案',
        components: {
          left: AuditLeft,
          right: AuditRight
        }
      },
      {
        path: 'analysis',
        name: '专题报告',
        components: {
          left: AnalysisLeft,
          center: AnalysisCenter,
          right: AnalysisRight
        }
      },
      // {
      //   path: 'effectiveness',
      //   name: '效能评价',
      //   components: {
      //     left: EffectivenessLeft,
      //     right: EffectivenessRight
      //   }
      // },
      {
        path: 'sociology',
        name: '社会共治',
        components: {
          left: SociologyLeft,
          center: SociologyCenter,
          right: SociologyRight
        }
      },
      {
        path: 'dispatch',
        name: '',
        components: {
          left: DispatchLeft,
          center: DispatchCenter,
          right: DispatchRight
        }
      }]
  }
]

const router = new VueRouter({
  routes
})
console.log(router)
export default router
