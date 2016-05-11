// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
   			$('#search-form').on("submit",function(){
	   		 	var word = $('#word').val();
	   		 	word=word.replace(/\s+/g,'-').toLowerCase();
	   		  	$(this).attr('action', "http://synonymsdir.com/"+word);
   			});
            $(".btn-word").on("click",function(){
               var word=$(this).text();
               word=word.replace(/\s+/g,'-').toLowerCase();  
               $(this).attr("href", "http://synonymsdir.com/"+word);
            });

   			$('#word').on('railsAutocomplete.select', function(event, data){
   				$('#search-form').submit();
   			});
   	
});
	
