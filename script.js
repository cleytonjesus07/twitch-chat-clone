const warning = document.getElementById("warning");
const inputMessage = document.getElementById("inputMessage");
const formChat = document.getElementById("form-chat");
const inputNickname = document.getElementById("nickname-input");
const chatList = document.getElementById("chatItems");

const pathBadges = "./badges/";
const badgesRandom = [`${pathBadges}nvl1.png`, `${pathBadges}nvl2.png`, `${pathBadges}nvl3.png`, `${pathBadges}nvl4.png`, `${pathBadges}nvl5.png`]
const colorsRandom = ["red", "tomato", "brown", "blue", "oceanblue", "purple", "green", "royalblue"];

const colorIndex = () => Math.floor((colorsRandom.length - 1) * Math.random());

const scrollDown = (listChat) => {
    listChat.scroll({
        top: chatItems.scrollHeight,
        left: 0,
        behavior: 'smooth'
    })
}

inputMessage.oninput = () => {
    warning.style.opacity = 1;
}

inputMessage.onblur = () => {
    warning.style.opacity = 0;
}



formChat.onsubmit = (e) => {
    e.preventDefault();

    if (inputMessage.value.length == 0 && inputNickname.value.length == 0) {
        inputMessage.style.borderColor = "red";
        inputNickname.style.borderColor = "red";

        setTimeout(() => {
            inputMessage.style.borderColor = "transparent";
            inputNickname.style.borderColor = "orange";
        }, 3000)
        return;
    }

    if (inputMessage.value.length == 0) {
        inputMessage.style.borderColor = "red";
        setTimeout(() => inputMessage.style.borderColor = "transparent", 3000)
        return;
    }

    if (inputNickname.value.length == 0) {
        inputNickname.style.borderColor = "red";
        setTimeout(() => inputNickname.style.borderColor = "orange", 3000)
        return;
    }


    const chatItems = document.getElementById("chatItems");
    chatItems.insertAdjacentHTML("beforeend", `
        <div class="baloon animationToLeft">
            <div class="name" style="background-color:${colorsRandom[colorIndex()]}"><img src='${badgesRandom[Math.floor((badgesRandom.length - 1) * Math.random())]}'/>${inputNickname.value}</div>
            <div class="message">${inputMessage.value}</div>
        </div>
        `)
    scrollDown(chatItems);
}

