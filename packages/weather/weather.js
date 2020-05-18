const key = '9ef761e74cc34c71816079e8145d5a96',
    //https://www.heweather.com/documents/api/s6/weather-hourly 逐小时预报
    url = 'https://free-api.heweather.com/s6/weather/hourly',
    url1 = 'https://free-api.heweather.com/s6/weather/now',
    url2 = 'https://www.apiopen.top/weatherApi',
    heweather = (that, datas) => {
        wx.request({
            url: url,
            data: datas,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: 'GET',
            success: function (res) {
                console.log(res);
                if (res.errMsg == 'request:ok') {
                    that.setData(res.data.HeWeather6[0]);
                }

            },
            fail: function (res) { },
            complete: function (res) { },
        })
    },
    heweathernow = (that, datas) => {
        wx.request({
            url: url1,
            data: datas,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: 'GET',
            success: function (res) {
                console.log(res);
                if (res.errMsg == 'request:ok') {
                    that.setData(res.data.HeWeather6[0]);
                }

            },
            fail: function (res) { },
            complete: function (res) { },
        })
    },
    openweatherApi = (that, datas) => {
        wx.request({
            url: url2,
            data: datas,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: 'GET',
            success: function (res) {
                console.log(res);
                if (res.data.code == 200) {
                    that.setData(res.data.data);
                }

            },
            fail: function (res) { },
            complete: function (res) { },
        })
    };

Page({
    data: {
        t: true
    },
    onLoad: function (options) {
        let that = this;
        wx.getLocation({
            type: 'gcj02',
            altitude: false,
            success: function (res) {
                heweather(that, {
                    location: res.longitude + ',' + res.latitude,
                    key: key,
                });
                heweathernow(that, {
                    location: res.longitude + ',' + res.latitude,
                    key: key,
                });
            },
            fail: function (res) {
                wx.showToast({
                    title: '定位失败',
                    icon: 'none',
                    duration: 1000,
                    mask: true
                })
            },
            complete: function (res) { },
        })

    },
    choosecity: function () {
        wx.chooseLocation({
            success: function (res) {
                console.log(res)
            },
            fail: function (res) { },
            complete: function (res) { },
        })
    },
    heWeather: function () {
        wx.navigateTo({
            url: '../webview/webview?src=http://www.heweather.com/',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })
    },
    more: function (e) {
        this.setData({
            t: !e.currentTarget.dataset.t
        })
    },
    onReady: function () {

    },

    onShow: function () {

    },

    onHide: function () {

    },


    onUnload: function () {

    },


    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },
})