({
	getResponse : function(component, artID, callback){
        try{
		    var action = component.get("c.getProducts");     
            component.set("v.Spinner",true);
            action.setParams({
                recordId : artID
            });
            action.setCallback(this, function(response){
                var state = response.getState();
                console.log(state);
                 if (state === "SUCCESS") { 
                     var result = response.getReturnValue();
                      if (result!= null){
                       component.set("v.image",response.getReturnValue());
                      }else{
                          component.set("v.image",null);
                           this.showToast(component); 
                      }
                 }component.set("v.Spinner",false); 
                        
                  }); 
                  $A.enqueueAction(action);
        }catch(Err){
            this.showToast(component);
        }
    },
    
    showToast : function(component, event, helper){
          var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Error!",
        "message": "Check the data."
     });
    toastEvent.fire();
    },
    
    navigate : function(component,event,myLabel){
        var urlEvent = $A.get("e.force:navigateToURL");
                  urlEvent.setParams({
                 "url": myLabel
         });
    urlEvent.fire();
    }

})