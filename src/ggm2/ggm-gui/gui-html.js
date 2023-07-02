module.exports = `

		<div id="background" style="width:100%;height:100vh;position:fixed;top:0;left:0;"></div>
		<script>
			window.getDirectory = function (){
				return {
					gui:"./ggm-gui",
					vm:"./ggm-vm"
				};
			};
		</script>
		<xml id="toolbox">
		</xml>
		<div id="loadingscreen" style="z-index:1000000000000000000000;" onselectstart="return false;">
			<center class="loadingscreen_center_text">
				<p class="loadingscreen_text" id="LOADINGSCREENTEXT"><h1 style="color:white;" id="loadingScreenHeader">Gvbvdxx Game Maker 2 Is loading</h1><img class="loading" src="static/loading.png" selectable=false draggable=false></p>
				<b id="filesLoadedValue" hidden style="color:white;"></b><br><progress id="filesLoaded" style="width:450px;height:35px;" hidden></progress>
			</center>
		</div>
		<div id="main_menu">
			<img class="logo" width=100 height=27 style="float:left;" src="static/logo.png"></a>
			<!--<p class="main_menu_item main_menu_item_p" id="fileDropDown" onclick="">File</p>-->
			<p class="main_menu_item main_menu_item_p" title="start over and create a new project." id="New_Game" onclick="">New</p>
			<p class="main_menu_item main_menu_item_p" title="save your project to be edited." onclick="save()">Save</p>
			<p class="main_menu_item main_menu_item_p" title="load your project so it can be edited." onclick="load()">Load</p>
			
			<p class="main_menu_item main_menu_item_p" title="export your project to be on websites." onclick="exportGame()" hidden>Export</p>
			
			
			<!--<p class="main_menu_item main_menu_item_p" title="save as an zip" onclick="saveZip();">Save GB2</p>-->
			<!--<p class="main_menu_item main_menu_item_p" title="save as an zip" onclick="loadZip();">Load GB2</p>-->
			<!--<p class="main_menu_item main_menu_item_p" onclick="window.open('./help/index.html')">Help</p>-->
			<p style="float:left; font-size:23px; margin-left:10px; margin-top:11px;" class="separatorBarMenu">|</p>
			<input type="text" id="gameTitle" title="Your Games Title Goes Here" onchange="if (saveOnline) {saveOnline();}" value="Untitled Game">
			<p style="float:left; font-size:23px; margin-left:10px; margin-top:11px;" class="separatorBarMenu">|</p>
			<button class="buttonBlue" style="float:left;" onclick="document.getElementById('projectDetails').hidden = false;" id="details">Details</button>
			<div id="online_options" hidden><button class="menuButtonOrange" onclick="share();" id="share">Share</button>
			<button class="buttonBlue" style="float:left;" onclick="viewProjectPage()" id="details">View project page</button>
			<p class="main_menu_item main_menu_item_p" onclick="saveOnline();" id="saveOnlineButton">Save Online</p>
			<p class="main_menu_item main_menu_item_p" onclick="reportButton();" id="report">Report</p></div>
		</div>
		<div hidden id="main_menu_file_options"></div>
		<!--<script>
		var main_menu_file_options = document.getElementById("main_menu_file_options");
		var bounding = document.getElementById("fileDropDown").getBoundingClientRect();
		main_menu_file_options.style.top = bounding.top+30+"px";
		main_menu_file_options.style.left = bounding.left-30+"px";
		</script>-->
		<div id="blocklyArea">
			
			<div id="blocklyDiv"></div>
			
		</div>
		<div class="right">
			<div style="background-color:black;" id="gameArea">
			<div style="background-color:#e9ecef;width:100%;">
				<button onclick="
				document.getElementById('console').innerHTML = '';
				vm.control.start();
				" style="border:none;background-color:#e9ecef;cursor:pointer;">Start</button>
				<button onclick="vm.control.stop();" style="border:none;background-color:#e9ecef;cursor:pointer;">Stop</button>
				<button onclick="
				if (document.getElementById('gameArea').getAttribute('class') == 'fullscreenGame') {
					document.getElementById('gameArea').setAttribute('class','');
					document.getElementById('gameScreen').setAttribute('style','image-rendering: pixelated;');
					document.getElementById('files').hidden = false;
					//document.exitFullscreen();
					if (window.desktopFullScreenFunction) {
						window.desktopFullScreenFunction(false);
					}
					document.getElementById('main_menu').hidden = false;
				} else {
					document.getElementById('gameArea').setAttribute('class','fullscreenGame');
					document.getElementById('gameScreen').setAttribute('style','z-index:100000000;width:88.5%;height:calc(100vh - 18px);image-rendering:pixelated;');
					//document.getElementById('gameArea').requestFullscreen();
					document.getElementById('files').hidden = true;
					if (window.desktopFullScreenFunction) {
						window.desktopFullScreenFunction(true);
					}
					document.getElementById('main_menu').hidden = true;
				}
				" style="border:none;background-color:#e9ecef;cursor:pointer;">Toggle Fullscreen</button>
				
			</div>
			<center><canvas id="gameScreen" style="image-rendering: pixelated;" width=600 height=360 style=""></canvas></center>
			</div>
			<p id="testPos" style="text-align:right; font-size:8px; margin-top:2px;"></p>
			<hr>
			<div class="RightContainerDiv">
				<button onclick="
				document.getElementById('conscontain').hidden = true;
				document.getElementById('filecontain').hidden = false;
				" class="buttonBlue" style="margin-left:0px;margin-top:0px;">Files</button>
				<button onclick="
				document.getElementById('filecontain').hidden = true;
				document.getElementById('conscontain').hidden = false;
				" class="buttonBlue" style="margin-left:0px;margin-top:0px;">Console</button>
				<div id="conscontain" hidden>
				<button onclick="document.getElementById('console').innerHTML = '';" class="buttonBlue" style="margin-left:0px;margin-top:0px;">Clear</button>
				<div id="console">
				</div>
				</div>
				<div id="filecontain">
				<input hidden type="file" id="resourceupload">
				<button class="buttonBlue" style="margin-left:0px;margin-top:0px;" onclick="document.getElementById('resourceupload').click();" buttonBlue>Add resource</button>
				<button onclick="document.getElementById('libary').hidden = false;document.getElementById('main_menu').hidden = true;" class="buttonBlue" style="margin-left:0px;margin-top:0px;" hidden>Add from libary</button>
				<div id="files" style="image-rendering:pixelated;">
					
				</div>
				</div>
			</div>
			
		</div>
		<div>
			<div class="dialog_background" id="dialogBackground">
			
			</div>
			<div class="dialog_box" id="dialogBox" hidden>
				<div class="dialog_box_top"><center><h4 style="margin-top:6px;" id="">Dialog</h4></center></div><br>
				<center>
					<h1 id="dialogText">test</h1><br>
					<h1 id="dialogName"></h1><br>
					<input id="dialogInput" style="outline:none;" type="text" hidden style="width:90%; height:30px;">
					<button class="buttonBlue" style="width:60px;" id="dialogButtonOk">ok</button>
					<button class="buttonBlue" style="width:60px;" id="dialogButtonCancel">cancel</button>
				</center>
			</div>
		</div>
		<div id="projectDetails" hidden>
			<div style="
				top:50%;
				left:50%;
				position:absolute;
				width:600px;
				height:400px;
				margin-left:-300px;
				margin-top:-200px;
				background-color:white;
				z-index:1000;
				border-radius:8px;
				overflow-y:scroll;
				overflow-x:none;
			">
				<center>
					<h1>More Project Details</h1>
					<button class="buttonBlue" onclick="document.getElementById('projectDetails').hidden = true;">Close</button>
					<h3>Discription:</h3>
					<textarea id="discription" style="width:488px;height:577px;resize:none;" onchange="try{saveOnline()}catch(e){}">Put Notes And Credits Here</textarea>
				</center>
			</div>
			<div style="
				top:0;
				left:0;
				position:absolute;
				width:100%;
				height:100vh;
				background-color:black;
				opacity:0.5;
			">
				
			</div>
		</div>
		<div id="themes" hidden>
			<div style="
				top:50%;
				left:50%;
				position:absolute;
				width:600px;
				height:400px;
				margin-left:-300px;
				margin-top:-200px;
				background-color:white;
				z-index:1000;
				border-radius:8px;
				overflow-y:scroll;
				overflow-x:none;
			">
				<center>
					<h1>Themes</h1>
					<button class="buttonBlue" onclick="
					document.getElementById('themes').hidden = true;
					closeThemes();">Close</button>
					<br>
					<button class="buttonBlue" onclick='
					var shell = require("@electron/remote").shell
					shell.openExternal(require("path").join(require("os").homedir(),"GvbvdxxGameMaker2Data/themes"));
					'>Open Theme Path</button>
					<br>
					<p>Select Theme:</p>
					<br>
					<select style="width:200px" id="themeSelect">
					
					
					</select>
				</center>
			</div>
			<div style="
				top:0;
				left:0;
				position:absolute;
				width:100%;
				height:100vh;
				background-color:black;
				opacity:0.5;
			">
				
			</div>
		</div>
		<div id="libary" hidden>
			<center>
				<h2 style="margin-top:4px;">Libary</h2>
				<button class="buttonBlue" style="margin-left:0px;margin-top:0px;" onclick="document.getElementById('libary').hidden = true;document.getElementById('main_menu').hidden = false;">close</button>
				
			</center>
			<div id="libarySelection" style="width:100%;height:calc(100vh - 100px);overflow-y:scroll;background:white;">
				
			</div>
		</div>
		<!--<div id="dialogBox">
			<center>
				<h1 id="dialogName"></h1>
				<input id="dialogInput" type="text" hidden style="width:90%; height:30px;">
				<p id="dialogText" hidden></p>
				<br>
				<br>
				<br>
				<button class="buttonBlue" id="dialogButtonOk">ok</button>
				<button class="buttonBlue" id="dialogButtonCancel">cancel</button>
			</center>
		</div>
		<div id="dialogBackground" style=""></div>-->
		
		
		
		
 		<input hidden type="file" id="gameFileUpload" accept=".ggm2g">

`;