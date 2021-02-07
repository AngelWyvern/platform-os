const { app, BrowserWindow } = require('electron');

function materialize()
{
	const window = new BrowserWindow(
	{
		'width':800,
		'height':600,
		'autoHideMenuBar':true,
		'webPreferences':
		{
			'nodeIntegration':true,
			'enableRemoteModule':true
		}
	});

	window.loadFile('static/html/index.html');
}

app.once('ready', materialize);