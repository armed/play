$(function() {
    var divs = $('div.chapter');
    
    var columns = [$('#first'), $('#second'), $('#third')];
    var heights = [0, 0, 0];
    
    $.each(divs, function(i, value) {
        var s = Number.MAX_VALUE;
        var index = 0;
        
        for (var y in columns) {
            var height = heights[y];
            
            if (s > height) {
                s = height;
                index = y;
            }
        }
        var current = columns[index];
        
        $(value).detach();
        current.append(value);
        $(value).show();
        heights[index] += $(value).height();
    });
});
