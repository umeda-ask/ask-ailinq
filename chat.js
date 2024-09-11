'use strict';

//===================================================================================================

const professionals = [
    {
        name: "岡本仁志",
        office: "法律事務所桃李",
        freeFlg: "0",
        email: "h.umeda@askpro.co.jp",
        specialties: ["債権回収", "消費者被害", "企業法務"],
        address: "大阪市北区東天満1丁目7番17号 東天満ビル7階",
        description: "【ＪＲ東西線 大阪天満宮駅/南森町駅 徒歩3分】企業のビジネストラブルはお任せください！消費者トラブル、カスタマーハラスメント、債権回収、不動産トラブル、一般企業法務等を中心に幅広い分野に経験豊富な弁護士が対応いたします！",
        phone: "06-6314-6904",
        businessHours: "平日9:00～17:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/tori.jpg",
        url: "lawyer_url1",
        latitude: 34.696965,
        longitude: 135.515514,
        type: "弁護士"
    },
    {
        name: "武澤 明日香",
        office: "ボーリバージュ法律事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["離婚・男女問題"],
        address: "大阪府豊中市岡上の町4丁目1-23 レジデンスマロン参番館304",
        description: "【豊中駅徒歩5分】【離婚・男女トラブルに特化】【年間250件以上の離婚相談対応実績】クライアント一人ひとりの事情に合わせたアドバイスとサポートを提供。円満な解決を目指しつつ、精神的なサポートも重視しています。離婚にまつわる様々な問題に対応可能です。",
        phone: "06-6151-5798",
        businessHours: "平日9:00～19:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/boriba.jpg",
        url: "lawyer_url2",
        latitude: 34.785989,
        longitude: 135.466178,
        type: "弁護士"
    },
    {
        name: "正野 嘉人",
        office: "Duelパートナー法律事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["インターネット", "消費者被害", "借金"],
        address: "東京都千代田区神田須田町1-2-7 淡路町駅前ビル9階",
        description: "【淡路町駅、小川町徒歩1分】【30年以上の相談実績】【事前予約で土日祝も対応可能】インターネット問題、不当な商慣行、労働紛争、交通事故、相続、離婚など、様々な法律問題に対応！経験豊富な弁護士があなたのために戦います！",
        phone: "03-6262-9980",
        businessHours: "平日9:00～21:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/duel1.jpg",
        url: "lawyer_url2",
        latitude: 35.695232,
        longitude: 139.767767,
        type: "弁護士"
    },
    {
        name: "大野 弘明",
        office: "Duelパートナー法律事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["インターネット", "消費者被害", "借金"],
        address: "東京都千代田区神田須田町1-2-7 淡路町駅前ビル9階",
        description: "【淡路町駅、小川町徒歩1分】【30年以上の相談実績】【事前予約で土日祝も対応可能】インターネット問題、不当な商慣行、労働紛争、交通事故、相続、離婚など、様々な法律問題に対応！経験豊富な弁護士があなたのために戦います！",
        phone: "03-6262-9980",
        businessHours: "平日9:00～21:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/duel2.png",
        url: "lawyer_url2",
        latitude: 35.695232,
        longitude: 139.767767,
        type: "弁護士"
    },
    {
        name: "山口 達也",
        office: "みなと元町法律事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["離婚・男女問題", "相続", "不動産・建築"],
        address: "兵庫県神戸市中央区栄町通４丁目１−１１ エタニティ栄町ビル ３０１号",
        description: "【みなと元町駅徒歩1分】【初回相談無料】複雑な問題も分かりやすくご説明します。クライアント一人ひとりに対して誠実かつ献身的なサポートを提供し、法律問題を解決に導きます。",
        phone: "078-367-6880",
        businessHours: "平日9:00～17:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/duel2.png",
        url: "lawyer_url2",
        latitude: 34.685957,
        longitude: 135.184551,
        type: "弁護士"
    },
    {
        name: "船井 克矢",
        office: "船井法律事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["企業法務"],
        address: "東京都渋谷区渋谷2-24-12　渋谷スクランブルスクエア39階",
        description: "【渋谷駅直結/渋谷スクランブルスクエア内】【初回相談無料】【ベンチャー企業、中小企業、IT企業の法務に注力】代表弁護士が迅速に直接対応します。クライアント一人ひとりの状況に合わせた解決をサポートします。【経営層からの相談実績豊富】【リモート対応可】",
        phone: "03-6824-5271",
        businessHours: "平日9:00～20:00",
        image: "https://s3-ap-northeast-1.amazonaws.com/navi-admin-prod/system/images/8287/office_info_202310041946_82871_w380.jpg.webp?20240226220819",
        url: "lawyer_url2",
        latitude: 35.658447,
        longitude: 139.702164,
        type: "弁護士"
    },
    {
        name: "齊藤 宏和",
        office: "弁護士法人親和法律事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["企業法務"],
        address: "東京都千代田区平河町1-6-4H1O平河町601",
        description: "【半蔵門駅徒歩3分】【弁護士歴10年超】【経営全般をサポート】法律と経営に精通した弁護士が様々な問題に対応します。ベンチャー・スタートアップ・中小企業の支援実績多数。企業法務/契約書チェック/M&A/医療・介護/労働問題/残業代/カスハラ【近隣駐車場あり】【バリアフリー】",
        phone: "03-6272-3550",
        businessHours: "平日9:00～18:00",
        image: "https://legal-image-distribution.legal.coconala.com/FDv2u8BXgeyh3rCFnmtYbe5s?width=180&height=180&crop=true",
        url: "lawyer_url2",
        latitude: 35.682377,
        longitude: 139.740253,
        type: "弁護士"
    },
    {
        name: "萱垣 建",
        office: "かやがき法律事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["離婚・男女問題", "相続", "不動産・建築", "借金", "消費者被害"],
        address: "愛知県名古屋市中区丸の内２丁目18番14号 ランドスクエア・マルノウチ ７階",
        description: "【初回相談30分無料】【丸ノ内駅徒歩１分】【弁護士歴25年以上】【当日・休日・夜間予約対応可】経験豊富な弁護士と若手弁護士がチームを組み、迅速かつ適切な対応ご提供。遺産相続、離婚、借金・債務整理など幅広い法律問題を全力でサポートいたします。",
        phone: "052-684-8940",
        businessHours: "平日9:00～17:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/kayagaki.jpg",
        url: "lawyer_url2",
        latitude: 35.173697,
        longitude: 136.899001,
        type: "弁護士"
    },
    {
        name: "森山 弘茂",
        office: "MYパートナーズ法律事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["離婚・男女問題", "相続", "交通事故", "借金"],
        address: "東京都荒川区西日暮里5-33-2小宮ビル2階",
        description: "【初回相談無料】【西日暮里駅徒歩3分】離婚、相続、交通事故、債務整理など、幅広い分野での相談に対応！アクセス良好な立地と、顧客に寄り添ったサポートで、お客様の様々な法的問題の解決を目指します！",
        phone: "03-5615-2440",
        businessHours: "平日10:00～19:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/mypartner.jpg",
        url: "lawyer_url2",
        latitude: 35.733433,
        longitude: 139.767784,
        type: "弁護士"
    },
    {
        name: "塚谷 祐貴",
        office: "かまがや総合法律事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["離婚・男女問題", "相続", "交通事故", "借金"],
        address: "千葉県 鎌ケ谷市新鎌ケ谷4-8-1 平安ビル302号室",
        description: "【鎌ヶ谷駅駅徒歩5分】【夜間/休日対応可】依頼者の話をよく聞き、より良い解決を目指すことを大切にしております。民事、刑事、家事、労働など幅広い分野で法的支援を提供いたします。",
        phone: "047-498-5880",
        businessHours: "平日9:00～18:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/kamagayasogo.jpg",
        url: "lawyer_url2",
        latitude: 35.781767,
        longitude: 140.002604,
        type: "弁護士"
    },
    {
        name: "渡辺 隆之",
        office: "司法書士法人ふたば総合事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["相続", "借金"],
        address: "東京都足立区千住4-26-3",
        description: "【北千住駅徒歩3分】【オンライン対応可】相続登記や遺産調査、会社設立、各種許認可申請など幅広い業務に対応！相続関連の手続きはお任せください！",
        phone: "03-6273-1757",
        businessHours: "平日9:00～18:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/futaba.jpg",
        url: "lawyer_url2",
        latitude: 35.753050,
        longitude: 139.805225,
        type: "弁護士"
    },
    {
        name: "芦原 孝充",
        office: "芦原会計事務所",
        freeFlg: "1",
        email: "h.umeda@askpro.co.jp",
        specialties: ["税務申告", "資産運用", "相続税", "節税"],
        address: "東京都文京区春日2-19-12 小石川ウォールズ6F",
        description: "【江戸川橋駅・春日駅 徒歩5分】法人、個人のご相談を幅広く受けております。相続の事前対策、スモールビジネスを支援、各種税務のご相談はお任せください！",
        phone: "03-5801-0815",
        businessHours: "09:00 - 18:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/ashihara.jpg",
        url: "taxaccountant_url1",
        latitude: 35.711409,
        longitude: 139.74438,
        type: "税理士"
    },
    {
        name: "平野 壮司",
        office: "税理士法人サンパートナーズオフィス",
        freeFlg: "0",
        email: "h.umeda@askpro.co.jp",
        specialties: ["法人税", "事業継承", "税務調査", "会社設立", "節税"],
        address: "神奈川県厚木市旭町1-22-8 FMビル",
        description: "【小田急線 本厚木駅徒歩5分】事前予約で夜間対応可！相続の専門家がお悩みを解決します！行政書士、CFPも在籍し、お悩みにワンストップで対応します！",
        phone: "046-226-9980",
        businessHours: "9:00 - 17:00",
        image: "https://sharing.kigyou-askpro.com/aichat/image/sunpartner.jpg",
        url: "taxaccountant_url2",
        latitude: 35.43711,
        longitude: 139.363768,
        type: "税理士"
    },
];

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
    3: { text: { title: 'お問い合わせ内容を選択してください。<br>また、位置情報を許可することでお近くの専門家をご案内することが可能です。', choices: ['法律相談', '税務相談'] }, continue: false, option: 'choices', return: true },
    4: { text: { title: '法律相談内容を選択してください。', choices: ['離婚・男女問題', '借金', '相続', '交通事故', 'インターネット', '消費者被害', '犯罪・刑事事件', '労働', '債権回収', '不動産・建築', '国際・外国人問題', '医療', '企業法務'] }, continue: false, option: 'choices', return: false },
    5: { text: { title: '税務相談内容を選択してください。', choices: ['顧問税理士', '経理・決算', '税務調査', '資金調達', '節税', '会社設立', '確定申告', '相続税', '税金・お金'] }, continue: false, option: 'choices', return: false },
    6: { text: 'お名前をフルネームで入力して送信ボタンを押してください', continue: false, option: 'normal', return: false },
    7: { text: 'ご自宅の住所を入力して送信ボタンを押してください。(例:東京都千代田区丸の内)', continue: false, option: 'normal', return: false },
    8: { text: '専門家のご連絡を受け取れるお電話番号を入力して送信ボタンを押してください。(例:0901111XXXX)', continue: false, option: 'normal', return: false },
    9: { text: 'お問い合わせ内容を入力して送信ボタンを押してください。(専門家が内容を判断できるように詳細にご入力お願い致します。)', continue: false, option: 'normal', return: false },
    10: { text: { title: '相談を送信しますか？', choices: ['はい', '入力しなおす'] }, continue: false, option: 'choices', return: false },
    11: { text: 'ご利用ありがとうございました。<br>対応出来る専門家が見つかった場合、3営業日以内にご連絡させていただきます。<br>お急ぎの場合は直接、専門家へのご連絡お願い致します。', continue: false, option: 'normal', return: true },
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

        if (robotCount === 6) {
            userName = message;
        } else if (robotCount === 7) {
            userAddress = message;
        } else if (robotCount === 8) {
            userPhone = message;
        } else if (robotCount === 9) {
            userInquiry = message;
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
        let noResultHTML = `
            <div class="">
                <span>申し訳ありません。お近くに対応できる専門家が見つかりませんでした。</span>
                <br>
                <span>適切な専門家をお探しするにはこちらの番号にお電話ください: <br><a href="tel:050-5578-9800" style="color: #0000EE; font-weight: bold; text-decoration: underline;">050-5578-9800</a></span>
            </div>
        `;

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
   
    console.log("ssss");
    const matchedProfessionals = professionals.filter(professional =>
        professional.specialties.includes(selectedConsultationDetail) &&
        professional.type === selectedConsultationType
    );
    console.log("ssss");
    
    const userLocation = {
        latitude: 35.6895,
        longitude: 139.6917
    };
    
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

    // top5Professionalsが0件だった場合
    if (top5Professionals.length === 0) {
        // support@askpro.co.jpにメールを送信
        emailjs.send("askchatmail", "template_k796y0o", {
            user_name: userName,
            user_address: userAddress,
            user_phone: userPhone,
            user_inquiry: userInquiry,
            consultation_type: selectedConsultationType,
            consultation_detail: selectedConsultationDetail,
            professional_email: "support@askpro.co.jp"
        })
        .then(function(response) {
            console.log('Email sent to support@askpro.co.jp');
        })
        .catch(function(error) {
            console.error('Failed to send email to support@askpro.co.jp:', error);
        });
        
        // 必要な他の処理
        return; // ここで処理を終了してメール送信は行わない
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
            professional_description: professional.description
        })
        .then(function(response) {
            console.log('Email sent successfully to:', professional.email);
        })
        .catch(function(error) {
            console.error('Failed to send email to:', professional.email, error);
        });

        // ここで1秒間の同期スリープを挿入
        sleepSync(1000);  // 1000ms = 1秒
    }

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
        latitude: 35.6895, // 東京のデフォルト位置
        longitude: 139.6917
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