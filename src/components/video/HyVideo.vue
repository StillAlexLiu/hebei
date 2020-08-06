<template>
    <!-- <div class='HyVideo full'> -->
        <div class="video-box" id="yst-video-box"></div>
    <!-- </div> -->
</template>

<script type="text/javascript" charset="utf-8">
import videoJS from './getVideo.js'
export default {
    data() {
        return {

        };
    },
    created() {
    },
    mounted() {
        window.onload = function(){
            videoJS.id("yst-video-box")
				.config({
					api: 'http://211.90.38.74:7006', //API接口地址
					debug: true, //是否启用本地调试
					logs: false, //是否启用前台日志调试(手机)
					alert: true, //是否弹出消息窗口
					timeout: 600, //连续播放时间限制(秒),0表示不限制
					heartbeat: 300, //心跳连接服务器间隔时间(秒) 
					login: true, //是否允许用户登录,显示登录窗口
					// 播放列表
					controller: true, //是否开启控制按钮(云台控制,分辨率,高/宽比)
					list: true, //是否显示播放列表
					filter: false, //是否过滤不在线的设备
					jsPath: 'js/' //项目js文件夹路径
				})
				.getVideo({
					user: 'zlppxfz', //无账号时需登录
					password: 'hyjk123', //密码,无密码可忽略
					dev: '' //摄像头SN,传入单个则直接播放,不传或传多个(英文逗号分隔)则可能显示播放列表
				});
        }
    },
    methods: {

    }
};
</script>

<style scoped lang="less">
.HyVideo{
    width: 800px;
    height: 300px;
    .video-box {
        width: 100%;
        height: 100%;
    }
}
</style>
