$(function(){
	
	//step object to pause a slide 5% of the way in
	var pauseFivePCIn = {
		5: function(e, b){
			this.pause();
		}
	},
		body = $('body');
	
	//handler for theme switching
	var themeSwap = function(theme){
		body.removeClass('jtour-white').removeClass('jtour-black').removeClass('jtour-yellow').removeClass('jtour-blue').addClass('jtour-'+theme);
	}
	
	
	$.jTour({
		tourId:				'multi',
		onTourClose: function(){
						console.log("Tour stopped!");
						window.location="./index.html";
						
					},
		pages:				[
			{url: 'tour01.html', items: [
				{
					sel:		'.section.themes',
					title:		'Welcome to the Tour!',
					msg:		'<p>This tour give you a quick overview of the features.</p>',
					elemPos:	't',
					boxPos:		't',
					delay:		5000,
					offsetTop:	170,
					offsetLeft:	0, 
					
					onComplete: function(e, b){
						url('default.html');
						},
					onStart:	function(e, b){
						themeSwap('blue');
						},
					steps: {
						5: function(e, b){
							this.pause();
						}
					}
				},
				{
				    sel:		'.section.themes',
					msg:		'<p>Click the bar, restaurant and gallery buttons to control the icons on the map.</p>',
					elemPos:	't',
					boxPos:		't',
					delay:		1000,
					offsetTop:	60,
					offsetLeft:	-550,
					onStart:	function(e, b){
						themeSwap('yellow');
					},
					steps:{
						5: function(e, b){
							this.pause();
						}
					}
				},
				{
				    sel:		'.section.themes',
					msg:		'<p>Click the buttons to zoom in or out.</p>',
					elemPos:	't',
					boxPos:		't',
					delay:		1000,
					offsetTop:	60,
					offsetLeft:	-450,
					onStart:	function(e, b){
						themeSwap('yellow');
					},
					steps:{
						5: function(e, b){
							this.pause();
						}
					}
				},
				{
				    sel:		'.section.themes',
					msg:		'<p>Click the buttons to start the web tour.</p>',
					elemPos:	't',
					boxPos:		't',
					delay:		1000,
					offsetTop:	60,
					offsetLeft:	-380,
					onStart:	function(e, b){
						themeSwap('yellow');
					},
					steps:{
						5: function(e, b){
							this.pause();
						}
					}
				},
				{
				    sel:		'.section.themes',
					msg:		'<p>Each pink circle represents the gallery, and the number represents the artworks displayed in that gallery.</p>',
					elemPos:	't',
					boxPos:		't',
					delay:		5000,
					offsetTop:	538,
					offsetLeft:	-50,
					onStart:	function(e, b){
						themeSwap('yellow');
					},
					steps:{
						5: function(e, b){
							this.pause();
						}
					}
				},
				{
				    sel:		'.section.themes',
					msg:		'<p>Click on the "add" button to add your favorite gallery into your personal map. "Profile" button will take you to the detailed information for the gallery.</p>',
					elemPos:	't',
					boxPos:		't',
					delay:		5000,
					offsetTop:	350,
					offsetLeft:	180,
					onStart:	function(e, b){
						themeSwap('yellow');
					},
					steps:{
						5: function(e, b){
							this.pause();
						}
					}
				},
				
				
				{
					sel:		'.section.themes',
					title:		'Your personal map!',
					msg:		'<p>you can subtract the selected gallery from here.</p>',
					elemPos:	't',
					boxPos:		't',
					delay:		1000,
					offsetTop:	200,
					offsetLeft:	850,
					onStart:	function(e, b){
						themeSwap('yellow');
					},
					steps:{
						5: function(e, b){
							this.pause();
						}
					}
				},
				
			]}, 
			{url: 'tour02.html', items: [
				{
					sel:		'body',
					msg:		'<p>You can categorize the artworks by media, style and price.</p>',
					elemPos:	't',
					boxPos:		't',
					offsetTop:	150,
					offsetLeft:	-450,
					delay:		12000,
					onStart:	function(e, b){
						themeSwap('yellow');
					},
					
				steps:{
						5: function(e, b){
							this.pause();
						}
					}
				},
				{
					sel:		'body',
					msg:		'<p>You can assign color to each category by clicking the gray block.</p>',
					elemPos:	't',
					boxPos:		't',
					offsetTop:	228,
					offsetLeft:	-680,
					delay:		12000,
					onStart:	function(e, b){
						themeSwap('yellow');
					},
					
				steps:{
						5: function(e, b){
							this.pause();
						}
					}
				},
				{
					sel:		'body',
					msg:		'<p>The pie chart is color coded by the different types of art the gallry possess.</p>',
					elemPos:	't',
					boxPos:		't',
					offsetTop:	550,
					offsetLeft:	240,
					delay:		12000,
					onStart:	function(e, b){
						themeSwap('yellow');
					},
					
				steps:{
						5: function(e, b){
							this.pause();
						}
					}
				},
			]}, 
			{url: 'index.html', items: [
				{
					sel:		'.section.multi',
					title:		'jTour Interactive Demo: Multipage',
					msg:		'<p>The pie chart is color coded by the different types of art the gallry possess.</p>',
					elemPos:	't',
					boxPos:		't',
					delay:		1000,
					scrollTop:	-120,
					steps:{
						5: function(e, b){
							this.pause();
						}
					}
				}
			]}
		]
			
	});

	
	
	
	
	
	

	
});