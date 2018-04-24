({
	
    doInit : function(component, event, helper) {
        try{
            var artID = component.get("v.ArtID");
            // get the page Number if it's not define, take 1 as default
      var page = component.get("v.page") || 1;
      // get the select option (drop-down) values.   
      var recordToDisply = component.find("recordSize").get("v.value");
            helper.getResponse(component, artID,event, page, recordToDisply);
            }catch(Err){
             helper.showToast(component);
            }
    },
   
    imageError: function(component,event,helper){
    event.target.src= $A.get('$Resource.NoImage');
    },
         
    onClick : function(component, event, helper){
          var myLabel = event.currentTarget.getAttribute("src");
          helper.navigat(component,event,myLabel);
    },
    
    closemodal : function(component){
        component.destroy();
    }

    navigate: function(component, event, helper) {
        // this function call on click on the previous page button  
        var page = component.get("v.page") || 1;
        // get the previous button label  
        var direction = event.getSource().get("v.label");
        // get the select option (drop-down) values.  
        var recordToDisply = component.find("recordSize").get("v.value");
        // set the current page,(using ternary operator.)  
        page = direction === "Previous Page" ? (page - 1) : (page + 1);
        // call the helper function
        helper.getAccounts(component, page, recordToDisply);
   
     },

     onSelectChange: function(component, event, helper) {
        // this function call on the select opetion change,	 
        var page = 1
        var recordToDisply = component.find("recordSize").get("v.value");
        helper.getAccounts(component, page, recordToDisply);
     }
   	
 })