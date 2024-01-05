if (localStorage.getItem("name") == null || localStorage.getItem("name") == ' ' || localStorage.getItem("name") == '') {
    popUp()
    document.getElementById('greetID').style.display = `none`;
    disableScroll();
} else if(localStorage.getItem("name") == 'bachu' || localStorage.getItem("name") == 'Bachu') {
    document.getElementById('greetID').innerHTML = `Lumjuuuu ${localStorage.getItem('name')} 😊😊`;
    setTimeout(() => {
        document.getElementById('greetID').style.display = `none`;
    }, 5000);

}else {
    document.getElementById('greetID').innerHTML = `Welcome back ${localStorage.getItem('name')}`;
    setTimeout(() => {
        document.getElementById('greetID').style.display = `none`;
    }, 5000);
}
function popUp() {
    if (document.getElementById('nameFormID').style.display == `none`) {
        document.getElementById('nameFormID').style.display = `block`;
        document.getElementById('bg-blurID').style.display = ``;
        // document.getElementsByTagName('body')[0].style = 'filter: blur(10px)';
    } else if (document.getElementById('nameFormID').style.display == 'block') {
        document.getElementById('nameFormID').style.display = 'none';
        document.getElementById('bg-blurID').style.display = `none`;
        enableScroll();
        console.log(87654)
    }
}

function nameIn() {
    let name = document.getElementById('userName').value.trim();
    console.log("user name :" + name)
    localStorage.setItem(`name`, `${name}`)
    popUp()
}

// if(localStorage.getItem("name") == null) {
//     localStorage.setItem(`name`,`${prompt("Enter your good name : ")}`)
// } else {
//     alert(`Welcome back ${localStorage.getItem("name")}`)
// }


// Function to disable scrolling
function disableScroll() {

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = null;
}


