import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'demo',
      component: (resolve) => require(['../view/demo'], resolve)
    }, {
      path: '/index',
      name: 'index',
      component: (resolve) => require(['../view/index'], resolve)
    }, {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['../view/login'], resolve)
    }, {
      path: '/layout',
      name: 'layout',
      component: (resolve) => require(['../view/study-elementui/01-layout'], resolve)
    }, {
      path: '/container',
      name: 'container',
      component: (resolve) => require(['../view/study-elementui/02-container'], resolve)
    }, {
      path: '/radio',
      name: 'radio',
      component: (resolve) => require(['../view/study-elementui/03-form-radio'], resolve)
    }, {
      path: '/checkbox',
      name: 'checkbox',
      component: (resolve) => require(['../view/study-elementui/04-form-checkbox'], resolve)
    }, {
      path: '/input',
      name: 'input',
      component: (resolve) => require(['../view/study-elementui/05-form-input'], resolve)
    }, {
      path: '/select',
      name: 'select',
      component: (resolve) => require(['../view/study-elementui/06-form-select'], resolve)
    }, {
      path: '/cascader',
      name: 'cascader',
      component: (resolve) => require(['../view/study-elementui/07-form-cascader'], resolve)
    }, {
      path: '/switch',
      name: 'switch',
      component: (resolve) => require(['../view/study-elementui/08-form-switch'], resolve)
    }, {
      path: '/dataAndTime',
      name: 'dataAndTime',
      component: (resolve) => require(['../view/study-elementui/09-form-dataAndTime'], resolve)
    }, {
      path: '/dateTimePicker',
      name: 'dateTimePicker',
      component: (resolve) => require(['../view/study-elementui/10-form-dateTimePicker'], resolve)
    }, {
      path: '/upload',
      name: 'upload',
      component: (resolve) => require(['../view/study-elementui/11-form-upload'], resolve)
    }, {
      path: '/rate',
      name: 'rate',
      component: (resolve) => require(['../view/study-elementui/12-form-rate'], resolve)
    }, {
      path: '/colorPicker',
      name: 'colorPicker',
      component: (resolve) => require(['../view/study-elementui/13-form-colorPicker'], resolve)
    }, {
      path: '/transfer',
      name: 'transfer',
      component: (resolve) => require(['../view/study-elementui/14-form-transfer'], resolve)
    }, {
      path: '/form',
      name: 'form',
      component: (resolve) => require(['../view/study-elementui/15-form-form'], resolve)
    }, {
      path: '/table',
      name: 'table',
      component: (resolve) => require(['../view/study-elementui/16-data-table'], resolve)
    }, {
      path: '/table1',
      name: 'table1',
      component: (resolve) => require(['../view/study-elementui/17-data-table1'], resolve)
    }, {
      path: '/tag',
      name: 'tag',
      component: (resolve) => require(['../view/study-elementui/18-data-tag'], resolve)
    }, {
      path: '/progress',
      name: 'progress',
      component: (resolve) => require(['../view/study-elementui/19-data-progress'], resolve)
    }, {
      path: '/tree',
      name: 'tree',
      component: (resolve) => require(['../view/study-elementui/20-data-tree'], resolve)
    }, {
      path: '/pagination',
      name: 'pagination',
      component: (resolve) => require(['../view/study-elementui/21-data-pagination'], resolve)
    }, {
      path: '/badge',
      name: 'badge',
      component: (resolve) => require(['../view/study-elementui/22-data-badge'], resolve)
    }, {
      path: '/avatar',
      name: 'avatar',
      component: (resolve) => require(['../view/study-elementui/23-data-avatar'], resolve)
    }, {
      path: '/alert',
      name: 'alert',
      component: (resolve) => require(['../view/study-elementui/24-notice-alert'], resolve)
    }, {
      path: '/loading',
      name: 'loading',
      component: (resolve) => require(['../view/study-elementui/24-notice-loading'], resolve)
    }, {
      path: '/message',
      name: 'message',
      component: (resolve) => require(['../view/study-elementui/25-notice-message'], resolve)
    }, {
      path: '/messageBox',
      name: 'messageBox',
      component: (resolve) => require(['../view/study-elementui/26-notice-messageBox'], resolve)
    }, {
      path: '/notification',
      name: 'notification',
      component: (resolve) => require(['../view/study-elementui/27-notice-notification'], resolve)
    }, {
      path: '/navMenu',
      name: 'navMenu',
      component: (resolve) => require(['../view/study-elementui/28-navigation-navMenu'], resolve)
    }, {
      path: '/tabs',
      name: 'tabs',
      component: (resolve) => require(['../view/study-elementui/29-navigation-tabs'], resolve)
    }, {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: (resolve) => require(['../view/study-elementui/30-navigation-breadcrumb'], resolve)
    }, {
      path: '/pageHeader',
      name: 'pageHeader',
      component: (resolve) => require(['../view/study-elementui/31-navigation-pageHeader'], resolve)
    }, {
      path: '/dropdown',
      name: 'dropdown',
      component: (resolve) => require(['../view/study-elementui/32-navigation-dropdown'], resolve)
    }, {
      path: '/steps',
      name: 'steps',
      component: (resolve) => require(['../view/study-elementui/33-navigation-steps'], resolve)
    }, {
      path: '/dialog',
      name: 'dialog',
      component: (resolve) => require(['../view/study-elementui/34-other-dialog'], resolve)
    }, {
      path: '/tooltip',
      name: 'tooltip',
      component: (resolve) => require(['../view/study-elementui/35-other-tooltip'], resolve)
    }, {
      path: '/popover',
      name: 'popover',
      component: (resolve) => require(['../view/study-elementui/36-other-popover'], resolve)
    }, {
      path: '/popconfirm',
      name: 'popconfirm',
      component: (resolve) => require(['../view/study-elementui/37-other-popconfirm'], resolve)
    }, {
      path: '/card',
      name: 'card',
      component: (resolve) => require(['../view/study-elementui/38-other-card'], resolve)
    }, {
      path: '/carousel',
      name: 'carousel',
      component: (resolve) => require(['../view/study-elementui/39-other-carousel'], resolve)
    }, {
      path: '/collapse',
      name: 'collapse',
      component: (resolve) => require(['../view/study-elementui/40-other-collapse'], resolve)
    }, {
      path: '/timeline',
      name: 'timeline',
      component: (resolve) => require(['../view/study-elementui/41-other-timeline'], resolve)
    }, {
      path: '/divider',
      name: 'divider',
      component: (resolve) => require(['../view/study-elementui/42-other-divider'], resolve)
    }, {
      path: '/calendar',
      name: 'calendar',
      component: (resolve) => require(['../view/study-elementui/43-other-calendar'], resolve)
    }, {
      path: '/image1',
      name: 'image1',
      component: (resolve) => require(['../view/study-elementui/44-other-image1'], resolve)
    }, {
      path: '/backtop',
      name: 'backtop',
      component: (resolve) => require(['../view/study-elementui/45-other-backtop'], resolve)
    }, {
      path: '/infiniteScroll',
      name: 'infiniteScroll',
      component: (resolve) => require(['../view/study-elementui/46-other-infiniteScroll'], resolve)
    }, {
      path: '/drawer',
      name: 'drawer',
      component: (resolve) => require(['../view/study-elementui/47-other-drawer'], resolve)
    }
  ]
})
