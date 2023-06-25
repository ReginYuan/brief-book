/**
 * 我们不想每次使用都要手动引入，我们可以将其封装成插件
 */
import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/notification/style/css'
import { message ,notification } from 'ant-design-vue';

export default defineNuxtPlugin(nuxtApp => {
    return {
        //自动提供辅助函数
        provide: {
            message: message,
            notification: notification
        }
    }
})