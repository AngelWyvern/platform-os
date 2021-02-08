const { remote } = require('electron');

const frameRoot = document.createElement('platform-frame');

const inner = document.createElement('div');
inner.id = 'inner';
frameRoot.append(inner);

const frameTop = document.createElement('div');
frameTop.id = 'frameTop';

const favicon = document.createElement('div');
favicon.id = 'favicon';

const title = document.createElement('div');
title.id = 'title';
title.innerText = 'Platform-OS Demo';

const minimize = document.createElement('div');
minimize.addEventListener('click', () => remote.getCurrentWindow().minimize());
minimize.id = 'minimize';

const maximize = document.createElement('div');
maximize.addEventListener('click', () => { if (remote.getCurrentWindow().isMaximized()) remote.getCurrentWindow().unmaximize(); else remote.getCurrentWindow().maximize(); });
maximize.id = 'maximize';

const close = document.createElement('div');
close.addEventListener('click', () => remote.getCurrentWindow().close());
close.id = 'close';

const frameNW = document.createElement('div');
frameNW.id = 'frameNW';

const frameN = document.createElement('div');
frameN.id = 'frameN';

const frameDragRegion = document.createElement('div');
frameDragRegion.id = 'frameDragRegion';
frameN.append(frameDragRegion);

const frameNE = document.createElement('div');
frameNE.id = 'frameNE';

frameTop.append(favicon);
frameTop.append(title);
frameTop.append(frameNW);
frameTop.append(frameN);
frameTop.append(frameNE);
frameTop.append(minimize);
frameTop.append(maximize);
frameTop.append(close);
frameRoot.append(frameTop);

const frameCenter = document.createElement('div');
frameCenter.id = 'frameCenter';

const frameW = document.createElement('div');
frameW.id = 'frameW';

const frameE = document.createElement('div');
frameE.id = 'frameE';

frameCenter.append(frameW);
frameCenter.append(frameE);
frameRoot.append(frameCenter);

const frameBottom = document.createElement('div');
frameBottom.id = 'frameBottom';

const frameSW = document.createElement('div');
frameSW.id = 'frameSW';

const frameS = document.createElement('div');
frameS.id = 'frameS';

const frameSE = document.createElement('div');
frameSE.id = 'frameSE';

frameBottom.append(frameSW);
frameBottom.append(frameS);
frameBottom.append(frameSE);
frameRoot.append(frameBottom);

document.body.prepend(frameRoot);

document.body.setAttribute('focused', remote.getCurrentWindow().isFocused().toString());