// 获取屏幕宽度
let width = document.documentElement.clientWidth || document.body.clientWidth;
let r = width / 750;  //计算字体大小
// 获取html元素
let a = document.getElementsByTagName('html')[0];
//设置html字体大小
a.setAttribute('style', 'font-size:' +  r  + 'px');


Mock.mock('/api/index', {
	"code":200,
	"data": [
        {
            "img": './images/1_19.png',
            "name": '特价专区'
        },
        {
            "img": './images/1_20.png',
            "name": '携程直播'
        },
        {
            "img": './images/1_21.png',
            "name": '口碑榜'
        },
        {
            "img": './images/1_22.png',
            "name": '旗舰店'
        },
    ]
});

Mock.mock('/api/shequ', {
	"code":200,
	"data": [
        {
            "head": './images/2_4.png',
            "title": '有奖猜谜:不说地名，用一句话让大家猜猜是哪里?',
            "desc": '《一年一度评论亮活儿大赛》第二周主题赛来了!大家快冲啊',
            "img1": './images/2_1.png',
            "img2": './images/2-2.png',
            "img3": './images/2_3.png',
        }
    ]
});


Mock.mock('/api/xingceng', {
	"code":200,
	"data": [
        {
            "img": './images/4_1.png',
            "name": '三亚海棠湾跳伞，想一千次不如去跳一次',
            "des": '20884人对此路线有兴趣',
        },
        {
            "img": './images/4_2.png',
            "name": '三亚旅行:拜妙音观世音，听梵音海潮音!',
            "des": '24223人对此路线有兴趣',
        },
        {
            "img": './images/4_1.png',
            "name": '三亚海棠湾跳伞，想一千次不如去跳一次',
            "des": '20884人对此路线有兴趣',
        },
        {
            "img": './images/4_1.png',
            "name": '三亚海棠湾跳伞，想一千次不如去跳一次',
            "des": '20884人对此路线有兴趣',
        },

    ]
});


let li = document.getElementsByClassName('li')

let arr = Array.from(li)

arr.forEach(element => {
    element.addEventListener('click', () => {
        arr.forEach((item) => {
            item.className = 'li'
        })
        element.className = 'active li'
    }, false)  
});

