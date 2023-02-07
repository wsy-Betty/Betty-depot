window.onload = function(){
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


    let xhr = new XMLHttpRequest();
    
    // 2.给实例对象设置请求方式和请求地址
    // xhr.open('请求方式','请求地址');
    xhr.open('get', '/api/shequ');

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    // 3.发送请求
    xhr.send();
    
    // 4.获取请求的结果(返回的数据)
    xhr.onload = function() {
        let { data } = JSON.parse(xhr.response)

        let listBox = document.querySelector('.contet')

        let tempTags = ""

        data.forEach((item) => {
            tempTags += `
                <div class="user flex-sc">
                    <img class="userheader" src="${item.head}" alt="">
                    <div class="guanzhu">
                        <span>关注</span>
                        <span class="iconfont icon-tianjia"></span>
                    </div>
                </div>
                <div class="txt">
                    <p class="title">${item.title}</p>
                    <div class="detila">
                        ${item.desc}
                    </div>
                </div>
                <div class="imgs flex-sc">
                    <img src="${item.img1}" alt="">
                    <img src="${item.img2}" alt="">
                    <img src="${item.img3}" alt="">
                </div>
            `
        })
        listBox.innerHTML = tempTags
        console.log(data);
    }



    
}