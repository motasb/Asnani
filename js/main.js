const themeToggleCheckbox = document.getElementById('theme-toggle');
const bodyElement = document.body;

// عند تغيير حالة مربع الاختيار
themeToggleCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // تطبيق الوضع النهاري
        bodyElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        // تطبيق الوضع المظلم
        bodyElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});
// عند تحميل الصفحة، التحقق من الوضع المحفوظ في localStorage
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        bodyElement.classList.add('dark-mode');
        themeToggleCheckbox.checked = false; // إلغاء التفعيل لوضع المظلم
    } else {
        themeToggleCheckbox.checked = true; // تفعيل الوضع النهاري
    }
});




document.getElementById('copy-address').addEventListener('click', function () {
    
    const copyElement = document.getElementById('copy-address');
    // النص المراد نسخه
    const addressText = copyElement; // يمكنك استبدال "Your Address Here" بالنص الذي تريده
    
    // إنشاء عنصر مؤقت لنسخ النص منه
    const tempInput = document.createElement('input');
    tempInput.value = addressText.textContent;
    document.body.appendChild(tempInput);
    
    // تحديد النص ونسخه
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // للأجهزة المحمولة
    
    // نسخ النص
    document.execCommand('copy');
    
    // إزالة عنصر الإدخال المؤقت
    document.body.removeChild(tempInput);

    copyElement.style.color = 'green';

    // إعادة اللون الأصلي بعد ثانية واحدة
    setTimeout(function() {
        copyElement.style.backgroundColor = '';
        copyElement.style.color = '';
    }, 500); // 1000 ملي ثانية = 1 ثانية

});

let galery = document.querySelector(".galery");
let imgs = document.querySelectorAll(".galery .container img");

let galeryWork = document.querySelector(".galery-work");
let galeryWorkCard = document.querySelectorAll(".galery-work .card");

window.onscroll = function () {
    if (window.scrollY >= galery.offsetTop - 400) {
        imgs.forEach((img) => {
            img.classList.add("left");
        });
    }

    if (window.scrollY >= galeryWork.offsetTop - 400) {
        galeryWorkCard.forEach((card) => {
            card.classList.add("right");
        });
    }
}




let countDownDate = new Date(" sep 19 , 2024 17:59:59").getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / ( 1000 * 60 * 60));
    
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / ( 1000 * 60 ));
    
    let seconds = Math.floor(dateDiff % (1000 * 60 ) / (1000));

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}`:days ;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`:hours ;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`:minutes ;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`:seconds ;

    if (dateDiff <  0) {
        clearInterval(counter);
    }
},1000)