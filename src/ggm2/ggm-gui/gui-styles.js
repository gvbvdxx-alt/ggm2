module.exports = `

/*Blockly Styles*/
/* Makes our label white. */
.blocklyTreeLabel {
  color: grey;
  font-size:12px;
  font-weight:bold;
  transition: 0.2s;
}
/* Adds padding around the group of categories and separators. */
.blocklyToolboxContents {
  padding: 1px;
  transition: 0.2s;
}
/* Adds space between the categories, rounds the corners and adds space around the label. */
.blocklyTreeRow {
  padding: 0px;
  margin-bottom: 0px;
  border-radius: 0px;
  transition: 0.2s;
}
/*Editor Styles*/
html {
	background-color:#edf2ff;
	font-family:Arial;
}
#loadingscreen {
	background-color:#339af0;
	width:100%;
	height:100vh;
	position:fixed;
	top:0;
	left:0;
}
.loadingscreen_text {
	color:#ffffff;
}
.menuButtonOrange {
	color:white;
	border-radius:8px;
	width:auto;
	height:35px;
	border:none;
	font-weight:bold;
	float:left;
	margin-top:7px;
	margin-left:15px;
	background-color:#ff9100;
	transition: 0.07s;
}
.menuButtonOrange:hover {
	background-color:#e68300;
	cursor:pointer;
}
.buttonBlue {
	color:white;
	border-radius:8px;
	width:auto;
	height:35px;
	border:none;
	font-weight:bold;
	margin-top:7px;
	margin-left:15px;
	background-color:#0095ff;
	transition: 0.07s;
}
.buttonBlue:hover {
	background-color:#0076c9;
	cursor:pointer;
}
.loadingscreen_center_text {
	margin-top:calc(100vh - 350px);
}
#main_menu {
	position:fixed;
	top:0;
	left:0;
	background-color:#339af0;
	width:100%;
	height:48px;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
	z-index:1000000;
}
.main_menu_item {
	font-weight:bold;
	color:#ffffff;
	cursor:pointer;
	float:left;
	margin-left:15px;
	transition: 0.07s;
}
.main_menu_item:hover {
	font-size:20px;
	margin-top:13px;
}
#blocklyArea {
	position:fixed;
	top:48px;
	left:0;
	height:calc(100vh - 48px);
	width:50%;
}
.right {
	position:fixed;
	top:48px;
	right:0;
	height:calc(100vh - 48px);
	width:50%;
}
.dialog_background {
	background-color:#339af0;
	opacity:0.5;
	width:100%;
	height:100vh;
	position:fixed;
	top:0;
	left:0;
}
.dialog_box {
	width:400px;
	height:200px;
	margin-top:-100px;
	margin-left:-200px;
	background-color:white;
	position:fixed;
	top:50%;
	left:50%;
	border-radius:6px;
	color:black;
}
.dialog_box_top {
	width:400px;
	height:30px;
	background-color:#339af0;
	position:fixed;
	top:50%;
	left:50%;
	margin-top:-100px;
	margin-left:-200px;
	border-radius:6px;
	border-bottom-left-radius:0px;
	border-bottom-right-radius:0px;
	color:white;
}
#gameTitle {
	background-color:#1971c2;
	border-radius:10px;
	border:none;
	float:left;
	margin-left:15px;
	height:30px;
	margin-top:5px;
	color:white;
	font-weight:bold;
	outline:none;
	transition: 0.2s;
	border-color:#1971c2;
	border-style:solid;
	border-size:1px;
	width:100px;
}
#gameTitle:focus {
	border-color:white;
	width:160px;
}
.center {
margin: auto;
width: 60%;
border: 5px solid #FFFF00;
padding: 10px;
}
#gameScreen {
	border-radius:7px;
}
#console {
	width:100%;
	height:calc(100vh - 540px);
	background-color:#343a40;
	overflow:auto;
	color:white;
}
#files {
	width:100%;
	height:calc(100vh - 540px);
	background-color:#74c0fc;
	overflow:auto;
}
.RightContainerDiv {
	width:100%;
	height:calc(100vh - 463px);
	overflow:auto;
}
.fullscreenGame {
	top:0;
	left:0;
	position:fixed;
	width:100%;
	height:100vh;
}
/*#dialogBackground {
	width:100%;
	height:calc(100vh - 0px);
	background-color:black;
	z-index:100;
	opacity:0.7;
	display: none;
	top:0;
	left:0;
	position:fixed;
}
#dialogBox {
	width:400px;
	height:250px;
	background-color:#ffffff;
	display: none;
	top: 50%;
	left: 50%;
	margin: -100px 0 0 -200px;
	position: absolute;
	border-color:grey;
	border-width:1px;
	border-style:solid;
	z-index:200;
}*/
.logo {
	transition: 0.2s;
	margin-top:10px;
	height:35px;
	margin-top:6px;
}
.logo:hover {
	height:35px;
	margin-top:6px;
}
/* The animation code */
@keyframes example {
  0%   {transform: rotate(0deg);}
  100%  {transform: rotate(360deg);}
}

/* The element to apply the animation to */
.loading {
  width: 100px;
  height: 100px;
  animation: rotation 8s infinite linear;
  animation-name: example;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  margin-left:-3px;
}
#libary {
	top:0;
	left:0;
	position:fixed;
	width:100%;
	height:100vh;
	background-color:#339af0;
	z-index:1000;
}
.libary_item {
	width:300px;
	height:300px;
	border-color:#339af0;
	border-style:solid;
	border-width:2px;
}
.main_menu_item_p:hover {
	margin-left:12px;
}
#main_menu_file_options {
	position:fixed;
	width:100px;
	height:300px;
	background-color: #339af0;
	border-style:solid;
	border-color: #364fc7;
	border-width:1px;
	z-index:100;
}
.separatorBarMenu {
	color:#1c7ed6;
}

`;