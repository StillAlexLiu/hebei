<template>
  <MliveHlsPlayer :user="user" :dev="dev"></MliveHlsPlayer>
</template>

<script>
import Hls from "hls.js";
import { getDevList, playRequest } from "@/api/mlive.js";
import md5 from "md5";
import MliveHlsPlayer from "@/components/hyVideo/";
export default {
  // 指定命名便于调试
  name: "MliveHlsPlayer",

  // 由父级传入相关数据
  props: {
    // 身份验证
    user: {
      type: Object,
      default: () => {
        return {
          user: "",
          password: ""
        };
      }
    },
    // 设备信息
    dev: {
      type: Object,
      default: () => {
        return {
          sn: "",
          hlsurl: "",
          imgsrc: ""
        };
      }
    },
    // 视频宽高比例控制,0表示不控制
    ratio: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      video: {
        // 视频属性
        sn: "", // 设备SN
        hlsurl: "", // hls播放地址
        imgsrc: "", // 缩略图地址
        // channelid: 1, // 设备通道ID
        // streamtype: 1, // 码流类型
        // 播放器
        uuid: "",
        player: null, // 播放器DOM元素
        plugin: null, // hls.js插件实例
        available: 0, // 视频资源是否可用
        state: null, // 播放状态
        // 播放控制
        reloadTimes: 0, // 重载次数
        timeout: 600, // 默认超时时间(秒)
        currentTime: 0, // 当前播放进度
        monitorInterval: 0, // 监控定时器
        heartbeatTimestamp: 0 // 下次心跳请求时间戳
      }
    };
  },

  // 定义计算属性
  // computed: {},

  methods: {
    // 播放
    play() {
      // 停止监控进程
      if (this.video.monitorInterval) clearTimeout(this.video.monitorInterval);
      // 销毁当前hls实例
      if (this.video.plugin) {
        this.video.plugin.destroy();
        this.video.plugin = null;
      }
      // 过滤无效请求
      if (!this.video.hlsurl || !this.video.player) {
        console.log(this.video.uuid, "无效的播放请求", this.video);
        return false;
      }
      // 初始化属性
      // 预览图
      if (this.video.imgsrc) this.video.player.poster = this.video.imgsrc;
      // 播放地址
      this.video.player.src = this.video.hlsurl;

      // 加载视频
      if (Hls.isSupported()) {
        // 使用hls.js插件播放
        console.log(this.video.uuid, "加载Hls插件v" + Hls.version);
        // hls.js > hlsDefaultConfig
        const config = {
          autoStartLoad: true
          // debug: true
        };
        // 实例hls插件
        this.video.plugin = new Hls(config);
        // 附加媒体元素
        // console.log(this.video.uuid, 'Hls插件绑定DOM', !!this.video.player)
        this.video.plugin.attachMedia(this.video.player);
        // 加载媒体资源
        // console.log(this.video.uuid, 'Hls插件载入资源', this.video.hlsurl)
        this.video.plugin.loadSource(this.video.hlsurl);

        // 监听播放状态 hls.js > HlsEvents {}
        // Hls插件绑定DOM: MEDIA_ATTACHING > MEDIA_ATTACHED || 解绑: MEDIA_DETACHING > MEDIA_DETACHED
        // this.video.plugin.on(Hls.Events.MEDIA_ATTACHED, (event, data) => {
        //   console.log('attachMedia() => MEDIA_ATTACHED')
        // })
        // 缓冲: BUFFER_RESET BUFFER_CODECS BUFFER_CREATED BUFFER_APPENDING BUFFER_APPENDED BUFFER_EOS BUFFER_FLUSHING BUFFER_FLUSHED
        // this.video.plugin.on(Hls.Events.BUFFER_FLUSHING, (event, data) => {
        //   console.log('BUFFER_FLUSHING')
        // })
        // Hls插件载入资源: MANIFEST_LOADING > MANIFEST_LOADED > MANIFEST_PARSED(解析)
        this.video.plugin.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
          this.video.state = "loadedSourceAndParsed";
          this.video.available = 1;
          console.log(this.video.uuid, `当前状态=${this.video.state}`);
        });
        // 清晰度选择: LEVEL_SWITCHING LEVEL_SWITCHED LEVEL_LOADING LEVEL_LOADED LEVEL_UPDATED LEVEL_PTS_UPDATED
        // this.video.plugin.on(Hls.Events.LEVEL_SWITCHING, (event, data) => {
        //   console.log('LEVEL_SWITCHING')
        // })
        // 音频加载: AUDIO_TRACKS_UPDATED AUDIO_TRACK_SWITCHING AUDIO_TRACK_SWITCHED AUDIO_TRACK_LOADING AUDIO_TRACK_LOADED
        // this.video.plugin.on(Hls.Events.AUDIO_TRACK_SWITCHING, (event, data) => {
        //   console.log('AUDIO_TRACK_SWITCHING')
        // })
        // 字幕加载: SUBTITLE_TRACKS_UPDATED SUBTITLE_TRACK_SWITCH SUBTITLE_TRACK_LOADING SUBTITLE_TRACK_LOADED SUBTITLE_FRAG_PROCESSED
        // this.video.plugin.on(Hls.Events.SUBTITLE_TRACK_LOADING, (event, data) => {
        //   console.log('SUBTITLE_TRACK_LOADING')
        // })
        // 播放进度 INIT_PTS_FOUND(第1个时间戳)
        // FRAG_LOADING FRAG_LOAD_PROGRESS FRAG_LOAD_EMERGENCY_ABORTED FRAG_LOADED FRAG_DECRYPTED FRAG_PARSING_INIT_SEGMENT FRAG_PARSING_USERDATA
        // FRAG_PARSING_METADATA FRAG_PARSING_DATA FRAG_PARSED FRAG_BUFFERED FRAG_CHANGED
        // this.video.plugin.on(Hls.Events.INIT_PTS_FOUND, (event, data) => {
        //   console.log('INIT_PTS_FOUND')
        // })
        // 帧: FPS_DROP FPS_DROP_LEVEL_CAPPING
        // this.video.plugin.on(Hls.Events.FPS_DROP, (event, data) => {
        //   console.log('INIT_PTS_FOUND')
        // })
        // 解密密钥: KEY_LOADING KEY_LOADED STREAM_STATE_TRANSITION LIVE_BACK_BUFFER_REACHED
        // this.video.plugin.on(Hls.Events.LIVE_BACK_BUFFER_REACHED, (event, data) => {})
        // ERROR DESTROYING
        this.video.plugin.on(Hls.Events.ERROR, (event, data) => {
          // console.log(data)
          this.video.state = data.type;
          this.video.available = 0;
          console.log(this.video.uuid, `当前状态=${this.video.state}`);
          // if (data.fatal) {}
          // data.type === 'networkError'
          // 网络错误 Hls.ErrorTypes.NETWORK_ERROR = 'networkError'
          // 媒体错误 Hls.ErrorTypes.MEDIA_ERROR = 'mediaError' (video/parsing/mediasource error)
          // 加密错误 Hls.ErrorTypes.KEY_SYSTEM_ERROR = 'keySystemError' (encrypted media extensions errors)
          // 标识错误 Hls.ErrorTypes.MUX_ERROR = 'muxError' (Identifier for a mux Error)
          // 其它错误 Hls.ErrorTypes.OTHER_ERROR = 'otherError'
        });
      } else if (
        this.video.player.canPlayType("application/vnd.apple.mpegurl")
      ) {
        // 原生video标签播放
        console.log(this.video.uuid, "加载原生Video播放器");
        // 加载视频
        this.video.player.load();
      } else {
        console.log(this.video.uuid, "当前不支持媒体Hls方式播放");
        return false;
      }

      // 启用监控进程
      this.video.monitorInterval = setTimeout(() => {
        this.monitor();
      }, 2000);

      // 监听播放器状态
      // 视频加载中
      // this.video.player.onloadstart = () => {
      //   this.video.state = 'onloadstart'
      // }
      // 视频的元数据/视频信息已加载(MANIFEST_PARSED)
      this.video.player.onloadedmetadata = () => {
        this.video.state = "onloadedmetadata";
        this.video.available = 1;
        // 某些情况下不会自动播放
        this.video.player.play();
        console.log(this.video.uuid, `当前状态=${this.video.state}`);
      };
      // 播放
      this.video.player.onplay = () => {
        if (this.video.available) this.video.state = "onplay";
        console.log(this.video.uuid, `当前状态=${this.video.state}`);
      };
      // 暂停
      this.video.player.onpause = () => {
        if (this.video.available) this.video.state = "onpause";
        console.log(this.video.uuid, `当前状态=${this.video.state}`);
      };
      // 视频等待中
      // this.video.player.onwaiting = () => {
      //   this.video.state = 'onwaiting'
      // }
      // 视频下载中
      this.video.player.onprogress = () => {
        // this.video.state = 'onprogress'
        this.video.available = 1;
        // console.log(this.video.uuid, `当前状态=${this.video.state}`)
      };
      // 发生错误
      this.video.player.onerror = () => {
        this.video.state = "onerror";
        this.video.available = 0;
        console.log(this.video.uuid, `当前状态=${this.video.state}`);
      };
      // 媒体数据被阻止加载,不支持解码,onerror=4
      this.video.player.onsuspend = () => {
        // this.video.state = 'onsuspend'
        this.video.available = 0;
        // console.log(this.video.uuid, `当前状态=${this.video.state}`)
      };
      // 播放结束
      this.video.player.onended = () => {
        this.video.state = "onended";
        this.video.available = 0;
        console.log(this.video.uuid, `当前状态=${this.video.state}`);
      };
    },

    // 结束播放
    stop() {
      console.log(this.video.uuid, "结束播放");
      // 停止监控进程
      if (this.video.monitorInterval) clearTimeout(this.video.monitorInterval);
      // 销毁hls.js插件
      if (this.video.plugin) {
        this.video.plugin.destroy();
        this.video.plugin = null;
      }
      // 重置播放信息
      this.video.state = "onended";
      this.video.available = 0;
      // 先暂停播放并清空播放地址,部分安卓手机不能直接销毁
      this.video.player.pause();
      this.video.player.src = "";
    },

    // 监控进程
    monitor() {
      let timer = 2000;
      let timestamp = Date.parse(new Date()) / 1000;
      // 停止监控进程
      if (this.video.monitorInterval) clearTimeout(this.video.monitorInterval);
      // 监控日志
      console.log(
        this.video.uuid,
        `当前时间=${timestamp}`,
        `播放状态=${this.video.state}`,
        `播放时间=${this.video.player.currentTime}`
      );
      if (
        this.video.timeout &&
        this.video.player.currentTime > this.video.timeout
      ) {
        // 播放超时
        console.log(
          this.video.uuid,
          `播放超时,已持续播放${this.video.player.currentTime}秒`
        );
        this.stop();
        return false;
      } else if (!this.video.available) {
        // 资源不可用时
        if (this.video.reloadTimes >= 5) {
          console.log(
            this.video.uuid,
            `加载失败,已重载${this.video.reloadTimes}次`
          );
          this.stop();
        } else {
          this.video.reloadTimes++;
          console.log(
            this.video.uuid,
            `媒体资源不可用,开始第${this.video.reloadTimes}次重载...`
          );
          this.play();
        }
        return false;
      } else if (this.video.state === "onpause") {
        timer = 10000;
      } else if (
        this.video.state === "onplay" &&
        this.video.currentTime === this.video.player.currentTime
      ) {
        // 播放进度停滞
        console.log(this.video.uuid, "播放进度停止,等待重载");
        this.video.available = 0;
        timer = 3000;
      } else {
        timer = 10000;
        // 重置重载次数
        this.video.reloadTimes = 0;
      }

      // 重置最后播放时间
      this.video.currentTime = this.video.player.currentTime;
      // 有设备序列号的开启心跳连接
      if (this.video.sn && timestamp > this.video.heartbeatTimestamp) {
        this.heartbeat();
      }
      // 下一轮监控
      this.video.monitorInterval = setTimeout(() => {
        this.monitor();
      }, timer);
    },

    // 监看请求-心跳连接
    heartbeat() {
      // 下次心跳连接时间,每5分钟1次
      this.video.heartbeatTimestamp = Date.parse(new Date()) / 1000 + 300;
      console.log(
        this.video.uuid,
        `发送心跳连接,下次心跳连接时间=${this.video.heartbeatTimestamp}`
      );

      // 请求及心跳,获取到播放地址
      const params = Object.assign({}, this.dev, this.user);
      console.log(params);
      playRequest(params)
        .then(res => {
          console.log(this.video.uuid, "监看请求回应", res);
          if (!res || res.result) {
            let msg = res.msg || "监看请求失败";
            console.log(this.video.uuid, msg);
            this.stop();
            return false;
          }
          Object.assign(this.video, res);
          // 仅在首次心跳时加载播放
          if (!this.video.state || this.video.player.src !== this.video.hlsurl)
            this.play();
        })
        .catch(error => {
          console.log(error);
          this.stop();
        });
    }
  },
  // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
  // beforeCreate() {
  //   console.log('beforeCreate')
  // },

  // 在实例创建完成后被立即调用,$el属性目前不可见
  created() {
    Object.assign(this.video, this.dev);
    this.video.uuid = this.video.sn
      ? md5(this.video.sn)
      : md5(this.video.hlsurl);
    console.log(this.video.uuid, "创建实例");
  },

  // 在挂载开始之前被调用
  // beforeMount() {
  //   console.log('beforeMount')
  // },

  // 挂载后执行
  mounted() {
    this.video.player = this.$refs[this.video.uuid];
    console.log(this.video.uuid, "挂载实例", this.video, this.user, this.dev);
    this.video.sn ? this.heartbeat() : this.play();
  },

  // 数据更新时调用
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  // 组件 DOM 已经更新
  updated() {
    console.log("updated");
  },
  // keep-alive 组件激活时调用
  activated() {
    // console.log('activated')
    this.play();
  },
  // keep-alive 组件停用时调用
  deactivated() {
    // console.log('deactivated')
    this.stop();
  },
  // 实例销毁后调用
  destroyed() {
    console.log("destroyed");
  },
  // 捕获一个来自子孙组件的错误时被调用
  // errorCaptured() {
  //   console.log('errorCaptured')
  // }
  // 实例销毁之前调用
  beforeDestroy() {
    // console.log('beforeDestroy')
    this.stop();
  }
};
</script>

<style lang="less">
.mlive-hls-player {
  width: 100%;
  height: 100%;
  background-color: #000;
  video {
    object-fit: fill;
    width: 100%;
    height: 100%;
    background: #000;
  }
  // video::-webkit-media-controls-fullscreen-button {}
  // video::-webkit-media-controls-play-button {}
  // 时间进度条
  video::-webkit-media-controls-timeline,
  // 观看的当前时间
  video::-webkit-media-controls-current-time-display,
  // 剩余时间
  video::-webkit-media-controls-time-remaining-display,
  video::-webkit-media-controls-mute-button,
  video::-webkit-media-controls-toggle-closed-captions-button,
  video::-webkit-media-controls-volume-slider {
    display: none;
  }
}
.mlive-hls-player-ratio {
  position: relative;
  padding-bottom: 61.8%;
  height: 0;
  video {
    position: absolute;
  }
}
</style>
