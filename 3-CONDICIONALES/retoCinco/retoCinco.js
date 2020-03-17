'use strict';

const listElement = document.querySelector('.success');

const content = '<h1>CORRECTO</h1><p>los datos son correctos</p>';

listElement.innerHTML = content;

const listElement = document.querySelector('.error');

const content = '<h1>ERROR</h1><p>ha surgido un error</p>';

listElement.innerHTML = content;

const listElement = document.querySelector('.warning');

const content = '<h1>AVISO</h1><p>tenga cuidado</p>';

listElement.innerHTML = content;