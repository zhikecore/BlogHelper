const Store = require('electron-store')

class DataStore extends Store {
    //新浪微博图床设置
    weiBoCookiesKey = 'wei-Bo-cookies-key'

    //博客园Cookie
    cnBlogCookieKey = 'cn-blog-cookie-key'
    //CSDN
    CSDNCookieKey = 'csdn-cookie-key'
    //掘金
    JueJinCookieKey = 'jueJin-cookie-key'
    //开源中国
    OsChinaCookieKey = 'OsChina-cookie-key'
    OsChinaUserCodeKey = 'osChina-user-code-key'
    OsChinaUserIdKey = 'osChina-user-id-key'
    //思否
    SegmentFaultCookieKey = 'segmentFault-cookie-key'
    SegmentFaultTokenKey = 'segmentFault-token-key'

    constructor(settings) {
        const baseConfig = {name: 'blog-helper-2'}
        const finalConfig = {...baseConfig, ...settings};
        super(finalConfig)
    }

    getCnBlogCookies() {
        if (this.has(this.cnBlogCookieKey)) {
            return this.get(this.cnBlogCookieKey)
        }
        return null
    }

    setCnBlogCookie(v) {
        return this.set(this.cnBlogCookieKey, v)
    }

    getCSDNCookies() {
        if (this.has(this.CSDNCookieKey)) {
            return this.get(this.CSDNCookieKey)
        }
        return null
    }

    setCSDNCookie(v) {
        return this.set(this.CSDNCookieKey, v)
    }

    getJueJinCookies() {
        if (this.has(this.JueJinCookieKey)) {
            return this.get(this.JueJinCookieKey)
        }
        return null
    }

    setJueJinCookie(v) {
        return this.set(this.JueJinCookieKey, v)
    }

    getOsChinaCookies() {
        if (this.has(this.OsChinaCookieKey)) {
            return this.get(this.OsChinaCookieKey)
        }
        return null
    }

    setOsChinaCookie(v) {
        return this.set(this.OsChinaCookieKey, v)
    }

    getOsChinaUserCode() {
        if (this.has(this.OsChinaUserCodeKey)) {
            return this.get(this.OsChinaUserCodeKey)
        }
        return null
    }

    setOsChinaUserCode(v) {
        return this.set(this.OsChinaUserCodeKey, v)
    }

    getWeiBoCookies() {
        if (this.has(this.weiBoCookiesKey)) {
            return this.get(this.weiBoCookiesKey)
        }
        return null
    }

    setWeiBoCookies(v) {
        return this.set(this.weiBoCookiesKey, v)
    }

    getSegmentFaultCookie() {
        if (this.has(this.SegmentFaultCookieKey)) {
            return this.get(this.SegmentFaultCookieKey)
        }
        return null
    }

    setSegmentFaultCookie(v) {
        return this.set(this.SegmentFaultCookieKey, v)
    }

    getSegmentFaultToken() {
        if (this.has(this.SegmentFaultTokenKey)) {
            return this.get(this.SegmentFaultTokenKey)
        }
        return null
    }

    setSegmentFaultToken(v) {
        return this.set(this.SegmentFaultTokenKey, v)
    }

    getOsChinaUserId() {
        if (this.has(this.OsChinaUserIdKey)) {
            return this.get(this.OsChinaUserIdKey)
        }
        return null
    }

    setOsChinaUserId(v) {
        return this.set(this.OsChinaUserIdKey, v)
    }

    // 启用图床Key
    figureBedSwitch = 'figureBedSwitch'
    // Value
    WEIBO = 'WEIBO'
    SMMS = 'SMMS'

    // 是否启用微博图床
    isWeiBoFigureBedSwitch() {
        if (this.has(this.figureBedSwitch)) {
            return this.get(this.figureBedSwitch) === this.WEIBO
        }
        return false
    }
    setWeiBoFigureBedSwitch() {
        this.set(this.figureBedSwitch, this.WEIBO+'')
    }

    // 是否启用SM.MS图床
    isSmMSFigureBedSwitch() {
        if (this.has(this.figureBedSwitch)) {
            return this.get(this.figureBedSwitch) === this.SMMS
        }
        return false
    }
    setSmMSFigureBedSwitch() {
        this.set(this.figureBedSwitch, this.SMMS+'')
    }

}

module.exports = DataStore