'use strict';

//===================================================================================================

// 専門家リストをJSONから読み込む
let professionals = [];

fetch('https://umeda-ask.github.io/ask-ailinq/professionals.json')
    .then(response => response.json())
    .then(data => {
        professionals = data;
        console.log("専門家リストを読み込みました", professionals);
    })

    .catch(error => {
        console.error("読み込みに失敗しました", error);
    });

//===================================================================================================

let userCount = 0;
let userData = [];
let robotCount = 0;
let userName = '';
let userAddress = '';
let userPhone = '';
let userInquiry = '';
let selectedConsultationType = '';  // 法律相談または税務相談の種類を保存
let selectedConsultationDetail = '';  // 法律相談または税務相談の詳細を保存
let current_time = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });  // 法律相談または税務相談の詳細を保存

document.addEventListener("DOMContentLoaded", function() {

    // EmailJSのスクリプトを動的に読み込む
    const emailJsScript = document.createElement('script');
    emailJsScript.type = 'text/javascript';
    emailJsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    document.head.appendChild(emailJsScript);

    emailJsScript.onload = function() {
        // EmailJSの初期化
        emailjs.init('hugWN77kXtanuGGDO');
    };
    
    // 位置情報取得を開始
    getUserLocationAndSetCookie();
    
});

// チャットボット設定
document.addEventListener('DOMContentLoaded', (event) => {

    var displaySettings = getScriptParameter('wpx');

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://umeda-ask.github.io/ask-ailinq/styles.css';
    document.head.appendChild(link);

    let chatbotHTML = `
        <div id="chatbot">
            <div id="chatbotHeader">
                <img src="https://umeda-ask.github.io/ask-ailinq/person_icon.png" alt="Person Icon" id="personIcon">
                <span>お問い合わせチャット</span>
                <span id="closeChatbot" style="cursor: pointer;">✖</span>
            </div>
            <div id="chatbotMessages">
                <ul id="chatbot-ul"></ul>
            </div>
    `;

    chatbotHTML += `
            <div id="chatbotInput">
                <textarea type="text" id="messageInput" placeholder="メッセージを入力..."></textarea>
                <button id="sendMessage">送信</button>
            </div>
        </div>
        <button id="openChatbot">
            <img src="https://umeda-ask.github.io/ask-ailinq/chat_open.png" alt="チャットアイコン">
            <span id="openChatbotTooltip">お急ぎの方はこちらから</span>
        </button>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

const chatList = {
    1: { text: 'アスクプロ相談サポート お問い合わせチャットへようこそ。', continue: true, option: 'normal', return: false },
    2: { text: { title: '以下よりお問い合わせ内容を選んでください。', choices: ['相談受付', '専門家を探す'] }, continue: false, option: 'choices', return: true },
    3: { text: { title: 'お問い合わせ内容を選択してください。\nまた、位置情報を許可することでお近くの専門家をご案内することが可能です。', choices: ['法律相談', '税務相談'] }, continue: false, option: 'choices', return: true },
    4: { text: 'お問い合わせ内容を入力して送信ボタンを押してください。※対応方法を判別するため出来る限り詳細な数値、ご状況をご入力ください。', continue: false, option: 'normal', return: false },
    5: { text: { title: '法律相談内容を選択してください。', choices: ['離婚・男女問題', '借金', '相続', '交通事故', 'インターネット', '消費者被害', '犯罪・刑事事件', '労働', '債権回収', '不動産・建築', '国際・外国人問題', '医療', '企業法務'] }, continue: false, option: 'choices', return: false },
    6: { text: { title: '税務相談内容を選択してください。', choices: ['顧問税理士', '経理・決算', '税務調査', '資金調達', '節税', '会社設立', '確定申告', '相続税', '税金・お金'] }, continue: false, option: 'choices', return: false },
    7: { text: 'お名前をフルネームで入力して送信ボタンを押してください', continue: false, option: 'normal', return: false },
    8: { text: 'ご自宅の住所を入力して送信ボタンを押してください。(例:東京都千代田区丸の内)', continue: false, option: 'normal', return: false },
    9: { text: '専門家のご連絡を受け取れるお電話番号を入力して送信ボタンを押してください。(例:0901111XXXX)', continue: false, option: 'normal', return: false },
    10: { text: { title: '相談を送信しますか？', choices: ['はい', '入力しなおす'] }, continue: false, option: 'choices', return: false },
    11: { text: 'ご利用ありがとうございました。\nご入力いただいた情報につきましては弊社では保持しておりません。\nご入力いただいた情報を元に対応出来る専門家をお探ししております。相談内容によっては専門家が見つからない場合がございます。見つかった場合は3営業日以内に専門家からのご連絡がございます。\nお急ぎの場合は直接、専門家へのご連絡お願い致します。', continue: false, option: 'normal', return: true },
    12: { text: 'もう一度相談内容を入力してください。', continue: false, option: 'normal', return: false },
};

    const openChatbotButton = document.getElementById('openChatbot');
    const closeChatbotButton = document.getElementById('closeChatbot');
    const sendMessageButton = document.getElementById('sendMessage');

openChatbotButton.onclick = function() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = 'flex';
    setTimeout(() => {
        chatbot.classList.add('show');
    }, 10);
    setTimeout(() => {
        openChatbotButton.classList.add('hide');
    }, 200);

    // クッキーから位置情報を取得
    const latitude = getCookieValue('user_latitude');
    const longitude = getCookieValue('user_longitude');
    
//    if (latitude == 0 && longitude == 0) {
//        // 位置情報が取得されていない場合のみアラートを表示
//        alert('正確に専門家をお探しするために、位置情報を許可してください。');
//    }

    // 位置情報の取得を開始
    getUserLocationAndSetCookie();
};



    closeChatbotButton.onclick = function() {
        const chatbot = document.getElementById('chatbot');
        chatbot.classList.remove('show');
        setTimeout(() => {
            chatbot.style.display = 'none';
            openChatbotButton.classList.remove('hide');
        }, 200);
    };

sendMessageButton.onclick = function() {
    const message = document.getElementById('messageInput').value;
    if (message.trim() !== '') {
        const messageElem = document.createElement('li');
        messageElem.classList.add('right');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chatbot-right');
        messageDiv.textContent = message;
        messageElem.appendChild(messageDiv);
        document.getElementById('chatbot-ul').appendChild(messageElem);
        document.getElementById('messageInput').value = '';

        userCount++;
        userData.push(message);

        if (robotCount === 4) {
            userInquiry = message;
        } else if (robotCount === 7) {
            userName = message;
        } else if (robotCount === 8) {
            userAddress = message;
        } else if (robotCount === 9) {
            userPhone = message;
        }

        robotOutput();

        scrollChatToBottom();
    }
};

function scrollChatToBottom() {
    const chatField = document.getElementById('chatbotMessages');
    chatField.scrollTop = chatField.scrollHeight;
}

function robotOutput() {
    if (robotCount >= Object.keys(chatList).length) return;

    robotCount++;
    console.log('robotCount：' + robotCount);

    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');
    li.classList.add('left');
    ul.appendChild(li);

    const robotLoadingDiv = document.createElement('div');
    robotLoadingDiv.classList.add('chatbot-left');
    robotLoadingDiv.innerHTML = '<div class="loading"><span></span><span></span><span></span></div>';
    li.appendChild(robotLoadingDiv);
    scrollChatToBottom();

    setTimeout(() => {
        robotLoadingDiv.remove();

        const div = document.createElement('div');
        div.classList.add('chatbot-left');
        li.appendChild(div);

        const currentChat = chatList[robotCount];
        
        if (!currentChat || !currentChat.text) {
            console.error('No text found for robotCount:', robotCount);
            return;
        }

        if (currentChat.option === 'choices') {
            const choiceField = document.createElement('div');
            choiceField.id = `q-${robotCount}`;
            choiceField.classList.add('choice-buttons-container'); /* クラスを追加 */
            div.appendChild(choiceField);

            const choiceTitle = document.createElement('div');
            choiceTitle.classList.add('choice-title');
            choiceTitle.textContent = currentChat.text.title;
            choiceField.appendChild(choiceTitle);

            for (let i = 0; i < currentChat.text.choices.length; i++) {
                const choiceButton = document.createElement('button');
                choiceButton.id = `q-${robotCount}-${i}`;
                choiceButton.setAttribute('onclick', 'pushChoice(this)');
                choiceButton.classList.add('choice-button');
                choiceButton.textContent = currentChat.text.choices[i];
                choiceField.appendChild(choiceButton);
            }

            sendMessageButton.disabled = true;
        } else if (currentChat.option === 'links') {
            const linksField = document.createElement('div');
            linksField.id = `links-${robotCount}`;
            div.appendChild(linksField);

            const linksTitle = document.createElement('div');
            linksTitle.classList.add('choice-title');
            linksTitle.textContent = currentChat.text.title;
            linksField.appendChild(linksTitle);

            for (let i = 0; i < currentChat.text.links.length; i++) {
                const linkElem = document.createElement('a');
                linkElem.href = currentChat.text.links[i].url;
                linkElem.target = '_blank';
                linkElem.classList.add('link-item');
                linkElem.textContent = currentChat.text.links[i].title;
                linksField.appendChild(linkElem);
                linksField.appendChild(document.createElement('br'));
            }

            const backButton = document.createElement('button');
            backButton.textContent = '最初に戻る';
            backButton.classList.add('choice-button');
            backButton.onclick = () => {
                robotCount = 1;
                userCount = 0;
                robotOutput();
            };
            div.appendChild(backButton);

            sendMessageButton.disabled = false;
        } else {
            switch (currentChat.option) {
                case 'normal':
                    div.innerHTML = currentChat.text;
                    break;
                case 'random':
                    div.innerHTML = currentChat.text[Math.floor(Math.random() * currentChat.text.length)];
                    break;
                default:
                    div.innerHTML = '内容が見つかりませんでした。';
                    console.error('Unknown option for robotCount:', robotCount);
            }
            sendMessageButton.disabled = false;

            if (currentChat.return) {
                const backButton = document.createElement('button');
                backButton.textContent = '最初に戻る';
                backButton.classList.add('choice-button');
                backButton.onclick = () => {
                    robotCount = 1;
                    userCount = 0;
                    robotOutput();
                };
                div.appendChild(backButton);
            }
        }

        scrollChatToBottom();

        if (currentChat.continue) {
            robotOutput();
        }
    }, 2000);
    
}




window.pushChoice = function(e) {
    userCount++;
    console.log(`userCount: ${userCount}`);

    const choicedId = e.getAttribute('id');
    userData.push(document.getElementById(choicedId).textContent);

    const choiceIndex = parseInt(choicedId.split('-')[2]);

    const choiceButtons = document.querySelectorAll(`#q-${robotCount} .choice-button`);
    choiceButtons.forEach(button => {
        if (button.id !== choicedId) {
            button.disabled = true;
            button.classList.add('choice-button-disabled');
        }
    });

    const selectedButton = document.getElementById(choicedId);
    selectedButton.disabled = true;
    selectedButton.classList.remove('choice-button-disabled');

    let nextRobotCount;

    if (robotCount === 10 && choiceIndex === 0) {
        console.log("ssss1");
        sendEmailToProfessionals();
        console.log("ffff");
        nextRobotCount = 10;
    } else if (robotCount === 10 && choiceIndex === 1) {
        nextRobotCount = 3;
    } else if (robotCount === 2 && choiceIndex === 1) {  // 「専門家を探す」を選択
        nextRobotCount = 2; // 次に分野を選択する
    } else if (robotCount === 2 && choiceIndex === 0) {  // 「お問い合わせ」を選択
        nextRobotCount = 2; // お問い合わせ内容の選択に進む
    } else if (robotCount === 3 && (choiceIndex === 0 )) {  // 「法律相談」または「税務相談」を選択
        selectedConsultationType = document.getElementById(choicedId).textContent;
        nextRobotCount = 3; // 名前をヒアリングするステップに進む
    } else if (robotCount === 3 && (choiceIndex === 1)) {  // 「法律相談」または「税務相談」を選択
        selectedConsultationType = document.getElementById(choicedId).textContent;
        nextRobotCount = 4; // 名前をヒアリングするステップに進む
    } else if (robotCount === 4 || robotCount === 5) {
        selectedConsultationDetail = document.getElementById(choicedId).textContent;
        if (userData.includes('専門家を探す')) {
            showSearchingMessage(); // 検索中のメッセージを表示
            setTimeout(() => {
                if (robotCount === 4) { // 法律相談を選択した場合
                    displayProfessionalInfo('弁護士'); // 弁護士情報を表示
                } else if (robotCount === 5) { // 税務相談を選択した場合
                    displayProfessionalInfo('税理士'); // 税理士情報を表示
                }
            }, 2000); // 2秒後に専門家情報を表示
            return;
        } else {
            nextRobotCount = 5; // 名前をヒアリングするステップに進む
        }
    } else {
        switch (choiceIndex) {
            case 0:
                nextRobotCount = 3;
                break;
            case 1:
                nextRobotCount = 4;
                break;
            default:
                nextRobotCount = 14;
        }
    }

    robotCount = nextRobotCount;
    robotOutput();
}

    const userLocation = {
        latitude: 35.6895,
        longitude: 139.6917
    };
    
    getUserLocationFromCookie();


// 専門家を検索中のメッセージを表示する関数
window.showSearchingMessage = function() {
    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');
    li.classList.add('left');
    const div = document.createElement('div');
    div.classList.add('chatbot-left');

    // くるくるアニメーションを追加
    div.innerHTML = `
        <div id="loading-spinner" class="loading-spinner"></div>
        <span>対応出来る専門家を検索中です...</span>
    `;

    li.appendChild(div);
    ul.appendChild(li);

    scrollChatToBottom();
}



window.displayProfessionalInfo = function(type) {
    // ユーザーが選択した相談内容を取得（例としてここで定義します。実際には適切なロジックで設定してください）
    const selectedSpecialty = userData[userData.length - 1]; // 最新の選択を利用

    // 専門家が表示された際にアニメーションを削除
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.parentElement.remove();
    }

    const selectedProfessionals = professionals.filter(professional => 
        professional.type === type &&
        professional.specialties.includes(selectedSpecialty) &&
        calculateDistance(userLocation.latitude, userLocation.longitude, professional.latitude, professional.longitude) <= 5000
    );

    if (selectedProfessionals.length === 0) {
        let noResultHTML = `<div class="not-found-left">申し訳ありません。お近くに対応できる専門家が見つかりませんでした。<br>適切な専門家をお探しするにはこちらの番号にお電話ください: <br><a href="tel:050-5578-9800" style="color: #0000EE; font-weight: bold; text-decoration: underline;">050-5578-9800</a></div>`;

        const div = document.createElement('div');
        div.classList.add('chatbot-left');
        div.innerHTML = noResultHTML;
        
        // 空白の吹き出しが追加されないようにする
        if (noResultHTML.trim() !== "") {
            document.getElementById('chatbot-ul').appendChild(div);
        }

        // 「最初に戻る」ボタンを追加
        const backButton = document.createElement('button');
        backButton.textContent = '最初に戻る';
        backButton.classList.add('choice-button');
        backButton.onclick = () => {
            robotCount = 1;
            userCount = 0;
            robotOutput();
        };
        div.appendChild(backButton);

        scrollChatToBottom();

        return;

    }

    selectedProfessionals.forEach(professional => {
        professional.distance = calculateDistance(userLocation.latitude, userLocation.longitude, professional.latitude, professional.longitude);
    });

    selectedProfessionals.sort((a, b) => a.distance - b.distance);

    const top5Professionals = selectedProfessionals.slice(0, 5);

    let professionalInfoHTML = `<div class="chat-bubble"><div class="lawyer-list">`;

    top5Professionals.forEach(professional => {
        const distanceClass = professional.distance <= 5.0 ? 'nearby' : '';
        const ribbonHTML = professional.freeFlg === "1" ? `<span class="lawyer-card__ribbon">初回相談無料</span>` : '';

        professionalInfoHTML += `
            <div class="lawyer-card">
                <div class="lawyer-card__header">
                    <img src="${professional.image}" alt="${professional.name}の写真" class="lawyer-card__image">
                    ${ribbonHTML}
                </div>
                <div class="lawyer-card__body">
                    <h2 class="lawyer-card__name">${professional.name}</h2>
                    <p class="lawyer-card__office">${professional.office}</p>
                    <p class="lawyer-card__distance ${distanceClass}">現在地からの距離: ${professional.distance.toFixed(1)}km</p>
                    <p class="lawyer-card__address">${professional.address}</p>
                    <p class="lawyer-card__description">${professional.description}</p>
                    <div class="lawyer-card__phone">
                        <a href="tel:${professional.phone}">
                            ${professional.phone}
                            <br>
                            <span class="business-hours">${professional.businessHours}</span>
                        </a>
                    </div>
                </div>
                <div class="lawyer-card__footer">
                    <a href="${professional.url}" class="lawyer-card__link">詳しく見る</a>
                </div>
            </div>
        `;
    });

    professionalInfoHTML += `</div></div>`;

    const div = document.createElement('div');
    div.classList.add('chatbot-left');
    div.innerHTML = professionalInfoHTML;
    document.getElementById('chatbot-ul').appendChild(div);

    scrollChatToBottom();
    addShowArrowClass();
}

    robotOutput();

});


// ユーザーの位置情報に基づいて最も近い専門家を選び、メールを送信
function sendEmailToProfessionals() {
    // 相談タイプに応じて、選択されたプロフェッショナルタイプを設定
    if (selectedConsultationType === '法律相談') {
        selectedConsultationType = '弁護士';
    } else if (selectedConsultationType === '税務相談') {
        selectedConsultationType = '税理士';
    }

    // 位置情報がクッキーから取得できない場合は、デフォルトの位置情報を使用
    let userLocation = getUserLocationFromCookie();
    if (!userLocation || !userLocation.latitude || !userLocation.longitude) {
        console.log("位置情報が取得できませんでした。デフォルトの位置情報を使用します。");
        useDefaultLocationAndSetCookie();
        userLocation = {
            latitude: 0,
            longitude: 0
        };
    }

    const matchedProfessionals = professionals.filter(professional =>
        professional.specialties.includes(selectedConsultationDetail) &&
        professional.type === selectedConsultationType
    );

    matchedProfessionals.forEach(professional => {
        professional.distance = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            professional.latitude,
            professional.longitude
        );
    });

    // 50キロ以内にある事務所だけを対象にする
    const nearbyProfessionals = matchedProfessionals.filter(professional => professional.distance <= 50);

    // 距離順にソートし、最も近い5つの事務所を選択
    const top5Professionals = nearbyProfessionals
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

    const current_time = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

    // top5Professionalsが0件だった場合、メールは送らずにChatworkにメッセージを送信
    if (top5Professionals.length === 0) {
        // Chatworkに「事務所なし」として送信
        sendMessageToChatwork([]); // Chatworkに送信
        return;
    }

    // top5Professionalsがある場合、5件の事務所に対してメールを送信
    for (const professional of top5Professionals) {
        emailjs.send("askchatmail", "template_k796y0o", {
            user_name: userName,
            user_address: userAddress,
            user_phone: userPhone,
            user_inquiry: userInquiry,
            consultation_type: selectedConsultationType,
            consultation_detail: selectedConsultationDetail,
            professional_name: professional.name,
            professional_office: professional.office,
            professional_email: professional.email,
            professional_address: professional.address,
            professional_description: professional.description,
            current_time: current_time
        })
        .then(function(response) {
            console.log('Email sent successfully to:', professional.email);
        })
        .catch(function(error) {
            console.error('Failed to send email to:', professional.email, error);
        });

        sleepSync(2000);  // 1秒間の同期スリープ
    }

    // Chatworkにも事務所情報を送信
    sendMessageToChatwork(top5Professionals);
}

// Chatworkにメッセージを送信する関数（事務所がない場合も必ず「事務所なし」として送信）
function sendMessageToChatwork(professionalsList) {
    const professionalDetails = (professionalsList && professionalsList.length > 0)
        ? professionalsList.map(professional => `${professional.office} (${professional.name})`).join(', ')
        : '事務所なし';

const messageContent = `[toall]
    【相談を受け付けました】[info]
相談日時: ${current_time}
相談分野: ${selectedConsultationType || '不明'} - ${selectedConsultationDetail || '不明'}
名前: ${userName || '不明'}
住所: ${userAddress || '不明'}
電話番号: ${userPhone || '不明'}
問い合わせ内容: ${userInquiry || '不明'}
送付事務所名(専門家名): ${professionalDetails || '事務所なし'}
[/info]`;


    sendChatworkMessage(messageContent);
}

// PHPファイルを介してChatworkにメッセージを送信する関数
function sendChatworkMessage(messageContent) {
    fetch('https://sharing.kigyou-askpro.com/api/ailinq.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            message: messageContent
        })
    })
    .then(response => response.json())  // PHPのレスポンスをJSONとして処理
    .then(data => {
        if (data.status === 'success') {
            console.log('Message sent to Chatwork via PHP:', data);
        } else {
            console.error('Error sending message via PHP:', data.message);
        }
    })
    .catch((error) => {
        console.error('Error sending message via PHP:', error);
    });
}


// 現在のスクリプトタグを特定する関数
function getCurrentScript() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
}

// URLパラメータを解析する関数
function getScriptParameter(name) {
    var script = getCurrentScript();
    var src = script.src;
    var queryString = src.split('?')[1];
    if (!queryString) {
        return null;
    }
    var params = new URLSearchParams(queryString);
    return params.get(name);
}

function getUserLocationAndSetCookie() {
    const timeoutDuration = 5000; // タイムアウト時間（ミリ秒）

    // タイムアウト用のタイマーを設定
    const locationTimeout = setTimeout(function() {
        console.log('Location request timed out. Using default location.');
        useDefaultLocationAndSetCookie();
    }, timeoutDuration);

    navigator.geolocation.getCurrentPosition(
        function(position) {
            clearTimeout(locationTimeout); // タイムアウトをクリア
            const userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            console.log('User location obtained:', userLocation);
            setLocationCookie(userLocation);
        },
        function(error) {
            clearTimeout(locationTimeout); // タイムアウトをクリア
            console.error('Error getting location:', error);
            useDefaultLocationAndSetCookie();
        }
    );
}

function useDefaultLocationAndSetCookie() {
    const defaultLocation = {
        latitude: 0, // デフォルト位置
        longitude: 0
    };
    console.log('Using default location:', defaultLocation);
    setLocationCookie(defaultLocation);
}

function setLocationCookie(location) {
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (8 * 60 * 60 * 1000)); // 8時間後に期限が切れるクッキー

    document.cookie = `user_latitude=${location.latitude}; expires=${expiryDate.toUTCString()}; path=/`;
    document.cookie = `user_longitude=${location.longitude}; expires=${expiryDate.toUTCString()}; path=/`;

    console.log('Location set in cookie:', document.cookie);
}

function getCookieValue(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function getUserLocationFromCookie() {
    // Cookieから位置情報を取得
    const latitude = getCookieValue('user_latitude');
    const longitude = getCookieValue('user_longitude');
    
    if (latitude && longitude) {
        console.log('Location from cookie:', { latitude, longitude });
        return {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
        };
    } else {
        console.log('Location cookie not found or expired. Initiating location request.');
        getUserLocationAndSetCookie();
    }
}

// ページが読み込まれたときに位置情報を取得
document.addEventListener("DOMContentLoaded", function() {
    getUserLocationFromCookie();
});

function addShowArrowClass() {
    const lawyerList = document.querySelector('.lawyer-list');
    if (lawyerList) {
        const lawyerCards = lawyerList.querySelectorAll('.lawyer-card');
        console.log('lawyerCards length:', lawyerCards.length); // ここでカードの数をログ出力
        if (lawyerCards.length > 1) {
            lawyerList.classList.add('show-arrow');
            console.log('show-arrow class added'); // クラスが追加されたことをログ出力
        }
    } else {
        console.log('lawyer-list not found');
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// 同期的なスリープ関数
function sleepSync(milliseconds) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {
        // 何もしない（ビジーウェイト）
    }
}