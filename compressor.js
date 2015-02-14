<script>

	var string = 'function repeat(selector,json){var obj=$(selector),repeatObject={id:obj.attr("id"),data:json,context:obj.html(),exec:function(){for(obj.html(""),i=0;i<json.length;i++){var data=json[i],replace=this.context.match(/{{(.*?)}}/g),output=this.context;for(a=0;a<replace.length;a++){var value=eval(replace[a]);output=output.replace(replace[a],value)}obj.append(output)}$.each($("*[repeat-src]"),function(){$(this).attr("src",$(this).attr("repeat-src"))})}};repeatObject.exec()}';

	function compress(val){
		var head  = "";
		var array = [];
		var split = val.match(/([a-z]{1,8})/g);

		for(i=0;i<split.length;i++){
			var element = array[split[i]];
			if(isNaN(element)){
				array[split[i]] = 0;
			}else{
				array[split[i]]++;
			}
		}

		keys = Object.keys(array);
		head = Object.keys(array).join();
		var re = new RegExp(Object.keys(array).join("|"), "g");
		var replacer = function (val) { return array[val]; };

		text = val.replace(re, replacer);

		console.log(head);
	}

	compress(string);

</script>
