import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{path: '/', name: 'demo', component: (resolve) => require(['../view/demo'], resolve)}, {
    path: '/index',
    name: 'index',
    component: (resolve) => require(['../view/index'], resolve)
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
  }

  ]
})
