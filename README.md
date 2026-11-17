# Drop In

寫下第一步，按 Enter，一分鐘內開始專心。

打開之後只要寫一句現在要做的事，接著跟著呼吸圓呼吸 60 秒，就會開始倒數。專注時可以選環繞音、雙耳節拍、Lo-fi、粉紅噪音、棕噪音、白噪音，或者什麼都不放。環繞音和雙耳節拍要戴耳機。

線上網址：https://iammay22.github.io/dropin/

## 檔案

- `index.html`：整個網站，CSS 和 JS 都寫在裡面
- `apps-script/Code.gs`：後台，貼進 Google 試算表的 Apps Script，負責把匿名使用紀錄寫進 `events` 分頁
- `assets/lofi-1.mp3`：Lo-fi 音樂，Kulakovka 的作品，來自 Pixabay

想加更多首 Lo-fi，就把檔案放進 `assets`，再把檔名加進 `index.html` 裡的 `LOFI` 清單。

## 使用紀錄

網站會匿名記錄打開次數、各聲音的使用與收聽時間、完成與放棄的時間點等，不會收使用者寫的任務內容。`index.html` 裡的 `ENDPOINT` 留空就完全不送資料。

設定方式：在試算表的「擴充功能 > Apps Script」貼上 `apps-script/Code.gs`，部署成網頁應用程式（執行身分選自己，存取權限選所有人），再把網址填進 `ENDPOINT`。改了程式碼要重新部署成新版本。

## 更新紀錄

- 2026-11-17：第一版
- 2026-11-17：時間到會響 5 秒的逼逼逼；鎖定螢幕顯示任務和進度條；關掉網頁後重開可以接著倒數
- 2026-11-17：加入匿名使用紀錄與 Google 試算表後台

作者：may22
