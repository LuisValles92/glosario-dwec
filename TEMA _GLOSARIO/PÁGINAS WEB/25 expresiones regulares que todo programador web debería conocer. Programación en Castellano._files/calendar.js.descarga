var CALENDAR=CALENDAR||{};function __create_Calendar(date){this.selected_date=date;month=date.getMonth();year=date.getFullYear();month_len=new Date(year,month,0).getDate();first_day=new Date(year,month,0).getDay();var div=document.getElementById(this.div_id);if(this.div_class){div.className=this.div_class;}
var table=document.createElement('table');if(this.table_class){table.className=this.table_class;}else{table.setAttribute('border',1);}
var title=document.createElement('caption');title.innerHTML=this.month_names[month]+' '+year;table.appendChild(title);this.title=title;var tr=document.createElement('tr');for(var i in this.day_names){var td=document.createElement('td');td.innerHTML=this.day_names[i];tr.appendChild(td);}
table.appendChild(tr);var count=0;var start=true;for(var i=0;i<6;i++){var tr=document.createElement('tr');this.pointer[i]=new Array(7);for(var j=0;j<7;j++){var td=document.createElement('td');if(start){if(j<first_day){td.innerHTML="";tr.appendChild(td);}else{td.innerHTML=""+(count+1);tr.appendChild(td);start=false;count++;this.eventChecker(new Date(year,month,count),td);}}else{if(count<month_len){td.innerHTML=""+(count+1);tr.appendChild(td);count++;this.eventChecker(new Date(year,month,count),td);}else{td.innerHTML="";tr.appendChild(td);}}
this.pointer[i][j]=td;if(this.date.getDate()==count){this.today=td;this.today.style.backgroundColor=this.today_background_color;this.today.style.color=this.today_color;}};table.appendChild(tr);};div.appendChild(table);var footer=document.createElement('div');if(this.footer_class){div.className=this.footer_class;}
var prev_button=document.createElement('button');if(this.prev_button_class){prev_button.className=this.prev_button_class;}
prev_button.innerHTML=this.prev_name;prev_button.ref=this;prev_button.onclick=function(){this.ref.selected_date=this.ref.prevMonth(this.ref.selected_date);if(this.ref.onMonthChange)
this.ref.onMonthChange(this.ref.selected_date.getMonth()+1,this.ref.selected_date.getFullYear());else
this.ref.to(this.ref.selected_date);};var today_button=document.createElement('button');if(this.today_button_class){today_button.className=this.today_button_class;}
today_button.innerHTML=this.today_name;today_button.ref=this;today_button.onclick=function(){this.ref.selected_date=this.ref.date;if(this.ref.onMonthChange)
this.ref.onMonthChange(this.ref.selected_date.getMonth()+1,this.ref.selected_date.getFullYear());else
this.ref.to(this.ref.selected_date);};var rear_button=document.createElement('button');if(this.rear_button_class){rear_button.className=this.rear_button_class;}
rear_button.innerHTML=this.rear_name;rear_button.ref=this;rear_button.onclick=function(){this.ref.selected_date=this.ref.nextMonth(this.ref.selected_date);if(this.ref.onMonthChange)
this.ref.onMonthChange(this.ref.selected_date.getMonth()+1,this.ref.selected_date.getFullYear());else
this.ref.to(this.ref.selected_date);};footer.appendChild(prev_button);footer.appendChild(today_button);footer.appendChild(rear_button);div.appendChild(footer);if(this.table_class){table.className=this.table_class;}
this.onMonthChange(month+1,year);}
function __to_Calendar(date)
{month=date.getMonth();year=date.getFullYear();month_len=new Date(year,month,0).getDate();first_day=new Date(year,month,0).getDay();this.title.innerHTML=this.month_names[month]+' '+year;var count=0;var start=true;for(var i=0;i<6;i++){for(var j=0;j<7;j++){this.pointer[i][j].style.backgroundColor="";this.pointer[i][j].style.color="";this.pointer[i][j].style.cursor="";this.pointer[i][j].events=null;if(start){if(j<first_day){this.pointer[i][j].innerHTML="";}else{this.pointer[i][j].innerHTML=""+(count+1);start=false;count++;this.eventChecker(new Date(year,month,count),this.pointer[i][j]);}}else{if(count<month_len){this.pointer[i][j].innerHTML=""+(count+1);count++;this.eventChecker(new Date(year,month,count),this.pointer[i][j]);}else{this.pointer[i][j].innerHTML="";}}
if(this.date.getDate()==count&&this.date.getMonth()==month&&this.date.getFullYear()==year){this.today.style.backgroundColor=this.today_background_color;this.today.style.color=this.today_color;}};};}
function __init_Calendar()
{this.create(this.date);}
function __nextMonth_Calendar(date)
{var month=date.getMonth();var year=date.getFullYear();if(month==11){return new Date(year+1,0);}else{return new Date(year,month+1);}}
function __prevMonth_Calendar(date)
{var month=date.getMonth();var year=date.getFullYear();if(month==0){return new Date(year-1,11);}else{return new Date(year,month-1);}}
function __addEvent_Calendar(id,name,type,start,end,info,url)
{this.events.push({id:id,name:name,type:type,start:start,end:end,info:info,url:url,});this.to(this.selected_date);}
function __addEvent_Calendar(evnt)
{this.events.push(evnt);this.to(this.selected_date);}
function __addEvents_Calendar(evnts)
{this.events=this.events.concat(evnts);this.to(this.selected_date);}
function __replaceEvents_Calendar(evnts)
{this.events=evnts;this.to(this.selected_date);}
function __removeEvent_Calendar(id)
{this.events=this.events.filter(function(evnt){return evnt.id!=id;});this.to(this.selected_date);}
function __clearEvents_Calendar()
{this.events=[];this.to(this.selected_date);}
function __filterEvents_Calendar(prototype)
{return this.events.filter(function(evnt){var add=true;if(prototype.id)
{add=add&&(evnt.id==prototype.id);}
if(prototype.name){add=add&&(evnt.name==prototype.name);}
if(prototype.type){add=add&&(evnt.type==prototype.type);}
if(prototype.start){add=add&&(evnt.start==prototype.start);}
if(prototype.end){add=add&&(evnt.end==prototype.end);}
if(prototype.info){add=add&&(evnt.info==prototype.info);}
if(prototype.url){add=add&&(evnt.url==prototype.url);}
return add;});}
function __eventChecker_Calendar(date,cell){var day_events=this.events.filter(function(evnt){var from=new Date(evnt.start);var to=new Date(evnt.end);return(date>=from&&date<=to);});if(cell){for(var evnt in day_events){if(this.events_colors){var color=this.events_colors.filter(function(event_color){return event_color.type==day_events[evnt].type;})[0];color=color?color.color:null;}
cell.style.backgroundColor=color?color:this.default_event_background_color;cell.style.color=this.default_event_color;cell.style.cursor="pointer";}
cell.date=date;if(!cell.ref){cell.ref=this;};if(!cell.events){cell.events=day_events;};if(!cell.onclick){cell.onclick=function(){this.ref.showEvent(this.events,this.date);}};};}
function __showEvent_Calendar(evnts,date){alert('Día '+date.getDate()+' de '+this.month_names[date.getMonth()]+' de '+date.getFullYear()+'');for(var i in evnts){alert(evnts[i].name+'\n'+evnts[i].info);}}
function Calendar(params){this.div_class=params.div_class||null;this.table_class=params.table_class||null;this.prev_button_class=params.prev_button_class||null;this.today_button_class=params.today_button_class||null;this.rear_button_class=params.rear_button_class||null;this.footer_class=params.footer_class||null;this.day_names=params.day_names||['L','M','X','J','V','S','D'];this.month_names=params.month_names||['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];this.prev_name=params.prev_name||'<';this.today_name=params.today_name||'Hoy';this.rear_name=params.rear_name||'>';this.today_background_color=params.today_background_color||'#FAAC58';this.default_event_background_color=params.default_event_background_color||'#A9E2F3';this.today_color=params.today_color||'black';this.default_event_color=params.default_event_color||'black';this.events_colors=params.events_colors||null;this.div_id=params.div_id||'calendar';this.date=params.date||new Date();this.selected_date=null;this.pointer=new Array(5);this.title=null;this.today=null;this.events=params.events||[];this.create=__create_Calendar;this.init=__init_Calendar;this.to=__to_Calendar;this.nextMonth=__nextMonth_Calendar;this.prevMonth=__prevMonth_Calendar;this.addEvent=__addEvent_Calendar;this.addEvents=__addEvents_Calendar;this.removeEvent=__removeEvent_Calendar;this.replaceEvents=__replaceEvents_Calendar;this.clearEvents=__clearEvents_Calendar;this.filterEvents=__filterEvents_Calendar;this.eventChecker=__eventChecker_Calendar;this.showEvent=params.showevent||__showEvent_Calendar;this.onMonthChange=params.onmonthchange||null;}