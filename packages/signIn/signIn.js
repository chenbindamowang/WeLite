// packages/signIn/signIn.js

import { time } from '../../utils/util.js';
Page({

    data: {

    },

    onLoad: function(options) {
        let that = this,
            list = wx.getStorageSync('signlist') || [];
        
        list.length == 0 ? (wx.setStorageSync('signlist', []), that.setData({
            list: list
        })) : (that.setData({
            list: list
        }));
    },
    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    },
    sign: function(e) {
        let that = this,
            list = that.data.list || [],
            now = time(new Date()),
            c = e.currentTarget.dataset.condition;

        if (list.length == 0) {
            let obj = {
                today: now
            };
            obj[c] = now;
            list.push(obj);

        } else {
            console.log(c)
            let day = list[0];
            if(day.today.today == now.today){
                if (day.getup && c == 'getup' || day.seelp && c == 'seelp') {
                    return wx.showToast({
                        title: '今天已经' + (c == 'getup' ? '起过床啦' : '睡过了'),
                        icon: 'none',
                        duration: 1200,
                        mask: true,
                        success: function (res) { },
                        fail: function (res) { },
                        complete: function (res) { },
                    })
                }
                day[c] = now
            }else{
                let obj = {
                    today: now
                };
                obj[c] = now;
                list.unshift(obj)    
            }
            
        }
        wx.showToast({
            title: '打卡成功',
            icon: 'success',
            duration: 1200,
            mask: true,
        })
        wx.setStorageSync('signlist', list)
        that.setData({
            list: list
        })
    },
})