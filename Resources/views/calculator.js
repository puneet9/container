(function(Gbl) {
	
	if(!Gbl) return;
	
	Gbl.views.calculator = function(window) {
		
	var header = Ti.UI.createView({
		top:'0',
		height:'7%',
		left:0, 
		right:0,
		borderWidth:1,
		borderColor:'#999'
		});
	
	
	var headerLabel = Ti.UI.createLabel({
		color:'red', 
		textAlign:'center', 
		height:'auto', 
		text:'BOX CALCULATOR'
		});
		
	header.add(headerLabel);
	
	var body = Ti.UI.createView({
		backgroundColor:'#F6CECE',
		height:'93%',
		width:'100%',
		top:'7%',
		borderColor:'black',
		borderWidth:1
	});
	
	
	
	
	var Label2 = Ti.UI.createLabel({
		color:'blue', 
		top:'5%', 
		Left:'3%', 
		text:'Enter the Dimentions of Container',
		height:'auto', 
		
	});
	
	body.add(Label2);
	
	var textField1 = Titanium.UI.createTextField({
		color:'blue',
		top:'10%',
		borderRadius:8,
		backgroundColor:'white',
	    keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
		width:'50%',
		height:50,				
		hintTextColor:'grey',
		hintText:'Enter Length in feet',
		
	});
	body.add(textField1);
	
	
	
	var textField2 = Titanium.UI.createTextField({
		color:'blue',
		top:'20%',
		borderRadius:8,
		backgroundColor:'white',
		 keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
		width:'50%',
		height:50,			
		paddingLeft:25,	
		hintTextColor:'grey',
		hintText:'Enter Width in feet',
		
	});
	body.add(textField2);
	
	
	
	var textField3 = Titanium.UI.createTextField({
		color:'blue',
		top:'30%',
		borderRadius:8,
		backgroundColor:'white',
		 keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
		width:'50%',
		height:50,			
		paddingLeft:25,	
		hintTextColor:'grey',
		hintText:'Enter Height in feet',
		
	});
	body.add(textField3);
	
	var Btn = Titanium.UI.createButton({
		backgroundColor:'blue',
		backgroundSelectedColor:'#CCCCCC',
		top:'50%',			
		width:'45%',
		height:50,	
		color:'#FFF',
		title:'Calculate',
		font:{fontSize:"14%"},
		borderRadius:4,
		
	});	
	body.add(Btn);
	
	var Label = Ti.UI.createLabel({
		color:'black', 
		font:{fontSize:'24',fontWeight:'bold'},
		top:'70%', 
		Right:'8%', 
		height:'auto', 
		
	});
	
	body.add(Label);
	
	
	
	
	Btn.addEventListener('click', function(e) {
		
		
		
		var x,y,z;
		
		x = textField1.value *12;
		y= textField2.value *12;
		z = textField3.value *12;
		
		var flag = false;
	do{
		if(x%18==0 )
		{
			 x=x /18;
			
			flag=false;
		}
		else
		{
			x=x-1;
			
			flag = true;
		}
		
	}while(flag);
	
	do{
		if(y%18==0 )
		{
			 y=y /18;
			
			flag=false;
		}
		else
		{
			y=y-1;
			
			flag = true;
		}
		
	}while(flag);
	
	do{
		if(z%8==0 )
		{
			 z=z /8;
			
			flag=false;
		}
		else
		{
			z=z-1;
			
			flag = true;
		}
		
	}while(flag);
		
	
	Label.text=x*y*z;
		
		
	});
	

	window.add(header);
     
     
 	var ResultLabel = Ti.UI.createLabel({
		color:'blue', 
		top:'70%', 
		left:'5%', 
		height:'auto', 
		text:'No. of Boxes : '
	});
	body.add(ResultLabel);
	
	
	
     
    window.add(body);
    Gbl.renderView();
		
	};
	
})(typeof Gbl !='undefined' ? Gbl : null);