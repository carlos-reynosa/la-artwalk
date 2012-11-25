


function ChartURL(gallery,markerOptions,markerSize){

	this.base="https://chart.googleapis.com/chart?cht=p&chp=4.7&chd=t:";

	this.end="&chf=bg,s,00000000";
	this.size="&chs="+markerSize.width+"x"+markerSize.height;

	this.width=markerSize.width;

	this.height=markerSize.height;
	
 
	
	this.getFilteredData=function(gallery,markerOptions){
		 data=[];
	
 
	//Ad the colors
	
	  //Get the data corresponsing to the marker Options
	  if( markerOptions.category == "media")
	  {  			  
			  for(var j=0;j<markerOptions.typeFilter.length;j++)
			  {
  				  if(gallery.artTypeData.media[markerOptions.typeFilter[j].type] >= 0 )
				  {
					  data.push(gallery.artTypeData.media[markerOptions.typeFilter[j].type]);
					 
					  
 				  }
 			  }
 	  }
	  else   if( markerOptions.category == "style")
	  {
 			  for(var j=0;j<markerOptions.typeFilter.length;j++)
			  {
  				  if(gallery.artTypeData.style[markerOptions.typeFilter[j].type] >= 0 )
				  {
					  data.push(gallery.artTypeData.style[markerOptions.typeFilter[j].type]);
					  
 				  }
 			  }
  	  }
	  else   if( markerOptions.category == "price")
	  {
  			  for(var j=0;j<markerOptions.typeFilter.length;j++)
			  {
 				  if(gallery.artTypeData.price[markerOptions.typeFilter[j].type] >= 0 )
				  {
					  data.push(gallery.artTypeData.price[markerOptions.typeFilter[j].type]);
					  
 				  }
				  
			  }
  	  }
 	  return data;
 		
	}
 

this.setData(gallery,markerOptions,markerSize);

return this;

}



ChartURL.prototype={
	getChartURL:function(){ 

return this.URL;

},





//ChartData

//Represented by an array of slices

//Each Slice containes two values. A value and a color

//Ex slice= [100, 0000FF]

//Ex of complete slice data = chartData=[ [100,0000FF] ]



setData:function(gallery,markerOptions,markerSize){

 	this.URL=this.base;
	var valueTempString="chco=";
	 
	
	var category;
	var otherData;
	var dataTotal=0;
	var otherDefaultColor=999999;


	//Chart data is an array of

	var data=this.getFilteredData(gallery,markerOptions);
	
	//convert to percentage format for the pie chart  
	 for(var j=0;j<data.length;j++)
	 {
		data[j]=(data[j]/gallery.artTypeData.totalPieces)*100;
		dataTotal+=data[j];
	 }
	 
	otherData=100-dataTotal;
	
	
 	for(var i=0;i<data.length;i++)

	{
 		if(i+1 != data.length)
 		{
 		this.URL=this.URL+data[i]+ ",";
		valueTempString=valueTempString+markerOptions.typeFilter[i].color+"|";
 		}

		else{ 
		     this.URL=this.URL+data[i]+ ",";
		this.URL=this.URL+otherData+"&";
		
			valueTempString=valueTempString+markerOptions.typeFilter[i].color+"|";
				
			valueTempString=valueTempString+otherDefaultColor+"&";

		} 
	} 
	
 
	
	this.URL+=valueTempString;
	this.URL+=this.size;
	this.URL+=this.end;


},

getWidth:function(){ return this.width;},

getHeight:function(){ return this.height;}
}; //end ChartData class





 