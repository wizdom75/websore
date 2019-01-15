(function(){
    'use strict';

    WEBSTORE.admin.changeEvent = function(){
        $('#product-category').on('change', function(){
            var category_id = $('#product-category' + ' option:selected').val();
            $('#product-subcategory').html('Select sub category');

            $.ajax({
                type: 'GET',
                url: '/admin/category/' + category_id + '/selected',
                data:{category_id: category_id},
                success: function(response){
                    var subcategories = jQuery.parseJSON(response);
                    if(subcategories.length){
                        $.each(subcategories, function(key, value){
                            $('#product-subcategory').append('<option value="' + value.id + '">' + value.name + '</option>');
                        });
                    }else{
                        $('#product-subcategory').append('<option value="">No subcategories found</option>');
                    }
                }
            });
        });
    }
})();