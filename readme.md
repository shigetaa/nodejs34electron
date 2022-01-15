# Electron で デスクトップアプリを作る

## Electron の インストール方法

```bash
npm i -g electron-prebuilt

```

## Electron で 簡単なアプリ作成

Electron のプログラムで Wikipedia を表示するだけのアプリを作成します。
作成するファイルは、最低限のアプリ設定ファイルとメインプログラムを用意します。

設定ファイルは`package.json`で以下の内容を記述します。

```bash
{
  "name": "nodejs34electron",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

メインプログラムは`main.js`で以下の内容を記述します。

```javascript
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
```

以下のコマンドを実行するとディスクトップアプリが起動します。
`electron` コマンドの引数には作成したプログラムを入れたディレクトリを指定します。

```bash
electron ./
```
