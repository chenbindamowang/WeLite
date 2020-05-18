//
const app = getApp();
import { time } from '../../utils/util.js';
const getPrower = (page) => {
    wx.getBatteryInfo({
        success: function (res) {
            page.setData({
                prower: res
            });
        },
        fail: function (res) {
            page.setData({
                prower: {}
            });
        }
    });
};

Page({
    data: {

    },
    onLoad: function() {
        let that = this;
        // getPrower(that);
        that.setData({
            timeData: time(new Date()),
            sys: wx.getSystemInfoSync()
        })
        setInterval(() => {
            that.setData({
                timeData: time(new Date())
            })
            // getPrower(that);
        }, 1000 * 6);
    },
    buttonErr: function(e) {
        console.log(e);
    },
    openSetting: function(e) {
        console.log(e);

    }
})