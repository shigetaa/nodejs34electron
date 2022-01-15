// Wikipedia を表示する為だけのプログラム
var TARGET_URL = "https://ja.wikipedia.org/";

var { app, BrowserWindow } = require('electron');

// メインウィンドウを起動
var mainWindow = null;
// 準備が出来たタイミングで呼ばれるイベント
app.on('ready', function () {
	// メインウィンドウを作成
	mainWindow = new BrowserWindow({ width: 800, height: 600 });
	// 指定のURLを読み込み
	mainWindow.loadURL(TARGET_URL);
});