function cursorJs()
{
document.title="Alphabet";
document.getElementById("Txt").style.display="block";
document.getElementById("Txt").style.position="absolute";
document.getElementById("Txt").style.top="1%";
document.getElementById("Txt").style.right="1%";
document.getElementById("Txt").style.width="32%";
document.getElementById("Txt").style.height="93%";
document.getElementById("Txt").style.border="2px solid #777777";
document.getElementById('Txt').style.paddingLeft="3%";
document.getElementById('Txt').style.paddingTop="2%";
document.getElementById('Txt').style.paddingRight="3%";
document.getElementById('Txt').style.backgroundColor="Honeydew";
document.getElementById("Txt").innerHTML ='\
<Table>\
<tr><th>Атрибут</th><th>Описание и пример</th></tr>\
<tr><td>auto</td><td style="cursor:auto;">Курсор назначается автоматически</td></tr>\
<tr><td>default</td><td style="cursor:default;">Встроенный (основной)</td></tr>\
<tr><td>crosshair</td><td style="cursor:crosshair;">Перекрестие</td></tr>\
<tr><td>hand</td><td style="cursor:hand;">Указатель аналогия pointer</td></tr>\
<tr><td>help</td><td style="cursor:help;">Помощь</td></tr>\
<tr><td>move</td><td style="cursor:move;">Перемещение</td></tr>\
<tr><td>pointer</td><td style="cursor:pointer;">Указатель</td></tr>\
<tr><td>n-resize</td><td style="cursor:n-resize;">Переместить на "север"</td></tr>\
<tr><td>ne-resize</td><td style="cursor:ne-resize;">Переместить на "северо-восток"</td></tr>\
<tr><td>e-resize</td><td style="cursor:e-resize;">Стрелка на "восток"</td></tr>\
<tr><td>se-resize</td><td style="cursor:se-resize;">Переместить на "юго-восток"</td></tr>\
<tr><td>s-resize</td><td style="cursor:s-resize;">Переместить на "юг"</td></tr>\
<tr><td>sw-resize</td><td style="cursor:sw-resize;">Переместить на "юго-запад"</td></tr>\
<tr><td>w-resize</td><td style="cursor:w-resize;">Переместить на "запад"</td></tr>\
<tr><td>nw-resize</td><td style="cursor:nw-resize;">Переместить на "северо-запад"</td></tr>\
<tr><td>col-resize</td><td style="cursor:col-resize;">Переместить по горизонтали</td></tr>\
<tr><td>row-resize</td><td style="cursor:row-resize;">Переместить по вертикали</td></tr>\
<tr><td>progress</td><td style="cursor:progress;">Продолжение операции</td></tr>\
<tr><td>wait</td><td style="cursor:wait;">Ожидание</td></tr>\
<tr><td>all-scrol</td><td style="cursor:all-scrol;">Переместить во все стороны</td></tr>\
<tr><td>vertical-text</td><td style="cursor:vertical-text;">Вертикальный текст</td></tr>\
<tr><td>no-drop</td><td style="cursor:no-drop;">Указатель "нет доступа"</td></tr>\
<tr><td>not-allowed</td><td style="cursor:not-allowed;">Нет доступа</td></tr>\
</table>\
'
}
