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
    xhr.open('get', '/api/xingceng');

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    // 3.发送请求
    xhr.send();
    
    // 4.获取请求的结果(返回的数据)
    xhr.onload = function() {
        let { data } = JSON.parse(xhr.response)

        let listBox = document.querySelector('.chunk3')

        let tempTags = ""

        data.forEach((item) => {
            tempTags += `
            <div>
                <img src="${item.img}" alt="">
                <p class="title">${item.name}</p>
                <p class="des">${item.des}</p>
            </div>
            `
        })
        listBox.innerHTML = tempTags
        console.log(data);
    }



    
}