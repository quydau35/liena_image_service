<html class="no-js">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><%= title %></title>
<style type="text/css">
* {
font: 600 16px system-ui, sans-serif;
}
form {
width: 320px;
margin: 50px auto;
text-align: center;
}
form > legend {
font-size: 36px;
color: #3c5b6d;
padding: 150px 0 20px;
}
form > input[type=file], form > input[type=file]:before {
display: block;
width: 240px;
height: 50px;
margin: 0 auto;
line-height: 50px;
text-align: center;
cursor: pointer;
}
form > input[type=file] {
position: relative;
}
form > input[type=file]:before {
content: 'Choose a Photo';
position: absolute;
top: -2px;
left: -2px;
color: #3c5b6d;
font-size: 18px;
background: #fff;
border-radius: 3px;
border: 2px solid #3c5b6d;
}
form > button[type=submit] {
border-radius: 3px;
font-size: 18px;
display: block;
border: none;
color: #fff;
cursor: pointer;
background: #2a76cd;
width: 240px;
margin: 20px auto;
padding: 15px 20px;
}
</style>
</head>
<body>
<form action="/upload" method="POST" enctype="multipart/form-data">
<legend>Upload Avatar</legend>
<input type="file" name="<%= avatar_field %>">
<button type="submit" class="btn btn-primary">Upload</button>
</form>
</body>
</html>
