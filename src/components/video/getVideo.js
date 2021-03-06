"use strict";
function id(e) {
    return new HLS(e)
} (function() {
    var e = function(e) {
        this.CONFIG = {
            api: "//cdn88.cn/api/",
            multi: !1,
            debug: !1,
            logs: !1,
            alert: !0,
            timeout: 600,
            heartbeat: 300,
            login: !0,
            list: !0,
            filter: !0,
            colNum: 0,
            colWidth: 210,
            playinline: 1,
            player: "",
            controller: !1,
            ratio: 0,
            res: 1,
            buffer: 2,
            flsPort: 1671,
            jsPath: "js/"
        },
        this.DOM = {},
        this.DOM.element = document.getElementById(e),
        this.DOM.id = e,
        this.DOM.className = this.DOM.element.getAttribute("class"),
        this.DOM.title = document.title,
        this.DOM.login = {
            element: null,
            id: e + "-login",
            className: this.DOM.className + "-login"
        },
        this.DOM.logout = {
            element: null,
            id: e + "-logout",
            className: this.DOM.className + "-logout"
        },
        this.DOM.wrap = {
            element: null,
            id: e + "-wrap",
            className: this.DOM.className + "-wrap"
        },
        this.DOM.player = {
            element: null,
            id: e + "-player",
            className: this.DOM.className + "-player"
        },
        this.DOM.controller = {
            element: null,
            id: e + "-controller",
            className: this.DOM.className + "-controller"
        },
        this.DOM.list = {
            element: null,
            id: e + "-list",
            className: this.DOM.className + "-list"
        },
        this.DOM.logs = {
            element: null,
            id: e + "-logs",
            className: this.DOM.className + "-logs"
        },
        this.REQUEST = {
            token: "",
            req: {},
            form: {},
            url: {},
            storage: {},
            data: {},
            js: {},
            def: {
                ip: "",
                user: "",
                password: "",
                dev: null,
                stream_type: 1,
                channel_id: 1,
                remember: !1
            }
        },
        this.VIDEO = {
            player: "",
            plugin: null,
            isLoadPlugin: !1,
            wrap: null,
            colNum: 0,
            list: {},
            request: {
                sn: "",
                name: "",
                hlsurl: "",
                imgsrc: "",
                ip: "",
                flsPort: "",
                flsurl: ""
            },
            playing: {},
            beginTime: null,
            endTime: null,
            currentTime: null,
            lastTime: null,
            heartbeatInterval: null,
            reloadInterval: null,
            timeout: 0,
            state: null,
            control: 0,
            mouseEvent: {
                handler: null,
                times: 0,
                x: null,
                y: null,
                timeout: null
            }
        }
    };
    e.prototype.getVideo = function(e) {
        this.REQUEST.url = this.filter(xbear.urlParms()),
        this.REQUEST.storage = this.filter(this.CONFIG.login && sessionStorage.getItem(this.DOM.id + "-token") || localStorage.getItem(this.DOM.id + "-token") || ""),
        this.REQUEST.data = this.filter(xbear.data(this.DOM.element)),
        this.REQUEST.js = this.filter(e),
        this.REQUEST.req = this.filter(xbear.extend({},
        this.REQUEST.def, this.REQUEST.js, this.REQUEST.data, this.REQUEST.storage, this.REQUEST.url)),
        this.printf(this.REQUEST, 3, "REQUEST"),
        this.printf(this.VIDEO, 3, "VIDEO");
        var t = this.DOM.element.parentNode.clientHeight,
        n = this.DOM.element.parentNode.children.length;
        return this.printf(t, 1, "pHeight"),
        t > 50 ? this.DOM.element.style.overflow = "auto": this.CONFIG.ratio = this.CONFIG.ratio || .5625,
        n > 1 ? this.DOM.element.style.height = "auto": t > 50 && (this.DOM.element.style.minHeight = t + "px"),
        this.createDom(),
        this.login(),
        this
    },
    e.prototype.config = function(e) {
        return this.CONFIG = xbear.extend(this.CONFIG, e),
        this.printf(this.CONFIG, 3, "CONFIG"),
        this.printf(this.DOM, 1, "DOM"),
        this
    },
    e.prototype.filter = function(e) {
        if ("object" != typeof e) try {
            e = JSON.parse(e)
        } catch(t) {
            try {
                e = JSON.parse(xbear.base64.decode2(e))
            } catch(t) {
                e = {}
            }
        }
        if (e.q) {
            try {
                e.q = JSON.parse(e.q)
            } catch(t) {
                try {
                    e.q = JSON.parse(xbear.base64.decode2(e.q))
                } catch(t) {
                    e.q = {}
                }
            }
            e = xbear.extend({},
            e, e.q),
            delete e.q
        }
        return e
    },
    e.prototype.login = function() {
        this.printf(this.REQUEST.req, 3, "登录"),
        this.REQUEST.req.user ? (this.CONFIG.login && (this.DOM.login.element.style.display = "none"), this.loginRequest()) : (this.printf("账号为空", this.CONFIG.login ? 3 : 7), this.logout())
    },
    e.prototype.logout = function() {
        this.printf("注销", 3),
        this.DOM.wrap.element.style.display = "none",
        this.DOM.player.element.style.display = "none",
        this.DOM.controller.element.style.display = "none",
        this.CONFIG.list && (this.DOM.list.element.style.display = "none", this.DOM.list.element.innerHTML = ""),
        this.stopPlay(),
        this.VIDEO.list = {},
        this.VIDEO.request = {};
        try {
            sessionStorage.removeItem(this.DOM.id + "-token"),
            localStorage.removeItem(this.DOM.id + "-token")
        } catch(e) {}
        if (this.CONFIG.login) {
            this.DOM.logout.element.style.display = "none",
            this.DOM.login.element.style.display = "block";
            var e = this.DOM.element.clientHeight,
            t = this.DOM.login.element.clientHeight;
            if (e = e > 600 ? 600 : e, e > t) {
                var n = Math.ceil((e - t) / 2) + "px";
                this.DOM.login.element.style.marginTop = n
            }
        }
    },
    e.prototype.loginRequest = function() {
        var e = this.REQUEST.req;
        if (this.REQUEST.token = xbear.base64.encode2(JSON.stringify(e)), e.password = 32 == e.password.length ? e.password: xbear.md5(e.password), e.dev = this.explodeDev(e.dev) || null, this.printf(e, 3, "登录请求"), !e.user) return ! 1;
        var t = {};
        t.json = JSON.stringify({
            cmdId: 100,
            ip: e.ip,
            user: e.user,
            password: e.password,
            autostart: !!e.dev,
            dev: e.dev,
            filter: this.CONFIG.filter,
            stream_type: e.stream_type,
            channel_id: e.channel_id,
            order: e.order || ""
        }),
        this.printf(t, 3, "登录请求参数");
        var n = this;
        xbear.post(this.CONFIG.api, t,
        function(t) {
            try {
                t = JSON.parse(t)
            } catch(e) {}
            if (n.printf(t, 3, "登录请求返回"), 0 != t.result) {
                var s = MSG[t.result] || {
                    content: "登录失败",
                    type: 7
                };
                return n.printf(s.content, s.type),
                n.logout(),
                !1
            }
            if (n.printf("登录成功", 3), e.remember) {
                try {
                    localStorage.setItem(n.DOM.id + "-token", n.REQUEST.token)
                } catch(e) {}
                n.DOM.logout.element.style.display = "block"
            }
            if (n.CONFIG.login) try {
                sessionStorage.setItem(n.DOM.id + "-token", n.REQUEST.token)
            } catch(e) {}
            0 == t.devlist.length ? (n.printf("无设备在线", 7), n.logout()) : 1 != t.devlist.length && n.CONFIG.list ? (n.DOM.wrap.element.style.display = "none", n.VIDEO.list = t.devlist, n.createListDom(t.devlist)) : (n.DOM.wrap.element.style.display = "block", n.VIDEO.request = t.devlist[0], n.callPlayer())
        })
    },
    e.prototype.loginRequestMulti = function() {},
    e.prototype.playRequest = function() {
        this.printf("监看请求", 3),
        clearInterval(this.VIDEO.heartbeatInterval);
        var e = this.REQUEST.req;
        if (!e.user) return ! 1;
        var t = {};
        t.json = JSON.stringify({
            cmdId: 210,
            ip: e.ip,
            user: e.user,
            password: e.password,
            devId: this.VIDEO.request.sn,
            streamtype: e.stream_type,
            channelid: e.channel_id
        }),
        this.printf(t, 3, "监看请求参数");
        var n = this;
        xbear.post(this.CONFIG.api, t,
        function(e) {
            try {
                e = JSON.parse(e)
            } catch(e) {}
            if (n.printf(e, 3, "监看请求返回"), 0 == e.result) n.VIDEO.heartbeatInterval = setInterval(function() {
                n.printf("监看请求-心跳连接", 3),
                n.playRequest()
            },
            1e3 * n.CONFIG.heartbeat),
            n.VIDEO.request = xbear.extend({},
            n.VIDEO.request, e),
            n.hlsPlayer();
            else {
                var t = MSG[e.result] || {
                    content: "请求失败",
                    type: 7
                };
                n.printf(t.content, t.type),
                n.stopPlay()
            }
        })
    },
    e.prototype.controlRequest = function(e, t) {
        var n = this;
        t = t || 1e3;
        var s = "up" === e && [1, 2, 50] || "down" === e && [1, 3, 50] || "left" === e && [1, 4, 50] || "right" === e && [1, 5, 50] || "zoomin" === e && [1, 8, 50] || "zoomout" === e && [1, 9, 50] || null,
        i = this.REQUEST.req;
        if (!this.VIDEO.request.sn || !i.user || !s || "onplay" !== this.VIDEO.state) return this.VIDEO.control || this.resetMouseEvent(),
        !1;
        this.VIDEO.control++,
        this.printf(e + "=" + t + "(" + this.VIDEO.control + ")", 3, "云台控制"),
        n.DOM.controller.element.firstChild.className = e;
        var l = {};
        l.json = JSON.stringify({
            cmdId: 300,
            ip: i.ip,
            user: i.user,
            password: i.password,
            devId: this.VIDEO.request.sn,
            channelId: s[0],
            ctrlType: s[1],
            Intensity: s[2]
        }),
        xbear.post(this.CONFIG.api, l,
        function(e) {
            try {
                e = JSON.parse(e)
            } catch(e) {}
            if (n.printf(e, 1, "控制返回"), e.result) {
                var t = MSG[e.result] || {
                    content: "控制失败",
                    type: 3
                };
                n.printf(t.content, t.type)
            }
        }),
        s = "up" === e && [1, 16, 50] || "down" === e && [1, 17, 50] || "left" === e && [1, 18, 50] || "right" === e && [1, 19, 50] || "zoomin" === e && [1, 24, 50] || "zoomout" === e && [1, 25, 50] || [],
        l.json = JSON.stringify({
            cmdId: 300,
            ip: i.ip,
            user: i.user,
            password: i.password,
            devId: this.VIDEO.request.sn,
            channelId: s[0],
            ctrlType: s[1],
            Intensity: s[2]
        }),
        setTimeout(function() {
            xbear.post(n.CONFIG.api, l,
            function(e) {}),
            n.VIDEO.control--,
            n.VIDEO.control || n.resetMouseEvent(),
            n.DOM.controller.element.firstChild.className = "onplay"
        },
        t)
    },
    e.prototype.callPlayer = function() {
        var e = this;
        this.printf("播放准备", 3),
        document.title = this.VIDEO.request.name + " - " + this.DOM.title,
        "hls" === this.VIDEO.player || this.VIDEO.isLoadPlugin ? this.playRequest() : "hls-plugin" === this.VIDEO.player ? (this.printf("加载HLS插件", 3), xbear.loadJs(this.CONFIG.jsPath + "hls.light.min.js",
        function() {
            e.VIDEO.isLoadPlugin = !0,
            e.playRequest()
        })) : this.flashPlayer()
    },
    e.prototype.hlsPlayer = function() {
        this.printf("调用HLS播放器", 3);
        var e = 2e3,
        t = this.DOM.player.element,
        n = this;
        return this.VIDEO.request.hlsurl ? this.VIDEO.request.hlsurl !== this.VIDEO.playing.hlsurl && (this.VIDEO.beginTime = null, this.VIDEO.endTime = null, this.VIDEO.timeout = 0, this.VIDEO.currentTime = null, this.VIDEO.lastTime = null, this.VIDEO.state = "onload", this.VIDEO.playing = this.VIDEO.request, this.movePlayer(), t.style.display = "block", t.src = this.VIDEO.request.hlsurl, t.poster = this.VIDEO.request.imgsrc, this.printf(t.src, 3, "加载视频"), t.load(), this.DOM.controller.element.firstChild.className = "onload", t.onloadstart = function() {
            if (!n.VIDEO.state) return ! 1;
            n.VIDEO.state = "onloadstart",
            n.printf(n.VIDEO.state, 3),
            n.reloadPlay(e),
            n.DOM.controller.element.firstChild.className = "onload"
        },
        t.onloadedmetadata = function() {
            n.VIDEO.state = "onloadedmetadata",
            n.printf(n.VIDEO.state, 3),
            n.VIDEO.beginTime = Date.parse(new Date),
            n.reloadPlay(5 * e),
            n.DOM.controller.element.style.display = "none",
            t.setAttribute("controls", "controls")
        },
        t.onplay = function() {
            t.readyState > 2 && (n.VIDEO.state = "onplay", n.printf(n.VIDEO.state, 3), n.reloadPlay(5 * e), n.DOM.controller.element.firstChild.className = "onplay", n.DOM.controller.element.style.display = "block", t.removeAttribute("controls"))
        },
        t.onpause = function() {
            t.readyState > 2 && (n.VIDEO.state = "onpause", n.printf(n.VIDEO.state, 3), n.reloadPlay(5 * e), n.DOM.controller.element.firstChild.className = "onpause", n.DOM.controller.element.style.display = "none", t.setAttribute("controls", "controls"))
        },
        t.onerror = function() {
            if (!n.VIDEO.state) return ! 1;
            n.VIDEO.state = "onerror",
            n.printf(n.VIDEO.state + ":" + t.error.code, 3),
            "hls-plugin" === n.VIDEO.player && 4 == t.error.code ? (clearInterval(n.VIDEO.reloadInterval), n.hlsPluginPlayer()) : n.reloadPlay(e)
        },
        t.onsuspend = function() {
            n.VIDEO.state = "onsuspend",
            n.printf(n.VIDEO.state, 3),
            n.DOM.controller.element.style.display = "none",
            t.setAttribute("controls", "controls")
        },
        void(t.onended = function() {
            n.VIDEO.state = "onended",
            n.printf(n.VIDEO.state, 3),
            clearInterval(n.VIDEO.reloadInterval)
        })) : (this.printf("无效的播放地址", 3), !1)
    },
    e.prototype.hlsPluginPlayer = function() {
        if (this.printf(this.VIDEO.isLoadPlugin, 3, "调用HLS插件"), !this.VIDEO.isLoadPlugin) return this.printf("HLS插件未加载", 7),
        !1;
        this.VIDEO.plugin = new Hls,
        this.VIDEO.plugin.loadSource(this.VIDEO.request.hlsurl),
        this.VIDEO.plugin.attachMedia(this.DOM.player.element)
    },
    e.prototype.flashPlayer = function() {
        this.printf("调用FLASH播放", 3);
        var e = this,
        t = 1e4,
        n = this.VIDEO.request.ip || this.REQUEST.req.ip || "v9.cdn88.cn",
        s = this.VIDEO.request.flsPort || this.CONFIG.flsPort || 1671,
        i = this.REQUEST.req.user,
        l = this.REQUEST.req.password,
        r = this.VIDEO.request.sn,
        o = this.CONFIG.res || 1,
        a = this.CONFIG.buffer || 2,
        u = this.VIDEO.request.flsurl = this.VIDEO.request.flsurl || n + ":" + s + "||" + i + "||" + r + "||" + o + "||" + l + "||" + a,
        c = this.CONFIG.jsPath + "player" + s + ".swf";
        if (this.printf(u, 3, "flsurl"), this.VIDEO.request.flsurl === this.VIDEO.playing.flsurl) return ! 1;
        var h = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" class="' + this.DOM.player.className + '" id="' + this.DOM.player.id + '" width="100%" height="100%"><param name="movie" value="' + c + '"><param name="quality" value="high"><param name="scale" value="noborder"><param name="bgcolor" value="#ffffff"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="FlashVars" value="param=' + u + '"><param name="wmode" value="opaque" /><embed wmode="opaque" src="' + c + '" quality="high" scale="noborder" bgcolor="#ffffff" width="100%" height="100%" allowFullScreen="true" allowScriptAccess="always" FlashVars="param=' + u + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>';
        this.DOM.element.appendChild(this.DOM.controller.element),
        this.DOM.wrap.element.innerHTML = h,
        this.DOM.player.element = document.getElementById(this.DOM.player.id),
        this.VIDEO.playing = this.VIDEO.request,
        this.VIDEO.state = "onload",
        this.DOM.controller.element.firstChild.className = "onload",
        this.movePlayer(),
        this.DOM.player.element.style.display = "block",
        e.DOM.controller.element.style.display = "none",
        setTimeout(function() {
            e.VIDEO.beginTime = Date.parse(new Date),
            e.VIDEO.endTime = e.VIDEO.beginTime,
            e.VIDEO.timeout = 0,
            e.VIDEO.state = "onplay",
            e.DOM.controller.element.firstChild.className = "onplay",
            e.DOM.controller.element.style.display = "block"
        },
        2e3 * a),
        this.reloadPlay(t)
    },
    e.prototype.choosePlayer = function(e) {
        if (void 0 !== e.canPlayType && e.canPlayType("application/vnd.apple.mpegurl")) return "hls";
        var t = "undefined" != typeof window && (window.MediaSource || window.WebKitMediaSource) || null,
        n = window.SourceBuffer || window.WebKitSourceBuffer,
        s = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
        i = !n || n.prototype && "function" == typeof n.prototype.appendBuffer && "function" == typeof n.prototype.remove;
        return ! s || !i ? "flash": "hls-plugin"
    },
    e.prototype.stopPlay = function() {
        this.printf("停止播放", 3);
        var e = this.DOM.player.element;
        if (e.style.display = "none", this.DOM.controller.element.style.display = "none", this.DOM.controller.element.firstChild.className = "onend", this.VIDEO.playing = {},
        this.VIDEO.state = null, "hls" === this.VIDEO.player || "hls-plugin" === this.VIDEO.player) {
            e.pause(),
            e.src = "",
            clearInterval(this.VIDEO.heartbeatInterval);
            try {
                this.VIDEO.plugin.destroy(),
                this.VIDEO.plugin = null
            } catch(e) {}
        } else this.DOM.wrap.element.appendChild(e),
        this.DOM.wrap.element.removeChild(e);
        clearInterval(this.VIDEO.reloadInterval)
    },
    e.prototype.reloadPlay = function(e) {
        var t = this,
        n = this.DOM.player.element;
        if (clearInterval(this.VIDEO.reloadInterval), !e || this.VIDEO.timeout || !this.VIDEO.state) return ! 1;
        this.VIDEO.reloadInterval = setInterval(function() {
            if ("hls" !== t.VIDEO.player && "hls-plugin" !== t.VIDEO.player || (t.VIDEO.currentTime = parseInt(n.currentTime), "onpause" !== t.VIDEO.state && n.readyState > 2 && n.play(), (!n.readyState || "onpause" !== t.VIDEO.state && t.VIDEO.lastTime === t.VIDEO.currentTime) && (t.printf(t.VIDEO.player + ":" + t.VIDEO.state + ",reloading...", 3), "hls-plugin" === t.VIDEO.player ? t.hlsPluginPlayer() : n.load()), t.VIDEO.lastTime = t.VIDEO.currentTime ? t.VIDEO.currentTime: null), t.CONFIG.timeout && t.VIDEO.beginTime) {
                var e = new Date;
                t.VIDEO.endTime = Date.parse(e),
                t.VIDEO.timeout = (t.VIDEO.endTime - t.VIDEO.beginTime) / 1e3,
                t.printf("播放持续时间:" + t.VIDEO.timeout, 3),
                t.VIDEO.timeout = t.VIDEO.timeout >= t.CONFIG.timeout ? t.VIDEO.timeout - t.CONFIG.timeout + 1 : 0
            }
            if (t.VIDEO.timeout) return t.printf("播放超时:" + e.toString(), 3),
            t.stopPlay(),
            !1
        },
        e)
    },
    e.prototype.createDom = function() {
        this.printf("创建DOM模型", 3);
        var e = this,
        t = this.REQUEST.req,
        n = "";
        if (this.CONFIG.login && !this.DOM.login.element) {
            n += '<form class="' + this.DOM.login.className + '" id="' + this.DOM.login.id + '">',
            n += '<div><label for="' + this.DOM.login.id + '-user">用户名：</label>',
            n += '<input type="text" id="' + this.DOM.login.id + '-user" placeholder="user" value="' + t.user + '"></div>',
            n += '<div><label for="' + this.DOM.login.id + '-password">密码：</label>',
            n += '<input type="password" id="' + this.DOM.login.id + '-password" placeholder="password" value="' + t.password + '"></div>';
            var s = t.remember ? ' checked="checked"': "";
            n += '<label class="checkbox"><input type="checkbox" id="' + this.DOM.login.id + '-remember"' + s + "> 记住密码</label>",
            n += '<button type="submit" class="' + this.DOM.className + '-submit">登录</button>',
            n += "</form>"
        }
        this.DOM.wrap.element || (n += '<div class="' + this.DOM.wrap.className + '" id="' + this.DOM.wrap.id + '">', n += '<video class="' + this.DOM.player.className + '" id="' + this.DOM.player.id + '" src="" controls autoplay webkit-playsinline playsinline x5-playsinline x-webkit-airplay="allow"></video>', n += '<div class="' + this.DOM.controller.className + '" id="' + this.DOM.controller.id + '">', n += "<div></div><iframe></iframe></div></div>"),
        this.CONFIG.list && !this.DOM.list.element && (n += '<ul class="' + this.DOM.list.className + '" id="' + this.DOM.list.id + '"></ul>'),
        this.CONFIG.login && !this.DOM.logout.element && (n += '<div class="' + this.DOM.logout.className + '"><button type="button" class="' + this.DOM.className + '-submit" id="' + this.DOM.logout.id + '">注销</button></div>'),
        this.CONFIG.logs && !this.DOM.logs.element && (n += '<textarea class="' + this.DOM.logs.className + '" id="' + this.DOM.logs.id + '"></textarea>'),
        this.DOM.element.innerHTML = n,
        this.CONFIG.login && (this.DOM.login.element = document.getElementById(this.DOM.login.id), this.DOM.logout.element = document.getElementById(this.DOM.logout.id), this.DOM.login.element.style.display = "none", this.DOM.logout.element.style.display = "none"),
        this.DOM.wrap.element = document.getElementById(this.DOM.wrap.id),
        this.DOM.wrap.element.style.display = "none",
        this.setRatio(this.DOM.wrap.element, this.CONFIG.ratio),
        this.DOM.player.element = document.getElementById(this.DOM.player.id),
        this.DOM.player.element && (this.DOM.player.element.style.display = "none"),
        this.DOM.controller.element = document.getElementById(this.DOM.controller.id),
        this.DOM.controller.element.style.display = "none",
        this.CONFIG.list && (this.DOM.list.element = document.getElementById(this.DOM.list.id), this.DOM.list.element.style.display = "none"),
        this.CONFIG.logs && (this.DOM.logs.element = document.getElementById(this.DOM.logs.id), this.DOM.element.appendChild(this.DOM.logs.element)),
        this.VIDEO.player = this.CONFIG.player || this.choosePlayer(this.DOM.player.element),
        e.CONFIG.login && (e.DOM.login.element.onsubmit = function() {
            try {
                event.preventDefault()
            } catch(e) {
                window.event.returnValue = !1
            }
            return t.user = e.REQUEST.form.user = xbear.trim(document.getElementById(e.DOM.login.id + "-user").value),
            t.password = e.REQUEST.form.password = document.getElementById(e.DOM.login.id + "-password").value,
            t.remember = e.REQUEST.form.remember = document.getElementById(e.DOM.login.id + "-remember").checked,
            t.user ? (e.DOM.login.element.style.display = "none", e.loginRequest()) : (e.printf("账号为空", 7), e.logout()),
            !1
        },
        e.DOM.logout.element.onclick = function() {
            e.logout()
        }),
        xbear.addEvent(e.DOM.controller.element, "mousedown",
        function() {
            if (e.VIDEO.mouseEvent.handler) return ! 1;
            var t = t || window.event;
            e.VIDEO.mouseEvent.x = t.clientX,
            e.VIDEO.mouseEvent.y = t.clientY
        }),
        xbear.addEvent(e.DOM.controller.element, "mouseup",
        function() {
            var t = t || window.event;
            return window.event ? t.cancelBubble = !0 : t.stopPropagation(),
            (!e.VIDEO.mouseEvent.handler || "mouseup" === e.VIDEO.mouseEvent.handler) && ("mouseup" === e.VIDEO.mouseEvent.handler ? (e.VIDEO.mouseEvent.times++, !1) : (e.VIDEO.mouseEvent.handler = "mouseup", e.VIDEO.mouseEvent.times++, void(e.VIDEO.mouseEvent.timeout = setTimeout(function() {
                if (e.VIDEO.mouseEvent.times > 1) {
                    var n = e.DOM.player.element.parentNode;
                    xbear.isFullscreen() ? xbear.exitFullscreen() : xbear.fullscreen(n),
                    e.resetMouseEvent()
                } else {
                    var s = 5,
                    i = 50;
                    if (e.VIDEO.mouseEvent.x -= t.clientX, e.VIDEO.mouseEvent.y -= t.clientY, Math.abs(e.VIDEO.mouseEvent.x) < i && Math.abs(e.VIDEO.mouseEvent.y) < i)"onplay" === e.VIDEO.state ? "flash" === e.VIDEO.player ? (e.VIDEO.state = "onpause", e.DOM.controller.element.firstChild.className = "onpause", e.DOM.player.element.style.display = "none") : e.DOM.player.element.pause() : "onpause" === e.VIDEO.state ? "flash" === e.VIDEO.player ? (e.VIDEO.state = "onplay", e.DOM.controller.element.firstChild.className = "onplay", e.DOM.player.element.style.display = "block") : e.DOM.player.element.play() : "onload" === e.VIDEO.state && "flash" !== e.VIDEO.player && e.DOM.player.element.load(),
                    e.resetMouseEvent();
                    else if (e.CONFIG.controller && "onplay" === e.VIDEO.state) {
                        var l = (e.VIDEO.mouseEvent.x >= i ? "left": Math.abs(e.VIDEO.mouseEvent.x) >= i && "right") || "",
                        r = l && Math.abs(e.VIDEO.mouseEvent.x) * s || 0;
                        r && e.controlRequest(l, r),
                        l = (e.VIDEO.mouseEvent.y >= i ? "up": Math.abs(e.VIDEO.mouseEvent.y) >= i && "down") || "",
                        l && (r ? setTimeout(function() {
                            e.controlRequest(l, Math.abs(e.VIDEO.mouseEvent.y) * s)
                        },
                        r - i) : e.controlRequest(l, Math.abs(e.VIDEO.mouseEvent.y) * s))
                    } else e.printf("不支持云台控制", 3),
                    e.resetMouseEvent()
                }
            },
            300))))
        }),
        e.CONFIG.controller && xbear.addEvent(e.DOM.controller.element, "mousewheel",
        function() {
            if ("onplay" !== e.VIDEO.state || e.VIDEO.mouseEvent.handler && "mousewheel" !== e.VIDEO.mouseEvent.handler) return ! 1;
            if ("mousewheel" === e.VIDEO.mouseEvent.handler) return e.VIDEO.mouseEvent.times++,
            !1;
            e.VIDEO.mouseEvent.handler = "mousewheel",
            e.VIDEO.mouseEvent.times++;
            var t = t || window.event;
            try {
                t.preventDefault()
            } catch(e) {
                window.event.returnValue = !1
            }
            var n = t.wheelDelta || t.detail;
            document.documentElement.style.overflow = "hidden",
            e.VIDEO.mouseEvent.timeout = setTimeout(function() {
                n > 0 ? e.controlRequest("zoomin", 50 * e.VIDEO.mouseEvent.times) : e.controlRequest("zoomout", 50 * e.VIDEO.mouseEvent.times)
            },
            300)
        })
    },
    e.prototype.resetMouseEvent = function() {
        this.printf("重置鼠标事件", 3),
        clearTimeout(this.VIDEO.mouseEvent.timeout),
        "mousewheel" === this.VIDEO.mouseEvent.handler && (document.documentElement.style.overflow = "auto"),
        this.VIDEO.mouseEvent = {
            handler: null,
            times: 0,
            x: null,
            y: null,
            timeout: null
        }
    },
    e.prototype.createListDom = function(e) {
        this.printf("创建播放列表", 3);
        var t = this;
        if (!this.CONFIG.list) return ! 1;
        for (var n = "",
        s = 0; s < e.length; s++) {
            var i = e[s].state;
            i = i ? "offline": "online",
            n += '<li class="' + this.DOM.list.className + '-item" data-id="' + s + '">',
            n += "<h3>" + e[s].name + "</h3>",
            n += '<div class="' + this.DOM.wrap.className + '" style="background-image:url(' + e[s].imgsrc + ')"><i class="' + i + '"></i>',
            n += "</div></li>"
        }
        this.DOM.list.element.innerHTML = n,
        this.DOM.list.element.style.display = "block",
        this.VIDEO.colNum = this.CONFIG.colNum || Math.floor(this.DOM.element.clientWidth / this.CONFIG.colWidth) || 1,
        this.setColumn(this.DOM.list.element, this.VIDEO.colNum),
        this.CONFIG.colNum || xbear.addEvent(window, "resize",
        function() {
            var e = Math.floor(t.DOM.element.clientWidth / t.CONFIG.colWidth) || 1;
            t.VIDEO.colNum !== e && (t.VIDEO.colNum = e, t.setColumn(t.DOM.list.element, t.VIDEO.colNum), t.movePlayer())
        },
        !1);
        var l = this.DOM.list.element.getElementsByTagName("div"),
        r = this.CONFIG.ratio || .5625;
        for (s = 0; s < l.length; s++) this.setRatio(l[s], r);
        xbear.addEvent(this.DOM.list.element, "mouseup",
        function() {
            for (var n = n || window.event,
            s = n.target || n.srcElement,
            i = ""; s;) {
                if (i = s.nodeName.toLowerCase(), "video" === i || "embed" === i || "object" === i) return setTimeout(function() {
                    "video" === i && "onpause" === t.VIDEO.state && t.DOM.player.element.play()
                },
                100),
                !1;
                if ("li" === i || "ul" === i) break;
                s = s.parentNode
            }
            if ("li" === i) {
                if (t.VIDEO.request = e[xbear.data(s, "id")], t.VIDEO.request.sn === t.VIDEO.playing.sn) return t.printf("重复的播放请求", 3),
                !1;
                if (t.VIDEO.request.state) return t.stopPlay(),
                t.printf("设备不在线", 7),
                !1;
                t.VIDEO.wrap = s.lastChild,
                t.stopPlay(),
                t.printf(t.VIDEO.request, 3, "播放请求"),
                t.callPlayer()
            }
        })
    },
    e.prototype.createLogsDom = function() {
        if (!this.CONFIG.logs || this.DOM.logs.element) return ! 1;
        var e = document.createElement("textarea");
        e.id = this.DOM.logs.id,
        e.className = this.DOM.logs.className,
        document.body.appendChild(e),
        this.DOM.logs.element = e;
        var t = document.createTextNode(this.DOM.id + "\r\n");
        e.appendChild(t)
    },
    e.prototype.setRatio = function(e, t) {
        if (t) {
            var n = (100 * t).toString() + "%";
            e.style.paddingBottom = n
        } else e.style.height = "100%",
        e.style.paddingBottom = "0"
    },
    e.prototype.setColumn = function(e, t) {
        for (var n = (100 / t).toFixed(8) + "%", s = 0; s < e.childNodes.length; s++) e.childNodes[s].style.width = n
    },
    e.prototype.movePlayer = function() {
        if (!this.VIDEO.state) return ! 1;
        this.VIDEO.wrap && this.VIDEO.colNum <= this.CONFIG.playinline ? (this.printf("移动到列表内播放", 3), this.VIDEO.wrap.appendChild(this.DOM.player.element), this.VIDEO.wrap.appendChild(this.DOM.controller.element), this.DOM.controller.element.style.display = "block", this.DOM.wrap.element.style.display = "none") : (this.printf("移动到默认播放容器", 3), this.DOM.wrap.element.appendChild(this.DOM.player.element), this.DOM.wrap.element.appendChild(this.DOM.controller.element), this.DOM.controller.element.style.display = "block", this.DOM.wrap.element.style.display = "block", this.DOM.wrap.element.clientHeight || this.setRatio(this.DOM.wrap.element, this.CONFIG.ratio || .5625))
    },
    e.prototype.implodeDev = function(e) {
        var t = new Array,
        n = "object" == typeof e && xbear.type(e) || typeof e;
        if ("string" === n) try {
            e = JSON.parse(e),
            n = xbear.type(e)
        } catch(e) {}
        if ("object" === n) for (var s in e) t.push(e[s]);
        else {
            if ("array" !== n) return "";
            for (var i = 0; i < e.length; i++) t.push(e[i].sn)
        }
        return t.join()
    },
    e.prototype.explodeDev = function(e) {
        var t = [];
        if ("string" != typeof e || !e.length) return ! 1;
        e = e.split(",");
        for (var n = 0; n < e.length; n++) {
            var s = {};
            s.sn = e[n],
            t.push(s)
        }
        return !! t.length && t
    },
    e.prototype.printf = function(e, t, n) {
        if (t = t || 1, n = n || "", void 0 === e) return ! 1;
        var s = "object" == typeof e ? JSON.stringify(e).replace(/\\/g, "") : e;
        if (s = n ? n + " : " + s: s, !this.CONFIG.debug || 1 != t && 3 != t && 5 != t && 7 != t || ("object" == typeof e ? (console.log(this.DOM.id + " : " + n), console.log(e)) : console.log(this.DOM.id + " : " + s)), this.CONFIG.logs && (2 == t || 3 == t || 6 == t || 7 == t)) {
            this.DOM.logs.element || this.createLogsDom();
            var i = document.createTextNode(s + "\r\n"),
            l = this.DOM.logs.element;
            l.appendChild(i)
        } ! this.CONFIG.alert || 4 != t && 5 != t && 6 != t && 7 != t || alert(s)
    },
    window.HLS = e
})();
var MSG = {
    1 : {
        content: "设备未注册",
        type: 7
    },
    9 : {
        content: "用户不存在",
        type: 7
    },
    10 : {
        content: "用户已经在线",
        type: 7
    },
    11 : {
        content: "用户密码错误",
        type: 7
    },
    50 : {
        content: "设备不在线",
        type: 7
    },
    57 : {
        content: "设备未验证",
        type: 7
    },
    73 : {
        content: "转发服务器不在线",
        type: 7
    },
    77 : {
        content: "禁止监看时间段",
        type: 7
    },
    1019 : {
        content: "超过并发数或者欠费",
        type: 7
    },
    300 : {
        content: "读取消息文件完成",
        type: 3
    },
    301 : {
        content: "预处理全局参数obj完成",
        type: 3
    },
    302 : {
        content: "预处理访客信息uv完成",
        type: 3
    },
    303 : {
        content: "预处理控制类参数ctrl完成",
        type: 3
    },
    304 : {
        content: "预处理监控账户信息Account完成",
        type: 3
    },
    305 : {
        content: "构建模型DOM树完成",
        type: 3
    },
    306 : {
        content: "发送登录请求",
        type: 3
    },
    307 : {
        content: "登录成功",
        type: 3
    },
    308 : {
        content: "生成播放列表",
        type: 3
    },
    309 : {
        content: "无设备在线",
        type: 7
    },
    310 : {
        content: "发送监看连接请求",
        type: 3
    },
    311 : {
        content: "监看连接成功",
        type: 3
    },
    312 : {
        content: "调用flash播放器",
        type: 3
    },
    313 : {
        content: "调用H5播放器",
        type: 3
    },
    314 : {
        content: "开始播放",
        type: 3
    },
    315 : {
        content: "未就绪或播放异常中止，正在重载...",
        type: 3
    },
    316 : {
        content: "已持续播放时间",
        type: 3
    },
    317 : {
        content: "持续播放时间超出限制或请求过于频繁",
        type: 7
    },
    318 : {
        content: "发送云台控制请求",
        type: 3
    },
    319 : {
        content: "调整分辨率",
        type: 3
    },
    320 : {
        content: "调整画面比例",
        type: 3
    },
    321 : {
        content: "初始化失败",
        type: 7
    },
    322 : {
        content: "反初始化监看数据",
        type: 3
    },
    323 : {
        content: "反初始化登录数据",
        type: 3
    },
    324 : {
        content: "上传日志",
        type: 1
    },
    401 : {
        content: "转发服务到期或停用",
        type: 7
    },
    402 : {
        content: "监看账号到期或停用",
        type: 7
    },
    403 : {
        content: "设备到期或停用",
        type: 7
    },
    404 : {
        content: "转发服务达到并发上限",
        type: 7
    },
    405 : {
        content: "账号登录并发达到上限",
        type: 7
    },
    406 : {
        content: "设备监看并发达到上限",
        type: 7
    },
    407 : {
        content: "未授权HTTP服务",
        type: 7
    }
},
xbear = {
    ver: "201808222250",
    js: {},
    css: {},
    dom: {},
    $id: function(e) {
        return document.getElementById(e)
    },
    data: function(e, t) {
        if (!e) return ! 1;
        if (void 0 === t) {
            for (var n = e.attributes,
            s = {},
            i = 0; i < n.length; i += 1) {
                var l = n[i].name.split("-");
                l[1] && "data" === l[0] && (s[l[1]] = n[i].value)
            }
            return s
        }
        if ("string" == typeof t && t) return e.getAttribute("data-" + t);
        if ("object" == typeof t) {
            for (var r in t) e.setAttribute("data-" + r, t[r]);
            return ! 0
        }
        return ! 1
    },
    extend: function() {
        var e = arguments.length,
        t = arguments[0] || {};
        if ("object" != typeof t && "function" != typeof t && (t = {}), 1 == e) return t;
        for (var n = 1; n < e; n += 1) {
            var s = arguments[n];
            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i])
        }
        return t
    },
    addEvent: function(e, t, n) {
        if (document.addEventListener) try {
            e.addEventListener(t, n, !1)
        } catch(i) {
            for (var s = 0; s < e.length; s += 1) this.addEvent(e[s], t, n)
        } else try {
            e.attachEvent("on" + t,
            function() {
                return n.call(e, window.event)
            })
        } catch(i) {
            for (s = 0; s < e.length; s += 1) this.addEvent(e[s], t, n)
        }
    },
    get: function(e, t) {
        this.ajax({
            url: e,
            success: t
        })
    },
    post: function(e, t, n) {
        this.ajax({
            url: e,
            type: "POST",
            data: t,
            success: n
        })
    },
    ajax: function(e) {
        e = e || {},
        e.type = (e.type || "GET").toUpperCase(),
        e.dataType = e.dataType || "json";
        var t, n = this.httpBuildQuery(e.data);
        if (t = window.XMLHttpRequest ? new XMLHttpRequest: ActiveXObject("Microsoft.XMLHTTP"), t.onload = t.onreadystatechange = function() {
            if (4 == t.readyState) {
                var n = t.status;
                n >= 200 && n < 300 || 304 == n ? e.success && e.success(t.responseText, t.responseXML) : e.error && e.error(n),
                t.onload = t.onreadystatechange = null
            }
        },
        "GET" == e.type) {
            var s = n ? e.url + "?" + n: e.url;
            try {
                t.open("GET", s, !0),
                t.send(null)
            } catch(n) {
                t.onload = t.onreadystatechange = null,
                this.jsonp(e)
            }
        } else if ("POST" == e.type) try {
            t.open("POST", e.url, !0),
            t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            t.send(n)
        } catch(n) {
            t.onload = t.onreadystatechange = null,
            this.jsonp(e)
        }
    },
    jsonp: function(e) {
        if (e = e || {},
        e.callback = e.callback || "callback", e.time = e.time || 5, !e.url) throw new Error("参数不合法");
        var t = document.getElementsByTagName("head")[0],
        n = document.createElement("script");
        t.appendChild(n);
        var s = ("jsonp_" + Math.random()).replace(".", "");
        if (e.time) var i = setTimeout(function() {
            window[s] = null,
            t.removeChild(n),
            e.error && e.error("超时" + e.time + "秒")
        },
        1e3 * e.time);
        window[s] = function(l) {
            clearTimeout(i),
            window[s] = null,
            t.removeChild(n),
            e.success && e.success(l)
        },
        e.data[e.callback] = s;
        var l = this.httpBuildQuery(e.data);
        n.src = e.url + "?" + l
    },
    httpBuildQuery: function(e) {
        if ("object" != typeof e) try {
            e = JSON.parse(e)
        } catch(t) {
            e = {}
        }
        var t = [];
        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.push(("r=" + Math.random()).replace(".", "")),
        t.join("&")
    },
    type: function(e) {
        var t = Object.prototype.toString.call(e);
        return "[object Array]" === t ? "array": "[object Object]" === t ? "object": "[object String]" === t ? "string": "[object Number]" === t ? "number": "[object Boolean]" === t ? "boolean": "[object Function]" === t ? "function": "undefined"
    },
    urlParms: function() {
        for (var e = {},
        t = window.location.search.substring(1), n = t.split("&"), s = 0; s < n.length; s += 1) {
            var i = n[s].indexOf("=");
            if ( - 1 != i) {
                var l = n[s].substring(0, i),
                r = n[s].substring(i + 1);
                e[l] = unescape(r)
            }
        }
        return e
    },
    urlParm: function(e, t) {
        var n = new RegExp("(^|\\?|&)" + e + "=([^&]*)(&|$)"),
        s = (t = t || window.location.search.substr(1), t.match(n));
        return null != s ? unescape(s[2]) : null
    },
    utf8: {
        encode: function(e) {
            String.fromCharCode(0);
            var t = e.replace(/[\u0080-\u07ff]/g,
            function(e) {
                var t = e.charCodeAt(0);
                return String.fromCharCode(192 | t >> 6, 128 | 63 & t)
            }).replace(/[\u0800-\uffff]/g,
            function(e) {
                var t = e.charCodeAt(0);
                return String.fromCharCode(224 | t >> 12, 128 | t >> 6 & 63, 128 | 63 & t)
            });
            return t
        },
        decode: function(e) {
            String.fromCharCode(0);
            var t = e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,
            function(e) {
                var t = (15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2);
                return String.fromCharCode(t)
            }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,
            function(e) {
                var t = (31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1);
                return String.fromCharCode(t)
            });
            return t
        }
    },
    base64: {
        b64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a256: "",
        r64: [256],
        r256: [256],
        init: function() {
            for (var e = 0; e < 256;) {
                var t = String.fromCharCode(e);
                this.a256 += t,
                this.r256[e] = e,
                this.r64[e] = this.b64.indexOf(t),
                e += 1
            }
        },
        code: function(e, t, n, s, i, l) {
            e = String(e);
            for (var r = 0,
            o = 0,
            a = e.length,
            u = "",
            c = 0; o < a;) {
                var h = e.charCodeAt(o);
                for (h = h < 256 ? n[h] : -1, r = (r << i) + h, c += i; c >= l;) {
                    c -= l;
                    var p = r >> c;
                    u += s.charAt(p),
                    r ^= p << c
                }
                o += 1
            }
            return ! t && c > 0 && (u += s.charAt(r << l - c)),
            u
        },
        encode: function(e, t) {
            return t = void 0 === t || t,
            this.init(),
            e = t ? xbear.utf8.encode(e) : e,
            e = this.code(e, !1, this.r256, this.b64, 8, 6),
            e + "====".slice(e.length % 4 || 4)
        },
        decode: function(e, t) {
            t = void 0 === t || t,
            e = String(e).split("="),
            this.init();
            var n = e.length;
            do {
                n -= 1, e[n] = this.code(e[n], !0, this.r64, this.a256, 6, 8)
            } while ( n > 0 );
            return e = e.join(""),
            t ? xbear.utf8.decode(e) : e
        },
        encode2: function(e) {
            var t = this.encode(e),
            n = Math.ceil(Math.random() * t.length) || 1;
            n % 2 == 0 && (n -= 1);
            var s = t.slice(0, n),
            i = t.slice(n);
            return t = i + s + "-" + n.toString(16),
            t
        },
        decode2: function(e) {
            var t = e.split("-"),
            n = -1 * parseInt(t[1], 16);
            return this.decode(t[0].slice(n) + t[0].slice(0, n))
        }
    },
    md5: function(e) {
        var t = function(e, t) {
            return e << t | e >>> 32 - t
        },
        n = function(e, t) {
            var n, s, i, l, r;
            return i = 2147483648 & e,
            l = 2147483648 & t,
            n = 1073741824 & e,
            s = 1073741824 & t,
            r = (1073741823 & e) + (1073741823 & t),
            n & s ? 2147483648 ^ r ^ i ^ l: n | s ? 1073741824 & r ? 3221225472 ^ r ^ i ^ l: 1073741824 ^ r ^ i ^ l: r ^ i ^ l
        },
        s = function(e, t, n) {
            return e & t | ~e & n
        },
        i = function(e, t, n) {
            return e & n | t & ~n
        },
        l = function(e, t, n) {
            return e ^ t ^ n
        },
        r = function(e, t, n) {
            return t ^ (e | ~n)
        },
        o = function(e, i, l, r, o, a, u) {
            return e = n(e, n(n(s(i, l, r), o), u)),
            n(t(e, a), i)
        },
        a = function(e, s, l, r, o, a, u) {
            return e = n(e, n(n(i(s, l, r), o), u)),
            n(t(e, a), s)
        },
        u = function(e, s, i, r, o, a, u) {
            return e = n(e, n(n(l(s, i, r), o), u)),
            n(t(e, a), s)
        },
        c = function(e, s, i, l, o, a, u) {
            return e = n(e, n(n(r(s, i, l), o), u)),
            n(t(e, a), s)
        },
        h = function(e) {
            for (var t, n = e.length,
            s = n + 8,
            i = (s - s % 64) / 64, l = 16 * (i + 1), r = Array(l - 1), o = 0, a = 0; a < n;) t = (a - a % 4) / 4,
            o = a % 4 * 8,
            r[t] = r[t] | e.charCodeAt(a) << o,
            a += 1;
            return t = (a - a % 4) / 4,
            o = a % 4 * 8,
            r[t] = r[t] | 128 << o,
            r[l - 2] = n << 3,
            r[l - 1] = n >>> 29,
            r
        },
        p = function(e) {
            var t, n, s = "",
            i = "";
            for (n = 0; n <= 3; n += 1) t = e >>> 8 * n & 255,
            i = "0" + t.toString(16),
            s += i.substr(i.length - 2, 2);
            return s
        },
        d = function(e) {
            e = e.replace(/\x0d\x0a/g, "\n");
            for (var t = "",
            n = 0; n < e.length; n += 1) {
                var s = e.charCodeAt(n);
                s < 128 ? t += String.fromCharCode(s) : s > 127 && s < 2048 ? (t += String.fromCharCode(s >> 6 | 192), t += String.fromCharCode(63 & s | 128)) : (t += String.fromCharCode(s >> 12 | 224), t += String.fromCharCode(s >> 6 & 63 | 128), t += String.fromCharCode(63 & s | 128))
            }
            return t
        },
        m = function(e) {
            var t, s, i, l, r, m, O, f, y, D = Array(),
            E = 7,
            I = 12,
            v = 17,
            g = 22,
            M = 5,
            V = 9,
            b = 14,
            w = 20,
            N = 4,
            C = 11,
            S = 16,
            T = 23,
            F = 6,
            x = 10,
            q = 15,
            G = 21;
            for (e = d(e), D = h(e), m = 1732584193, O = 4023233417, f = 2562383102, y = 271733878, t = 0; t < D.length; t += 16) s = m,
            i = O,
            l = f,
            r = y,
            m = o(m, O, f, y, D[t + 0], E, 3614090360),
            y = o(y, m, O, f, D[t + 1], I, 3905402710),
            f = o(f, y, m, O, D[t + 2], v, 606105819),
            O = o(O, f, y, m, D[t + 3], g, 3250441966),
            m = o(m, O, f, y, D[t + 4], E, 4118548399),
            y = o(y, m, O, f, D[t + 5], I, 1200080426),
            f = o(f, y, m, O, D[t + 6], v, 2821735955),
            O = o(O, f, y, m, D[t + 7], g, 4249261313),
            m = o(m, O, f, y, D[t + 8], E, 1770035416),
            y = o(y, m, O, f, D[t + 9], I, 2336552879),
            f = o(f, y, m, O, D[t + 10], v, 4294925233),
            O = o(O, f, y, m, D[t + 11], g, 2304563134),
            m = o(m, O, f, y, D[t + 12], E, 1804603682),
            y = o(y, m, O, f, D[t + 13], I, 4254626195),
            f = o(f, y, m, O, D[t + 14], v, 2792965006),
            O = o(O, f, y, m, D[t + 15], g, 1236535329),
            m = a(m, O, f, y, D[t + 1], M, 4129170786),
            y = a(y, m, O, f, D[t + 6], V, 3225465664),
            f = a(f, y, m, O, D[t + 11], b, 643717713),
            O = a(O, f, y, m, D[t + 0], w, 3921069994),
            m = a(m, O, f, y, D[t + 5], M, 3593408605),
            y = a(y, m, O, f, D[t + 10], V, 38016083),
            f = a(f, y, m, O, D[t + 15], b, 3634488961),
            O = a(O, f, y, m, D[t + 4], w, 3889429448),
            m = a(m, O, f, y, D[t + 9], M, 568446438),
            y = a(y, m, O, f, D[t + 14], V, 3275163606),
            f = a(f, y, m, O, D[t + 3], b, 4107603335),
            O = a(O, f, y, m, D[t + 8], w, 1163531501),
            m = a(m, O, f, y, D[t + 13], M, 2850285829),
            y = a(y, m, O, f, D[t + 2], V, 4243563512),
            f = a(f, y, m, O, D[t + 7], b, 1735328473),
            O = a(O, f, y, m, D[t + 12], w, 2368359562),
            m = u(m, O, f, y, D[t + 5], N, 4294588738),
            y = u(y, m, O, f, D[t + 8], C, 2272392833),
            f = u(f, y, m, O, D[t + 11], S, 1839030562),
            O = u(O, f, y, m, D[t + 14], T, 4259657740),
            m = u(m, O, f, y, D[t + 1], N, 2763975236),
            y = u(y, m, O, f, D[t + 4], C, 1272893353),
            f = u(f, y, m, O, D[t + 7], S, 4139469664),
            O = u(O, f, y, m, D[t + 10], T, 3200236656),
            m = u(m, O, f, y, D[t + 13], N, 681279174),
            y = u(y, m, O, f, D[t + 0], C, 3936430074),
            f = u(f, y, m, O, D[t + 3], S, 3572445317),
            O = u(O, f, y, m, D[t + 6], T, 76029189),
            m = u(m, O, f, y, D[t + 9], N, 3654602809),
            y = u(y, m, O, f, D[t + 12], C, 3873151461),
            f = u(f, y, m, O, D[t + 15], S, 530742520),
            O = u(O, f, y, m, D[t + 2], T, 3299628645),
            m = c(m, O, f, y, D[t + 0], F, 4096336452),
            y = c(y, m, O, f, D[t + 7], x, 1126891415),
            f = c(f, y, m, O, D[t + 14], q, 2878612391),
            O = c(O, f, y, m, D[t + 5], G, 4237533241),
            m = c(m, O, f, y, D[t + 12], F, 1700485571),
            y = c(y, m, O, f, D[t + 3], x, 2399980690),
            f = c(f, y, m, O, D[t + 10], q, 4293915773),
            O = c(O, f, y, m, D[t + 1], G, 2240044497),
            m = c(m, O, f, y, D[t + 8], F, 1873313359),
            y = c(y, m, O, f, D[t + 15], x, 4264355552),
            f = c(f, y, m, O, D[t + 6], q, 2734768916),
            O = c(O, f, y, m, D[t + 13], G, 1309151649),
            m = c(m, O, f, y, D[t + 4], F, 4149444226),
            y = c(y, m, O, f, D[t + 11], x, 3174756917),
            f = c(f, y, m, O, D[t + 2], q, 718787259),
            O = c(O, f, y, m, D[t + 9], G, 3951481745),
            m = n(m, s),
            O = n(O, i),
            f = n(f, l),
            y = n(y, r);
            var R = p(m) + p(O) + p(f) + p(y);
            return R.toLowerCase()
        };
        return m(e)
    },
    trim: function(e) {
        return e.replace(/^\s+|\s+$/gm, "")
    },
    loadJs: function(e, t) {
        var n = this.md5(e),
        s = document.getElementById(n),
        i = e + "?ver=" + this.ver;
        if (s) {
            if (xbear.urlParm("ver", s.src) === this.ver) return s.onload = s.onreadystatechange = null,
            "function" == typeof t && t.call(this),
            !0;
            s.src = i
        } else {
            var l = document.getElementsByTagName("head")[0];
            s = document.createElement("script"),
            s.type = "text/javascript",
            s.src = i,
            s.id = n,
            l.appendChild(s)
        }
        s.onload = s.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (xbear.js[n] = s.src, "function" == typeof t && t.call(this), s.onload = s.onreadystatechange = null)
        }
    },
    fullscreen: function(e) {
        if (e.requestFullScreen) e.requestFullScreen();
        else if (e.mozRequestFullScreen) e.mozRequestFullScreen();
        else if (e.msRequestFullscreen) e.msRequestFullscreen();
        else {
            if (!e.webkitRequestFullscreen) return ! 1;
            e.webkitRequestFullScreen()
        }
    },
    exitFullscreen: function() {
        document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
    },
    isFullscreen: function() {
        return document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || !1
    }
};
export default { id, MSG, xbear }