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

	if (process.platform == 'win32')
	{
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
	else
	{
		window.on('maximize', () => window.webContents.executeJavaScript(`document.body.setAttribute('maximized', 'true')`));
		window.on('unmaximize', () => window.webContents.executeJavaScript(`document.body.setAttribute('maximized', 'false')`));
	}
}

app.once('ready', () =>
{
	if (process.platform == 'linux')
		setTimeout(materialize, 500);
	else
		materialize();
});

if (process.platform == 'win32')
	plugin({ 'setGlobal':true });