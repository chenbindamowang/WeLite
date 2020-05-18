// subpackages/fun/fun.js
const app = getApp(),
    g = app.globalData;

let nav = [ {
        name: "小清新",
        type: 35,
    }, {
        name: "文艺范",
        type: 36,
    }, {
        name: "大胸妹",
        type: 34,
    }, {
        name: "性感妹",
        type: 37,
    }, {
        name: "大长腿",
        type: 38,
    }, {
        name: "黑丝袜",
        type: 39,
    }, {
        name: "小翘臀",
        type: 40,
    }],
    page = 1,
    types = 35,
    getFun = (that, url = "/819-1") => {
        wx.showLoading({
            title: '等一等...',
            mask: true,
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
        wx.request({
            url: g.showapi_url + url,
            data: {
                showapi_appid: g.showapi_appid,
                showapi_sign: g.showapi_sign,
                page: page,
                num: 20,
                type: types
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: 'POST',
            success: function(res) {

                if (res.data.showapi_res_code == 0) {
                    let l = that.data.list,
                        list = res.data.showapi_res_body;
                    console.log(typeof(list))
                    if (page == 1) {
                        l = []
                    }
                    Object.keys(list).forEach((key, val) => {
                        if (key != "ret_code") {
                            l.push(list[key]);
                        }
                    })
                    that.setData({
                        list: l
                    })
                    page += 1;
                }
            },
            fail: function(res) {},
            complete: function(res) {
                wx.hideLoading()
            },
        })
    }

Page({

    /**
     * 页面的初始数据
     */
    data: {
        nav: nav,
        list: [],
        navidx: 0
    },
    switchNav: function(e) {
        let idx = e.currentTarget.dataset.idx;
        types = e.currentTarget.dataset.type;
        page = 1;
        this.setData({
            navidx: idx
        })
        getFun(this);

    },
    prawImg:function(e){
        let src = e.currentTarget.dataset.src;
        wx.previewImage({
            current: src,
            urls: [src],
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        getFun(this);

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },


    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        page = 1;
        types = 35;
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        getFun(this);
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    onPageScroll: function(e) {
        console.log(e);
    },
})