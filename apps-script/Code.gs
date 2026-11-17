// Drop In 後台：把網站送來的匿名紀錄寫進「events」分頁。
// 欄位順序要跟 events 第一列一致：時間、session、事件、數值、裝置、來源、使用者、聲音、分鐘、秒數
// 試算表網址 /d/ 後面那一串。用代號開，程式放在哪個專案都寫得進去
const SHEET_ID = '1d1lkPg51SNa7k9hCfxdI0txauPDsp3UY6-PUkf9T3y4';
const ALLOWED = ['visit', 'start', 'breath', 'focus_done', 'quit', 'answer',
                 'sound_time', 'sound_try', 'guide_open', 'share', 'resume'];

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (ALLOWED.indexOf(d.event) < 0) return ContentService.createTextOutput('ignored');
    const text = (v, n) => String(v == null ? '' : v).slice(0, n);
    const num = v => (isFinite(Number(v)) && v !== '' && v != null) ? Number(v) : '';
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      SpreadsheetApp.openById(SHEET_ID).getSheetByName('events').appendRow([
        new Date(), text(d.session, 20), d.event, text(d.value, 30), text(d.device, 10),
        text(d.source, 60), text(d.uid, 30), text(d.sound, 20), num(d.minutes), num(d.seconds)
      ]);
    } finally {
      lock.releaseLock();
    }
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error');
  }
}

function doGet() {
  return ContentService.createTextOutput('alive');
}
