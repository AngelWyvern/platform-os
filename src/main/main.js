const { app, BrowserWindow } = require('electron');
const { plugin } = require('electron-frameless-window-plugin');

function materialize()
{
	const window = new BrowserWindow(
	{
		'width':800,
		'height':600,
		'frame':false,
		'transparent':true,
		'autoHideMenuBar':true,
		'webPreferences':
		{
			'nodeIntegration':true,
			'enableRemoteModule':true
		}
	});

	window.loadFile('static/html/index.html');

	// listeners
	window.on('focus', () => window.webContents.executeJavaScript(`document.body.setAttribute('focused', 'true')`));
	window.on('blur', () => window.webContents.executeJavaScript(`document.body.setAttribute('focused', 'false')`));

	function checkMaximize()
	{
		if (window.isMaximized())
			window.webContents.executeJavaScript(`document.body.setAttribute('maximized', 'true')`);
		else
			window.webContents.executeJavaScript(`document.body.setAttribute('maximized', 'false')`);
	}
	window.on('move', checkMaximize);
	window.on('resize', checkMaximize);
}

app.once('ready', materialize);

plugin({ 'setGlobal':true });