window.onload = function(){
    // let li = document.getElementsByClassName('li')

    // let arr = Array.from(li)

    // arr.forEach(element => {
    //     element.addEventListener('click', () => {
    //         arr.forEach((item) => {
    //             item.className = 'li'
    //         })
    //         element.className = 'active li'
    //     }, false)  
    // });



    let xhr = new XMLHttpRequest();
    
    // 2.给实例对象设置请求方式和请求地址
    // xhr.open('请求方式','请求地址');
    xhr.open('get', '/api/index');

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    // 3.发送请求
    xhr.send();
    
    // 4.获取请求的结果(返回的数据)
    xhr.onload = function() {
        let { data } = JSON.parse(xhr.response)

        let listBox = document.querySelector('.chunk2')

        let tempTags = ""

            tempTags += `
            <div class="left flex-xc">
                <div>
                    <h2>特价专区</h2>
                    <img src="./images/1_19.png" alt="">
                </div>
                <div>
                    <h2>携程直播</h2>
                    <img src="./images/1_20.png" alt="">
                </div>
            </div>
            <div class="right flex-xc">
                <div>
                    <h2>口碑榜</h2>
                    <img src="./images/1_21.png" alt="">
                </div>
                <div>
                    <h2>旗舰店</h2>
                    <img src="./images/1_22.png" alt="">
                </div>
            </div>
        `
        listBox.innerHTML = tempTags
        console.log(data);
    }


    
}