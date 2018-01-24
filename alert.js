(function($) {
'use strict';

	var ModuleName = 'alt_lnal';

	var Module = function ( container, options ) {
		this.$container = $(container);
		this.options = options;
         }
	

	Module.DEFAULTS = {
		size: 'md', // xs, sm, md, lg
		html: {
			icon: '<i class="ic-lnpx warning_yellow d-ib align-middle"></i>',
			content: ''
		},
		class: {
			main: 'alt_lnal',
			wrap: {
				icon: 'iwrap',
				content: 'ctn',
				close: 'close'
			}
		},
		style: {
			main: null,
			wrap: {
				icon: null,
				content: 'color:#ffea00',
				close: null
			}
		}
	};
    


    ///append('<div class="'+this.options.class.main+" "+this.options.size+'"></div>
    //class先跳脫 再去加分隔

    Module.prototype.createAlert = function( newoptions ){ 
    var newopts = newoptions;  
    var randomId = Math.floor((Math.random() * 20000000) + 10000000);
    
    if ( typeof newoptions !== 'object' ) {
	    newopts = this.options;
	    console.log(this.options);
     console.log('111');
	}
	 else{
	 	this.extend(newoptions);
		newopts = this.extend(newoptions);
		console.log(newopts);
		console.log('222');
	 };  
	    console.log('333');   
	     this.$container.append('<div id='+newopts.class.main+randomId+' class="'+newopts.class.main+" "+newopts.size+'"><div class='+newopts.class.wrap.icon+'>'+newopts.html.icon+'</div><div class='+newopts.class.wrap.content+' style='+newopts.style.wrap.content+'>'+newopts.html.content+'</div><a href="#" class='+newopts.class.wrap.close+'></a></div>'); 	    
	     
	     var id = newopts.class.main+randomId;

         console.log(id);//alt_lnal15701316
         $('#'+id).on('click','.close', function(){$("#"+id).remove()});
     };//------------ Module.prototype.createAlert


     Module.prototype.extend = function(options){
     return $.extend(true, {}, Module.DEFAULTS, this.options, options);
    };
    
    //http://www.runoob.com/jquery/misc-extend.html
    //$.extend( [deep ], target, object1 [, objectN ] )
    //------module 
    //opts = $.extend( ture , {} , Module.DEFAULTS,this.options, );
    //===>
    //newOpts = this.extend( true , {} , Module.DEFAULTS,this.options, newoptions);


	Module.prototype.init = function () {
         this.createAlert();
	};
    
	Module.prototype.distoryAlert = function (id) {
    $('#'+id).remove();  
	};

    Module.prototype.hideAlert = function (id) {
      $('#'+id).hide();
	};

    Module.prototype.showAlert = function (id) {
       $('#'+id).show();
	};
    Module.prototype.toggleAlert = function (id) {
       $('#'+id).toggle();
	};
 






	$.fn[ModuleName] = function ( method, options ) {
		return this.each(function(){
			var $this = $(this);
			var module = $this.data( ModuleName );
			var opts = null;
			if ( !!module ) {
				if ( typeof method === 'string' &&  typeof options === 'undefined' ) {
					module[method]();
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' ) {
					module[method](options);
				} else {
					console.log('unsupported options!');
				}
			} else {
				opts = $.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ) );
				module = new Module(this, opts);
				$this.data( ModuleName, module );
				module.init();
			}
		});
	};

})(jQuery);